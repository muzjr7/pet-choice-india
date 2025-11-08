import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../../utils/api';
import ProductCard from '../../components/ProductCard';
import { useRouter } from 'next/router';

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
  setProducts(products.filter((product: any) => String(product.id) !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Manage Products</h1>
      <button onClick={() => router.push('/admin/products/new')}>Add New Product</button>
      <div className="product-list">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;