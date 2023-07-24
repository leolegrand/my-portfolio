import React, {useRef, useState, useEffect} from 'react';
import styles from './component.module.css';
import Card from '../Card/Card';


const Gallery = ({projets}) => {

  const [isOnIOs, setIsOnIOs] = useState()

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
        setIsOnIOs(true)
        sliderRef.current.style.gap = "75px";
      }
    } else {
      setIsOnIOs(false)
    }

    // Optionally, you can perform cleanup code here if needed
    return () => {
      // This code will run when the component unmounts
      // (e.g., to clean up any subscriptions or timers)
    };
  }, []); // The empty dependency array [] ensures that the effect runs only once when the component mounts

  const sliderRef = useRef(null)

  const [scrollState, setScrollState] = useState(true)

  const handleScrollState = () => {
    setScrollState(!scrollState)
  }

  const handleWheelScroll = (event) => {
    if(!scrollState){
      return
    }
    const slider = sliderRef.current;
  const scrollStep = 300; // Adjust this value to control the scroll speed

  // Calculate the scroll direction based on the event's delta
  const scrollDirection = event.deltaY > 0 ? 1 : -1;
  // Scroll the gallery by a fixed amount
  slider.scrollLeft += scrollStep * scrollDirection;
  }
  


  return (
    <main className={styles.main} id='galleryContainer'>
      <section className={styles.gallery} ref={sliderRef} id="slider" onWheel={(event)=>handleWheelScroll(event)}>
        {projets.map((projet, index) => 
        <Card
          ios={isOnIOs}
          projets={projets}
          projet={projet}
          index={index}
          key={index}
          slider={sliderRef}
          scrollState={scrollState}
          scrollStateHandler={handleScrollState}
        />)}
      </section>            
    </main>
    )
}

export default Gallery;