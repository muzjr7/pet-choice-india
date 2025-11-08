import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Function to log in a user
export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        if (response.data.access_token) {
            // Store the JWT token in a secure cookie
            document.cookie = `token=${response.data.access_token}; path=/; secure; samesite=strict`;
        }
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

// Function to log out a user
export const logout = () => {
    // Clear the token cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    return token !== undefined;
};

// Function to get the current user's profile
export const getProfile = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

// Helper function to get the JWT token from cookies
const getToken = () => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    return token ? token.split('=')[1] : null;
};