import React from 'react';
import { useCart } from '../hooks/useCart';
import CartSummary from '../components/CartSummary';
import { useRouter } from 'next/router';

const CartPage: React.FC = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        // TODO: Implement checkout logic
        router.push('/checkout');
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>Price: ₹{item.price}</p>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <CartSummary 
                        items={cartItems} 
                        onClearCart={clearCart} 
                        onCheckout={handleCheckout} 
                    />
                </div>
            )}
        </div>
    );
};

export default CartPage;