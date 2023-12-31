'use client'
import { createClient } from 'next-sanity';
import React, {useEffect, useState} from 'react';
import styles from './page.module.css'
import Gallery from '@/components/Gallery/Gallery';
import { useWindowSize } from '@/hook/useWindowSize';

const Page = () => {
  
  const [data, setData] = useState();

  useEffect(() => {
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
          liveDemoLink,
          featured
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
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [vh]);

  
 
  return (

    data ? <>
      <div className={styles.layout} id='main'> 
        <Gallery projets={data}/>      
      </div> 
      </> : <div className={styles.layout} id='main'> 
        <Gallery />      
      </div>  
    
  )

  
};


export default Page;