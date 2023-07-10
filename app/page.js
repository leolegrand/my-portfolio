'use client'

import React from 'react';
import styles from './page.module.css'
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Gallery from '@/components/Gallery/Gallery';
import { useWindowSize } from '@/utils/hook/useWindowSize';



const Page = () => {
  
  const size = useWindowSize()
  let vh = size.height * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  console.log(vh)
  return (
    <div className={styles.layout}>
      <Header/>
      <Gallery/>
      <Navigation/>
    </div>
  );
};

export default Page;