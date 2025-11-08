import { useEffect, useState } from 'react';
import { fetchOrders } from '../utils/api';

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getOrders();
    }, []);

    return { orders, loading, error };
};

export default useOrders;