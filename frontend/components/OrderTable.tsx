import React from 'react';

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <div className="order-table">
      <h2>Order History</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>₹{order.total.toFixed(2)}</td>
                <td>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;