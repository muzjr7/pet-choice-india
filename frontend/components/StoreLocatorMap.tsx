import React, { useEffect, useState } from 'react';

const StoreLocatorMap: React.FC = () => {
    const [stores, setStores] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await fetch('/api/stores'); // TODO: Update with actual API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch stores');
                }
                const data = await response.json();
                setStores(data);
            } catch (err) {
                const msg = err instanceof Error ? err.message : 'Unknown error';
                setError(msg);
            } finally {
                setLoading(false);
            }
        };

        fetchStores();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Store Locator</h2>
            <div id="map" style={{ height: '400px', width: '100%' }}>
                {/* TODO: Integrate a map library (e.g., Google Maps, Leaflet) to display store locations */}
                {stores.map(store => (
                    <div key={store.id}>
                        <h3>{store.name}</h3>
                        <p>{store.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreLocatorMap;