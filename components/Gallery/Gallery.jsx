import React, {useRef, useEffect} from 'react';
import styles from './component.module.css'
import Image from 'next/image';
import arrow from '../../public/fleche.png'
;
import Card from '../Card/Card';


const Gallery = ({projets}) => {
    const sliderRef = useRef(null);


    useEffect(() => {
      const slider = sliderRef.current;
  
      const handleScroll = () => {
        const scrollPosition = slider.scrollLeft + slider.offsetWidth / 2; // Calculate the scroll position relative to the middle of the slider
        const slides = Array.from(slider.getElementsByClassName('slide'));
  
        for (let i = 0; i < slides.length; i++) {
          const slide = slides[i];
          const slidePosition = slide.offsetLeft + slide.offsetWidth / 2; // Calculate the position of the slide's middle
  
          if (Math.abs(slidePosition - scrollPosition) < slider.offsetWidth / 2) {
            // console.log('Currently visible slide:', slide.id);
          }
        }
      };
  
      slider.addEventListener('scroll', handleScroll);
      return () => {
        slider.removeEventListener('scroll', handleScroll);
      };
    }, []);

    

    
    const handleScroll = (event) => {
      const scrollSpeed = 6
      slider.scrollLeft += event.deltaY * scrollSpeed
    }



    return (
        <main className={styles.main} id='galleryContainer'>
            <section className={styles.gallery} ref={sliderRef} id="slider" onWheel={(e)=>handleScroll(event)}>

            {projets.map((projet, index) => <Card projets={projets} projet={projet} index={index} key={index} slider={sliderRef}/>)}

            </section>

            {/* <div className={styles.arrowContainer}>
              <button className={styles.arrowButton}>
                <Image
                    className={styles.arrowReverse}
                    src={arrow}
                    width={75}
                    height={75}
                    alt="arrow icon"
                 />
              </button>

              <h1 className={styles.projectTitle}>Titre du projet</h1>

              <button className={styles.arrowButton}>
                <Image
                    src={arrow}
                    width={75}
                    height={75}
                    alt="arrow icon"
                 />
              </button>
                 
                 
            </div> */}
            
        </main>
    );
};

export default Gallery;