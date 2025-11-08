import React from 'react';
import useCart, { CartItem } from '../hooks/useCart';

const CartSummary: React.FC = () => {
    const { cartItems } = useCart();
    const totalAmount = cartItems.reduce((sum: number, item: any) => sum + (item.price || 0) * (item.quantity || 1), 0);

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                                                {cartItems.map((item: CartItem) => (
                                                    <li key={item.id}>
                                                        {item.name ?? 'Unnamed'} - Quantity: {item.quantity ?? 1} - Price: ₹{item.price ?? 0}
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