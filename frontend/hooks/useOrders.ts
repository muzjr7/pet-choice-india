import { useEffect, useState } from 'react';
import { fetchOrders } from '../utils/api';

export interface OrderSummary {
    id: string | number;
    status?: string;
    total?: number;
    createdAt?: string;
}

const useOrders = () => {
    const [orders, setOrders] = useState<OrderSummary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        getOrders();
    }, []);

    return { orders, loading, error };
};

export default useOrders;