import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/components.module.css';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface ProductGalleryProps {
  products: Product[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
  return (
    <div className={styles.productGallery}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductGallery;