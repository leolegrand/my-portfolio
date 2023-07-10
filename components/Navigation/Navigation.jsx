import React from 'react';
import styles from './component.module.css'
import Link from 'next/link';


const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.listElement}><Link href="/About">About</Link></li>
                <li className={styles.listElement}><Link href="/Works">Works</Link></li>
                <li className={styles.listElement}><Link href="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;