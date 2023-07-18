import React from 'react';
import styles from "./component.module.css"

const Card = ({projet, index}) => {
    return (
        <article className={styles.card + " slide"} key={index}>
            <div className={styles.header}>
                <p className={styles.title}>{projet.title}</p>
                <div className={styles.separationLine}></div>
            </div>
            <img src={projet.logoUrl} alt={projet.title +  " logo"}/>
            <ul className={styles.tagsList}>
                {projet.categories.map((categorie, index) => (
                <li className={styles.tag} key={index}>{categorie.title}</li>))}
             </ul>
            
        </article>
    );
};

export default Card;