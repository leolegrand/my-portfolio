import React, {useState, useRef, useEffect} from 'react';

import styles from "./component.module.css"

import Image from 'next/image';
import arrow from '@/public/fleche.png'
import cross from "@/public/croix.png"
import useMediaQuery from '@/hook/useMediaQuery';

const Card = ({projets, index, slider}) => {

    // Function to check if the user is on an iOS device
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  
  // Example usage:
  if (isIOS()) {
    // Code to run if the user is on an iOS device
    console.log("This is an iOS device.");
    slider.current.style.gap = "75px"
    // height doit être 65%
    // width doit être 75vw
  } else {
    // Code to run for other devices (non-iOS)
    console.log("This is not an iOS device.");
  }

    const isDesktop = useMediaQuery('(min-width: 850px)')

    let timeOutDuration = null 


    const centerCardOnSliderXAxis = () => {
        // Get map coordinates
        const cardRect = cardRef.current.getBoundingClientRect()
        // Get slider coordinates
        const sliderRect = slider.current.getBoundingClientRect();
        
        // Calculate the horizontal distance between the centers of 'cardRect' and 'sliderRect'
        const offset =
        cardRect.left +
        cardRect.width / 2 -
        sliderRect.left -
        sliderRect.width / 2;

        // Only scroll if the card is not already centered
        if (Math.abs(offset) > 1) {
            console.log('350')
            timeOutDuration = 350
            slider.current.scrollBy({
                left: offset
            });
        } else {
            console.log('0')
            timeOutDuration = 0
        }       
    }
    

        // const header =  document.querySelector('#header') 
        // const navigation = document.querySelector('#navigation')
        // const main = document.querySelector("#main")
        // const galleryContainer = document.querySelector('#galleryContainer')

    const isMobile = useMediaQuery('')

    const [cardIndex, setCardIndex] = useState(index)

    // pas urgent
    // bug fixes : empêche la carte sélectionnée initialement d'être supprimée si une autre carte est affiché lors de la fermeture (son dom étant remplacé)
    // problématique : lors de l'animation de fermeture on voit la mauvaise carte se refermer
    // piste : créer un clone de la carte initialement sélectionée et l'ajouter au dom à la fermeture
    const [firstCardClicked, setFirstCardClicked] = useState()

    const handleFirstCardClicked = (value) => {
        setFirstCardClicked(value)
    }

    //
    //

    const handleCardIndexNext = () => {
        setCardIndex(cardIndex + 1)
        if(cardIndex === projets.length -1){
            setCardIndex(0)
        }
    }

    const handleCardIndexPrevious = () => {
        setCardIndex(cardIndex - 1)
        if(cardIndex === 0){
            setCardIndex(projets.length -1)
        }
    }

    const cardRef = useRef(null);

    const handleCardOpen = () => {  
        centerCardOnSliderXAxis()
        setTimeout(() => {
            handleFirstCardClicked(index)
        slider.current.style.overflowX = "hidden"
        // enlarge the card and place it at the start of the X axis
        cardRef.current.classList.remove(`${styles.cardClosing}`)
        // cardRef.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        cardRef.current.classList.add(`${styles.cardOpen}`)            
        setTimeout(() => {
            if( !isDesktop && main && header){
                
                    main.style.height = "100vh"
                    main.style.height = "calc(var(--vh, 1vh) * 100)" 
                    console.log('is not desktop')
                    main.style.transform = "translateY(calc(var(--vh, 1vh) * -10)"
                    main.style.transform = "translateY(-10vh)"
                    header.style.borderBottom = "none"
                    header.style.transform = "translateY(calc(var(--vh, 1vh) * -10)"
                    header.style.transform = "translateY(-10vh)"    
            }
        },250);  
        }, timeOutDuration);
        
           
    }   

    const handleCardClose = (event) => {
        console.log('fermeture')

            if (!isDesktop && main && header) {
                
                    main.style.height = "78vh"
                main.style.height = "calc(var(--vh, 1vh) * 78)" 
                    main.style.transform = "translateY(calc(var(--vh, 1vh) * 0)"
                    main.style.transform = "translateY(0vh)"
                    header.style.borderBottom = "1px solid white"
                    header.style.transform = "translateY(calc(var(--vh, 1vh) * 0)"
                    header.style.transform = "translateY(0vh)"
                
            }      
            
        setCardIndex(firstCardClicked)
        // prevent to propage the click event to the card listener
        event.stopPropagation()
        // shrink the card and place it at the center of the X axis
        cardRef.current.classList.remove(`${styles.cardOpen}`)
        // cardRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        cardRef.current.classList.add(`${styles.cardClosing}`)
        // wait for the animation to finish before allowing user to scroll on the slider
        setTimeout(() => {
            if (slider.current) {
                // slider.current.scrollTo({
                //     left: 2000,
                //     behavior: 'smooth'
                //   });
                slider.current.style.overflowX = "scroll"
            }
        }, 750)
    }

    const projetImages = projets[cardIndex].imageUrls.filter((url)=>url !== null )
    
    return (
        <article className={`${styles.card} slide`} key={index} onClick={handleCardOpen} ref={cardRef}>
            <div className={styles.front}>
                <div className={styles.header}>
                    <p className={styles.title}>{projets[cardIndex].title}</p>
                    <div className={styles.separationLine}></div>
                </div>
                <img src={projets[cardIndex].logoUrl} alt={projets[cardIndex].title +  " logo"}/>
                <ul className={styles.tagsList}>
                    {projets[cardIndex].categories.map((categorie, index) => (
                    <li className={styles.tag} key={index}>{categorie.title}</li>))}
                </ul>
                </div>
            <div className={styles.back}>
                <div className={styles.Head}>
                    <h2>{projets[cardIndex].title}</h2>
                    <button className={styles.closeButton} onClick={handleCardClose}>
                        <Image
                            src={cross}
                            width={'100%'}
                            height={'100%'}
                            alt="cross icon"
                        /> 
                    </button>
                </div>
                <div className={styles.Photos}>
                    {projetImages.map((image, index) => (
                        <img src={image} key={index} alt='screenshot'/>))}
                </div>
                <div className={styles.Date}>{projets[cardIndex].date?.substring(0, 4)}</div>
                <div className={styles.Job}>{projets[cardIndex].job}</div>
                <div className={styles.Technos}><ul className={styles.tagsList}>
                    {projets[cardIndex].categories.map((categorie, index) => (
                    <li key={index}>{categorie.title}</li>))}
                </ul></div>
                <div className={styles.Texte}>{projets[cardIndex].descriptionFrancais}</div>
                <div className={styles.Links}>
                    <a href={projets[cardIndex].githubLink}>Github</a>
                    <a href={projets[cardIndex].liveDemoLink}>Live</a>
                </div>
                <div className={styles.left}>
                    <button onClick={handleCardIndexPrevious}>
                        <Image
                            className={styles.arrowReverse}
                            src={arrow}
                            width={'100%'}
                            height={'100%'}
                            alt="arrow icon"
                        /> 
                    </button>
                </div>
                <div className={styles.right}>
                <button onClick={handleCardIndexNext}>
                        <Image
                            src={arrow}
                            width={'100%'}
                            height={'100%'}
                            alt="arrow icon"
                        /> 
                    </button>
                </div>
            </div>
        </article>
            
    );
};

export default Card;