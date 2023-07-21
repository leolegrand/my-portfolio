'use client'

import React, {useEffect} from 'react';
import Image from 'next/image';
import Logo from '@/elements/Logo/Logo';
import style from './page.module.css'
import { useWindowSize } from '@/hook/useWindowSize';
import photodeprofil from '@/public/photo.png'
import Navigation from '@/components/Navigation/Navigation';

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
        <>
        <main className={style.about}>
            <div className={style.Bandeau}></div>
            <div className={style.CV}></div>
            <div className={style.Message}>
                <p>Im a full stack developer</p>
            </div>
            <div className={style.Image}>
            <Image
                    src={photodeprofil}
                    width={"100%"}
                    height={"100%"}
                    alt="photo de profil"
                 />
            </div>
            <div className={style.Logo}>
            <Logo darkMode={true}/>
            </div>
            <div className={style.Texte}>
            
            </div>
        </main>
        <Navigation/>
        </>
    );
};

export default About;