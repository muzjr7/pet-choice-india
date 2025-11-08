import React from 'react';
import styles from '../styles/components.module.css';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onDelete }) => {
  const { id, name, image, price } = product;
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>₹{price.toFixed(2)}</p>
      <div className={styles.actions}>
        {onAddToCart && (
          <button onClick={() => onAddToCart(id)} className={styles.button}>
            Add to Cart
          </button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(id)} className={styles.buttonDanger}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;