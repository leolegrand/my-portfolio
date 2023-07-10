import React from 'react';
import styles from './component.module.css'

const SplashScreen = () => {
    return (
        <div className={styles.splashscreen}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.progressbar}></div>
      </div>
    );
};

export default SplashScreen;