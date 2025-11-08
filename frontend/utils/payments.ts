import axios from 'axios';

// Base URL for the API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

// Function to initiate payment with Razorpay
export const initiateRazorpayPayment = async (orderData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payments/razorpay`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error initiating Razorpay payment:', error);
        throw error;
    }
};

// Function to verify Razorpay payment
export const verifyRazorpayPayment = async (paymentId, orderId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payments/verify`, { paymentId, orderId });
        return response.data;
    } catch (error) {
        console.error('Error verifying Razorpay payment:', error);
        throw error;
    }
};

// Function to initiate payment with PayU
export const initiatePayUPayment = async (orderData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payments/payu`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error initiating PayU payment:', error);
        throw error;
    }
};

// Function to verify PayU payment
export const verifyPayUPayment = async (paymentId, orderId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payments/verify`, { paymentId, orderId });
        return response.data;
    } catch (error) {
        console.error('Error verifying PayU payment:', error);
        throw error;
    }
};