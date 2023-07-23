import React, {useRef, useState, useEffect} from 'react';
import styles from './component.module.css';
import Card from '../Card/Card';


const Gallery = ({projets}) => {

  const sliderRef = useRef(null)

  const handleWheelScroll = (event) => {
      // Access the underlying DOM element using the useRef hook
      const slider = sliderRef.current
      // Change the scroll behavior to "smooth"
      slider.style.scrollBehavior = 'smooth'
      // Calculate the scroll amount based on the event's delta
      const scrollAmount = event.deltaY > 0 ? slider.offsetWidth : -slider.offsetWidth
      // Scroll the gallery
      slider.scrollLeft += scrollAmount
  }

  return (
    <main className={styles.main} id='galleryContainer'>
      <section className={styles.gallery} ref={sliderRef} id="slider" onWheel={(event)=>handleWheelScroll(event)}>
        {projets.map((projet, index) => <Card projets={projets} projet={projet} index={index} key={index} slider={sliderRef}/>)}
      </section>            
    </main>
    )
}

export default Gallery;