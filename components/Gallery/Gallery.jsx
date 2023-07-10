import React from 'react';
import styles from './component.module.css'

const Gallery = () => {
    return (
        <main className={styles.main}>
            <section className={styles.slider}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </section>
                
        </main>
    );
};

export default Gallery;