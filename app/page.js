'use client'

import React, {useEffect} from 'react';
import Image from 'next/image';
import Logo from '@/elements/Logo/Logo';
import styles from './page.module.css'
import { useWindowSize } from '@/hook/useWindowSize';
import photodeprofil from '@/public/photo.png'
import iconCV from '@/public/cv.png'

const About = () => {

    const size = useWindowSize();
    let vh = size.height * 0.01;
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Check if running in a browser environment
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    }, [vh]);

    return (

      <main className={styles.layout}>

              <div className={styles.logoContainer}><Logo darkMode={true}/></div>
              
              <div className={styles.title}>
                <h1 >Hey ! Je suis Léo, </h1>
                  <p>un développeur web full-stack</p>
              </div>

              <a className={styles.cv} href="/cv-leo-legrand.pdf" download>Mon CV</a>
              
              <p className={styles.disclaimer}>Mon site web est en cours de développement, certaines fonctionnalités ne sont pas intégrées, buggées et les visuels ne représentent pas encore la version finale du projet</p>
         
         
      </main>     
    );
};

export default About;