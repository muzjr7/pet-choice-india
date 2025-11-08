import React from 'react';
import { useCart } from '../hooks/useCart';
import { useRouter } from 'next/router';
import { processPayment } from '../utils/payments';
import CartSummary from '../components/CartSummary';

const Checkout = () => {
    const { cartItems, totalAmount } = useCart();
    const router = useRouter();

    const handlePayment = async () => {
        try {
            const paymentResponse = await processPayment(totalAmount);
            if (paymentResponse.success) {
                // TODO: Handle successful payment (e.g., redirect to order confirmation)
                router.push('/order-confirmation');
            } else {
                // TODO: Handle payment failure (e.g., show error message)
                alert('Payment failed. Please try again.');
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('An error occurred while processing your payment. Please try again.');
        }
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <CartSummary items={cartItems} totalAmount={totalAmount} />
            <button onClick={handlePayment} disabled={cartItems.length === 0}>
                Pay Now
            </button>
        </div>
    );
};

export default Checkout;