import React from 'react';
import styles from './components.module.css';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>₹{price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(id)} className={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;