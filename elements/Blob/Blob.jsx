import React from 'react';
import style from "./element.module.css"

const Blob = () => {
    return (
        <div className={style.blobContainer}>
            <div className={style.blob}></div>
            <div className={style.blur}></div>
        </div>
        
    );
};

export default Blob;