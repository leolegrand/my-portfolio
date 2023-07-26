'use client'
import { createClient } from 'next-sanity';
import React, {useEffect, useState} from 'react';
import styles from './page.module.css'
import Gallery from '@/components/Gallery/Gallery';
import { useWindowSize } from '@/hook/useWindowSize';

const Page = () => {

  if(window){
    window.screen.orientation.lock('portrait')
  }
  

  const [data, setData] = useState();

  useEffect(() => {
    // Fonction pour effectuer l'appel à l'API
    const fetchData = async () => {

      const client = createClient({
        projectId: "xas54y4f",
        dataset: "production",
        apiVersion: "2023-07-18",
        useCdn: false
      });

      try {
        const response = await client.fetch(`*[_type == 'project'] {
          title,
          "logoUrl": logo.asset->url,
          "imageUrls": [
            image1.asset->url,
            image2.asset->url,
            image3.asset->url,
            image4.asset->url,
            image5.asset->url
          ],
          categories[]->{
            title
          },
          job,
          date,
          miniDescriptionFrancais,
          descriptionFrancais,
          miniDescriptionEnglish,
          descriptionEnglish,
          githubLink,
          liveDemoLink
        }`);
        setData(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  const size = useWindowSize();
  let vh = size.height * 0.01;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if running in a browser environment
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [vh]);

  
  if(data){
  return (
    <>
    <div className={styles.layout} id='main'> 
      <Gallery projets={data}/>      
    </div> 
    </>
  );
} else {
  <>
  <div className={styles.layout}> 
    </div>
  </>
}
  
};


export default Page;