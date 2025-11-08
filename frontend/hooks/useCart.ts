import { useState, useEffect } from 'react';
import { getCart, addToCart, removeFromCart } from '../utils/api';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const items = await getCart();
                setCartItems(items);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            const updatedCart = await addToCart(productId);
            setCartItems(updatedCart);
        } catch (err) {
            setError(err);
        }
    };

    const handleRemoveFromCart = async (productId) => {
        try {
            const updatedCart = await removeFromCart(productId);
            setCartItems(updatedCart);
        } catch (err) {
            setError(err);
        }
    };

    return {
        cartItems,
        loading,
        error,
        handleAddToCart,
        handleRemoveFromCart,
    };
};

export default useCart;