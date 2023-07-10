import React from 'react';
import styles from './component.module.css'
import Link from 'next/link';


const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.listElement}><Link href="/about">About</Link></li>
                <li className={styles.listElement}><Link href="/works">Works</Link></li>
                <li className={styles.listElement}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;