import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';
import styles from '../styles/components.module.css';

const HomePage = () => {
    const { products, loading, error } = useFetchProducts();

    return (
        <div>
            <Head>
                <title>Pet Choice India</title>
                <meta name="description" content="Your one-stop shop for pet supplies in India." />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Welcome to Pet Choice India</h1>
                <h2>Featured Products</h2>
                {loading && <p>Loading products...</p>}
                {error && <p>Error loading products: {error.message}</p>}
                <div className={styles.productGrid}>
                    {products && products.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;