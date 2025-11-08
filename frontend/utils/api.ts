import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

// Set up axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add JWT token to headers
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Utility functions for API calls
export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const fetchOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

// Add more utility functions as needed
// TODO: Implement error handling and response validation

export default api;