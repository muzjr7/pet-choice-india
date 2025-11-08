import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Pet Choice India</Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                        <Link href="/admin/dashboard">Admin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;