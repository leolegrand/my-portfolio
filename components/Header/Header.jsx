import React from 'react';
import Image from 'next/image';


import styles from './component.module.css'
import Logo from '@/elements/Logo/Logo';




const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.nameContainer}>
                <Logo darkMode={true}/>
                <p className={styles.name}>Léo Legrand</p>
            </div>
            
            <div className={styles.buttonsContainer}>
            <button className={styles.lang}>
                FR
            </button>
            <button className={styles.theme}>
                <Image
                 src="/../public/palette-couleur.png"
                 width={15}
                 height={15}
                 alt="Theme icon"
                 />
            </button> 
            </div>
            
            
            
        </header>
    );
};

export default Header;