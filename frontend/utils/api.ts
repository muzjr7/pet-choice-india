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

export const fetchProductById = async (id: string | number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const deleteProduct = async (id: string | number) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const createOrder = async (orderData: Record<string, any>) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const fetchOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

// Cart operations (placeholder implementations)
export const getCart = async () => {
  // TODO: integrate with backend cart endpoint
  return [] as any[];
};
export const addToCart = async (productId: string | number) => {
  // TODO: POST to backend cart
  return [] as any[];
};
export const removeFromCart = async (productId: string | number) => {
  // TODO: DELETE from backend cart
  return [] as any[];
};

// Vendor operations (placeholder implementations)
export const fetchVendors = async () => {
  const response = await api.get('/vendors'); // ensure backend route exists
  return response.data;
};
export const deleteVendor = async (id: string) => {
  const response = await api.delete(`/vendors/${id}`);
  return response.data;
};

// Export types for convenience
export interface Product {
  id: string | number;
  name: string;
  price?: number;
  imageUrl?: string;
}

export interface Order {
  id: string | number;
  status?: string;
  total?: number;
  createdAt?: string;
}

// Add more utility functions as needed
// TODO: Implement error handling and response validation

export default api;