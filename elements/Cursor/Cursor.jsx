import React, { useState, useEffect } from 'react'
import styles from './component.module.css'

const Cursor = () => {
  const [x, setX] = useState()
  const [y, setY] = useState()
  // const [isHover, setIsHover] = useState()

  // const clickable = document.querySelectorAll('button, input, a')

  useEffect(() => {
    const update = (e) => {
      setX(e.x)
      setY(e.y)
    }
    // const handleSetIsHover = () => {
    //   setIsHover(!isHover)
    // }
    // console.log(clickable, isHover)
    // clickable.forEach((item) => {
    //   item.addEventListener('mouseover', handleSetIsHover)
    //   item.addEventListener('mouseout', handleSetIsHover)
    // })

    window.addEventListener('mousemove', update)
    window.addEventListener('touchmove', update)
    return () => {
      // clickable.forEach((item) => {
      //   item.removeEventListener('mouseover', handleSetIsHover)
      //   item.removeEventListener('mouseout', handleSetIsHover)
      // })
      window.removeEventListener('mousemove', update)
      window.removeEventListener('touchmove', update)
    }
  }, [setX, setY])

  return <div className={styles.cursor} style={{ top: y, left: x }}></div>
}

export default Cursor