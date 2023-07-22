import React, {useState, useRef, useEffect} from 'react';

import styles from "./component.module.css"

import Image from 'next/image';
import arrow from '@/public/fleche.png'
import cross from "@/public/croix.png"

const Card = ({projets, index, slider}) => {
    
        // const header =  document.querySelector('#header') 
        // const navigation = document.querySelector('#navigation')
        // const main = document.querySelector("#main")
        // const galleryContainer = document.querySelector('#galleryContainer')

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

        handleFirstCardClicked(index)
        slider.current.style.overflowX = "hidden"
        // enlarge the card and place it at the start of the X axis
        cardRef.current.classList.remove(`${styles.cardClosing}`)
        cardRef.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        cardRef.current.classList.add(`${styles.cardOpen}`)
            // forbide user to scroll on the slider
            
            setTimeout(() => {
                if(main && header && navigation && galleryContainer){

                    main.style.height = "100vh"
                    main.style.height = "calc(var(--vh, 1vh) * 100)" 

                    main.style.transform = "translateY(calc(var(--vh, 1vh) * -10)"
                    main.style.transform = "translateY(-10vh)"

                    galleryContainer.style.borderTop = "none"
                    galleryContainer.style.borderBottom = "none"

                    header.style.transform = "translateY(calc(var(--vh, 1vh) * -10)"
                    header.style.transform = "translateY(-10vh)"
            }
        },250);
            
                    
            
            
    }   

    const handleCardClose = (event) => {

            if (main && header) {
                // Access and manipulate the DOM element here
                    main.style.height = "78vh"
                    main.style.height = "calc(var(--vh, 1vh) * 78)" 
    
                    main.style.transform = "translateY(calc(var(--vh, 1vh) * 0)"
                    main.style.transform = "translateY(0vh)"
    
                    galleryContainer.style.borderTop = "1px solid white"
                    galleryContainer.style.borderBottom = "1px solid white"
    
                    header.style.transform = "translateY(calc(var(--vh, 1vh) * 0)"
                    header.style.transform = "translateY(0vh)"
    
                    main.style.transform = "translateY(calc(var(--vh, 1vh) * 0)"
                    main.style.transform = "translateY(0vh)"
            }

        


        setCardIndex(firstCardClicked)
        // prevent to propage the click event to the card listener
        event.stopPropagation()
        // shrink the card and place it at the center of the X axis
        cardRef.current.classList.remove(`${styles.cardOpen}`)
        cardRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
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