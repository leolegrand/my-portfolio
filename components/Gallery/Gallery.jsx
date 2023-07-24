import React, {useRef, useState, useEffect} from 'react';
import styles from './component.module.css';
import Card from '../Card/Card';


const Gallery = ({projets}) => {

       // =============== iOS fix  =============== //

    // Check if the user is on an iOS device
    const isIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
  
  // =============== =============== //
  
  useEffect(() => {
    // This code will run when the component mounts
    if (isIOS()) {
      // If user is on an iOS device, adjust the slider layout
      // to show only one card at the center of the screen
      if (sliderRef.current) {
        sliderRef.current.style.gap = "75px";
      }
    }

    // Optionally, you can perform cleanup code here if needed
    return () => {
      // This code will run when the component unmounts
      // (e.g., to clean up any subscriptions or timers)
    };
  }, []); // The empty dependency array [] ensures that the effect runs only once when the component mounts

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