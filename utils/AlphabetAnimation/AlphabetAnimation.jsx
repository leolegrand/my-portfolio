import React, { useState, useEffect } from "react";

const AlphabetAnimation = ({ word }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [iteration, setIteration] = useState(0);
  const [text, setText] = useState(word);

  useEffect(() => {
    let interval = null;

    const startAnimation = () => {
      clearInterval(interval);

      interval = setInterval(() => {
        setIteration((prevIteration) => prevIteration + 1 / 3);
      }, 30);
    };

    const stopAnimation = () => {
      clearInterval(interval);
    };

    const handleMouseOver = () => {
      startAnimation();
    };

    const handleMouseOut = () => {
      stopAnimation();
    };

    document.querySelector("h1").addEventListener("mouseover", handleMouseOver);
    document.querySelector("h1").addEventListener("mouseout", handleMouseOut);

    return () => {
      clearInterval(interval);
      document.querySelector("h1").removeEventListener("mouseover", handleMouseOver);
      document.querySelector("h1").removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    setText(
      word
        .split("")
        .map((letter, index) => {
          if (index < Math.floor(iteration)) {
            return word[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("")
    );
  }, [iteration, word]);

  return <h1>{text}</h1>;
};

export default AlphabetAnimation;
``
