import React from 'react';
import styles from './component.module.css'
import Image from 'next/image';
import arrow from '../../public/fleche.png'

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
            <div className={styles.arrowContainer}>
                <Image
                    className={styles.arrowReverse}
                    src={arrow}
                    width={75}
                    height={75}
                    alt="arrow icon"
                 />
                 <Image
                    src={arrow}
                    width={75}
                    height={75}
                    alt="arrow icon"
                 />
            </div>
        </main>
    );
};

export default Gallery;