'use client'

import React, {useState, useRef} from 'react';

import styles from "./component.module.css"

import Image from 'next/image';
import arrow from '@/public/fleche.png'
import cross from "@/public/croix.png"
import git from "@/public/github.png"
import demo from "@/public/domaine.png"
import star from "@/public/ruban.png"


import useMediaQuery from '@/hook/useMediaQuery';

const Card = ({ios, projets, index, slider, scrollState, scrollStateHandler}) => {

    // =============== TO-DO // PAS URGENT ============= //
    // 1. Lorsqu'une carte est sélectionnée, et si l'index de la carte fermée n'est pas === à celui de la carte ouverte
    //    => créer un clône de la carte ouverte et l'ajouter au DOM à la fermeture 

    // 2. Le slider a un souci avec la propriété CSS "perspective" qui bouge de gauche à droite toutes les cartes lors des animations.
    //    piste : englober les cartes dans un container en "transform-style: preserve-3d"
    // ===============  =================  ============= //

    const isDesktop = useMediaQuery('(min-width: 850px)')

    const [cardIndex, setCardIndex] = useState(index)

    const [firstCardClicked, setFirstCardClicked] = useState()

    const handleFirstCardClicked = (value) => {
        setFirstCardClicked(value)
    }

    const cardRef = useRef(null);
    const cardBack = useRef(null)
    const cardBackHeader = useRef(null)
    const cardBackGallery = useRef(null)
    const cardBackDescription = useRef(null)

    let timeOutDuration = 0

 

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
            timeOutDuration = 600
            slider.current.scrollBy({
                left: offset
            });
        } else {
            timeOutDuration = 0
        }       
    }

    const handleCardIndexNext = (event) => {
        setCardIndex((prevIndex) => (prevIndex === projets.length - 1 ? 0 : prevIndex + 1))
    }
      
      const handleCardIndexPrevious = (event) => {
        setCardIndex((prevIndex) => (prevIndex === 0 ? projets.length - 1 : prevIndex - 1))
    }

    const handleCardOpen = () => {
        scrollStateHandler()  
        centerCardOnSliderXAxis()
        
        setTimeout(() => {
            handleFirstCardClicked(index)
            
            slider.current.style.overflowX = "hidden"
            slider.current.style.gap = "150px" 

            cardRef.current.classList.remove(`${styles.cardClosing}`)
            cardRef.current.classList.add(`${styles.cardOpen}`)
            cardBackGallery.current.style.overflow = "scroll"

            if(!isDesktop){
                navbar.style.transform = "translateY(calc(var(--vh, 1vh) * 12)" 
                navbar.style.transform = "translateY(12vh)" 
                header.style.transform = "translateY(calc(var(--vh, 1vh) * -10)"
                header.style.transform = "translateY(-10vh)"
            }

            setTimeout(() => {
                if( !isDesktop){
                    navbar.style.display = "none"
                    main.style.height = "100vh"
                    main.style.height = "calc(var(--vh, 1vh) * 100)"
                    // Weird gap behavior on mobile, to investigate, -10vh => -9vh seems to fix the issue on mobile devicess 
                    main.style.transform = "translateY(calc(var(--vh, 1vh) * -9)"
                    main.style.transform = "translateY(-9vh)" 
                }
                cardBack.current.classList.add(`${styles.fadeIn}`)
            },500);  
        }, timeOutDuration);      
    }   

    const handleCardClose = (event) => {

            if (!isDesktop && main && header && navbar) {
                navbar.style.display = ""
                    main.style.height = "78vh"
                    main.style.height = "calc(var(--vh, 1vh) * 78)" 
                    main.style.transform = "translateY(calc(var(--vh, 1vh) * 0)"
                    main.style.transform = "translateY(0vh)"
                    header.style.borderBottom = "1px solid white"
                    header.style.transform = "translateY(calc(var(--vh, 1vh) * 0)"
                    header.style.transform = "translateY(0vh)"

                    navbar.style.transform = "translateY(calc(var(--vh, 1vh) * 0)" 
                    navbar.style.transform = "translateY(0vh)" 
            }
            cardBackGallery.current.style.overflow = "hidden"      
        setCardIndex(firstCardClicked)
        // prevent to propage the click event to the card listener
        event.stopPropagation()
        if(ios){
            slider.current.style.gap = "75px"  
        } else {
            slider.current.style.gap = "50px"  
        }
        
        // shrink the card and place it at the center of the X axis
        cardRef.current.classList.remove(`${styles.cardOpen}`)
        // cardRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        cardRef.current.classList.add(`${styles.cardClosing}`)
        // wait for the animation to finish before allowing user to scroll on the slider
        setTimeout(() => {
            if (slider.current) {
                scrollStateHandler() 
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
                <img className={styles.logo} src={projets[cardIndex].logoUrl} alt={projets[cardIndex].title +  " logo"}/>
                
                <div className={styles.tagsList}>
                {/* {projets[cardIndex].featured == true ? <div className={styles.featured}><Image src={star} alt='featured'/><p>Featured</p><Image src={star} alt='featured'/></div> : ""} */}
                    <p className={styles.tag}>{projets[cardIndex].date?.substring(0, 4)}</p>
                    <p className={styles.tag}>{projets[cardIndex].job}</p>
                </div>
                </div>
                <div className={styles.back} ref={cardBack}>

                    <div className={styles.headerBack} ref={cardBackHeader}>
                        <div className={styles.titleContainer}>
                            <h2 className={styles.titleBack}>{projets[cardIndex].title}</h2> 
                            <span className={styles.date}>{projets[cardIndex].date?.substring(0, 4)}</span>
                        </div>                  
                        <button className={styles.closeButton} onClick={handleCardClose}>
                            <Image
                            src={cross}
                            alt='closing button'
                            />
                        </button>
                    </div>

                    <div className={styles.gallery} ref={cardBackGallery}>
                        {projetImages.map((image, index) => (
                            <img src={image} key={index} alt='screenshot'/>))}
                    </div>

                    <div className={styles.infos}>
                        <p className={styles.job}>{projets[cardIndex].job}</p>
                        
                        {/* <ul className={styles.tagsListBack}>
                            {projets[cardIndex].categories.map((categorie, index) => (
                                <li className={styles.tagBack} key={index}>{categorie.title}</li>))}
                        </ul> */}
                        
                        <div className={styles.links}>
                            <a className={styles.linkGit} href={projets[cardIndex].githubLink}>
                                <Image
                                    src={git}
                                    alt='github link'
                                />
                            </a>
                             {projets[cardIndex].liveDemoLink != null? <a className={styles.linkDemo} href={projets[cardIndex].liveDemoLink}>
                            <Image
                                    src={demo}
                                    alt='demo link'
                                />
                            </a> : null  }
                            
                         </div>
                    </div>

                    <div className={styles.description} ref={cardBackDescription}>
                        {projets[cardIndex].descriptionFrancais}
        
                    </div>

                    <div className={styles.footer}>
                        <button className={styles.prevButton} onClick={e => handleCardIndexPrevious(e)}>
                            <Image
                                className={styles.arrowPrev}
                                src={arrow}
                                alt="arrow icon previous"
                            />
                           
                        </button>
                        <button className={styles.nextButton} onClick={e => handleCardIndexNext(e)}>
                        <Image
                                className={styles.arrowNext}
                                src={arrow}
                                alt="arrow icon next"
                            />
                        </button>
                    </div>

                </div>
            
        </article>
        
            
    );
};

{/* <div className={styles.back}>
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
            </div> */}

export default Card;