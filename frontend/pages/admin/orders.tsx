import React, { useEffect, useState } from 'react';
import { useFetchOrders } from '../../hooks/useOrders';
import OrderTable from '../../components/OrderTable';
import { Order } from '../../utils/api';

const OrdersPage: React.FC = () => {
  const { orders, loading, error } = useFetchOrders();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading orders: {error.message}</div>;

  return (
    <div>
      <h1>Orders Management</h1>
      <OrderTable orders={orders} />
    </div>
  );
};

export default OrdersPage;