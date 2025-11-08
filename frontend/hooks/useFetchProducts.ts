import { useEffect, useState } from 'react';
import axios from 'axios';

export interface SimpleProduct {
    id: string | number;
    name: string;
    image?: string;
    price?: number;
}

const useFetchProducts = () => {
    const [products, setProducts] = useState<SimpleProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products'); // Adjust the endpoint as needed
                setProducts(response.data as SimpleProduct[]);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};

export default useFetchProducts;