import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProductById } from '../../utils/api';
import ProductGallery from '../../components/ProductGallery';
import { Product } from '../../types/product';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        try {
          const fetchedProduct = await fetchProductById(id as string);
          setProduct(fetchedProduct);
        } catch (err) {
          setError('Failed to load product');
        } finally {
          setLoading(false);
        }
      };

      getProduct();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <ProductGallery images={product.images} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      {/* TODO: Add functionality for variants, reviews, and add-to-cart */}
    </div>
  );
};

export default ProductPage;