import React from 'react';
import useFetchProducts from '../../hooks/useFetchProducts';
import KPIWidget from '../../components/KPIWidget';
import OrderTable from '../../components/OrderTable';
import { ProductCard } from '../../components/ProductCard';

const Dashboard = () => {
    const { products, loading, error } = useFetchProducts();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <KPIWidget title="Total Sales" value={0} icon={<span>₹</span>} />
            <h2>Products Overview</h2>
            <div className="product-grid">
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <h2>Recent Orders</h2>
            <OrderTable orders={[]} />
        </div>
    );
};

export default Dashboard;