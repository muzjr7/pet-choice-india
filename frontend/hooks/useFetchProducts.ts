import { useEffect, useState } from 'react';
import { fetchProducts as fetchProductsApi } from '../utils/api';

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
                const data = await fetchProductsApi();
                setProducts(data as SimpleProduct[]);
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