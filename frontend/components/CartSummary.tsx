import React from 'react';
import { useCart } from '../hooks/useCart';

const CartSummary: React.FC = () => {
    const { cartItems, totalAmount } = useCart();

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - Quantity: {item.quantity} - Price: ₹{item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: ₹{totalAmount}</h3>
                </div>
            )}
        </div>
    );
};

export default CartSummary;