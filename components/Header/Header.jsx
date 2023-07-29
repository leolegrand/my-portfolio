"use client"

import React, {useState} from 'react';

import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';


import styles from './component.module.css'
import Logo from '@/elements/Logo/Logo';


import darkMode from '../../public/mode-sombre.png'; 




const Header = () => {

    const pathname = usePathname()

    const [isColorfulTheme, setIsColorfulTheme] = useState(false)


    // const handleTheme = () => {
    //     setIsColorfulTheme(!isColorfulTheme)
    //     localStorage.setItem('theme', isColorfulTheme)
    //     if(isColorfulTheme){
    //         document.body.classList.remove('dark-theme')
    //         document.body.classList.add('colorful-theme')
    //     } else {
    //         document.body.classList.remove('colorful-theme')
    //         document.body.classList.add('dark-theme')
    //     }
    // }

    return (
        <header className={styles.header} id='header'>

            <div className={styles.nameContainer}>
            <Link href="/"><Logo darkMode={true}/></Link>
                
                <p className={styles.name}>Léo Legrand</p>
            </div>
            
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={ pathname === "/" ? styles.listElementCurrent : styles.listElement}><Link href="/">About</Link></li>
                    <li className={ pathname === "/Works" ?  styles.listElementCurrent : styles.listElement}><Link href="/Works">Portfolio</Link></li>
                    <li className={styles.listElement}><a href="mailto:leo.legrandm@gmail.com">Contact</a></li>
                </ul>
            </nav>

            <div className={styles.buttonsContainer}>


            <button className={styles.lang}>
                FR
            </button>
            <button className={styles.theme}>
                <Image
                    // onClick={handleTheme}
                 src={darkMode}
                 width={25}
                 height={25}
                 alt="Theme icon"
                 />
            </button> 

            </div>

        </header>
    );
};

export default Header;