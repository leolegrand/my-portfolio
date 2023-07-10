
import React from 'react';
import styles from './page.module.css'
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Gallery from '@/components/Gallery/Gallery';

const page = () => {

  return (
    <div className={styles.layout}>
      <Header/>
      <Gallery/>
      <Navigation/>
    </div>
  );
};

export default page;