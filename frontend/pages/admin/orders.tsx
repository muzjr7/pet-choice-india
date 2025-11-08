import React from 'react';
import useOrders from '../../hooks/useOrders';
import OrderTable from '../../components/OrderTable';

const OrdersPage: React.FC = () => {
  const { orders, loading, error } = useOrders();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading orders: {error.message}</div>;

  return (
    <div>
      <h1>Orders Management</h1>
      <OrderTable orders={orders.map(o => ({ ...o, date: '' }))} />
    </div>
  );
};

export default OrdersPage;