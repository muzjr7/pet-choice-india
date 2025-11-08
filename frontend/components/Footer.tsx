import React from 'react';
import styles from '../styles/components.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Pet Choice India. All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;