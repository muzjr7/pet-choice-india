import { useState, useEffect } from 'react';
import { getCart, addToCart, removeFromCart } from '../utils/api';

export interface CartItem {
    id: string | number;
    name?: string;
    price?: number;
    quantity?: number;
}

const useCart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const items = await getCart();
                setCartItems(items);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

        const handleAddToCart = async (productId: string | number) => {
            try {
                const updatedCart = await addToCart(productId);
                setCartItems(updatedCart as CartItem[]);
            } catch (err) {
                setError(err as Error);
            }
        };

        const handleRemoveFromCart = async (productId: string | number) => {
            try {
                const updatedCart = await removeFromCart(productId);
                setCartItems(updatedCart as CartItem[]);
            } catch (err) {
                setError(err as Error);
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