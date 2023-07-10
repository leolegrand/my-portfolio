import React from 'react';
import styles from './element.module.css';
import Image from 'next/image'

const Hexagon = ({ size, color, backgroundColor }) => {
  const hexagonStyle = {
    width: size,
    height: size / Math.sqrt(3),
    borderColor: color,
  };

  const hexagonFillStyle = {
    fill: backgroundColor,
    stroke: "white",
  };

  return (
    <div className={styles.container}>
      <svg className={styles.hexagon} style={hexagonStyle} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" style={hexagonFillStyle} />
      </svg>
      <div className={styles.content}>
      <Image
                 src="/../public/assets/courrier.png"
                 width={30}
                 height={30}
                 alt="Courrier icon"
                 />
      </div>
    </div>
  );
};

export default Hexagon;