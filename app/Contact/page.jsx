"use client"

import React, {useEffect} from 'react';
import styles from "./page.module.css"
import { useWindowSize } from '@/hook/useWindowSize';

const Contact = () => {

    const size = useWindowSize();
    let vh = size.height * 0.01;

    useEffect(() => {
        if (typeof window !== 'undefined') {
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
      }, [vh]);


    return (
        <main className={styles.contact}>
            <a className={styles.mail} href="mailto:leo.legrandm@gmail.com"> Contactez-moi </a>
            
        </main>
    );
};

export default Contact;