import React from 'react';
import ProductCard, { Product } from './ProductCard';
import styles from '../styles/components.module.css';


interface ProductGalleryProps {
  products?: Product[];
  images?: { url: string; alt?: string }[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products, images }) => {
  if (products) {
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
  }
  // Fallback render for images-only usage
  return (
    <div className={styles.productGallery}>
      {images && images.length ? (
        images.map((img: { url: string; alt?: string }, idx: number) => (
          <img key={idx} src={img.url} alt={img.alt || `image-${idx}`} className={styles.image} />
        ))
      ) : (
        <p>No images available.</p>
      )}
    </div>
  );
};

export default ProductGallery;