import React, {useState} from 'react';
import styles from "./component.module.css"

const Card = ({projet, index}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleCard = () => {
        setIsOpen(!isOpen)
    }

    return (
        <article className={isOpen? styles.card + " " + styles.cardOpen + " slide" : styles.card + " slide"} key={index} onClick={handleCard}>
            <div className={styles.front}>
                <div className={styles.header}>
                    <p className={styles.title}>{projet.title}</p>
                    <div className={styles.separationLine}></div>
                </div>
                <img src={projet.logoUrl} alt={projet.title +  " logo"}/>
                <ul className={styles.tagsList}>
                    {projet.categories.map((categorie, index) => (
                    <li className={styles.tag} key={index}>{categorie.title}</li>))}
                </ul>
                </div>
            <div className={styles.back}>
                <p>BACK FACE</p>
            </div>
        </article>
    );
};

export default Card;