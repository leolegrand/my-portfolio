'use client'
import React from 'react';
import styles from './component.module.css'
import Link from 'next/link';

import { usePathname } from 'next/navigation';


const Navigation = () => {
    const pathname = usePathname()
    return (
        <footer className={styles.navigation} id='navbar'>
            <ul className={styles.list}>
                <li className={ pathname === "/" ? styles.listElementCurrent + " " + styles.listElement : styles.listElement}><Link href="/">About</Link></li>
                <li className={ pathname === "/Works" ? styles.listElementCurrent + " " + styles.listElement : styles.listElement}><Link href="/Works">Portfolio</Link></li>
                <li className={styles.listElement}><a href="mailto:leo.legrandm@gmail.com">Contact</a></li>
            </ul>
        </footer>
    );
};

export default Navigation;