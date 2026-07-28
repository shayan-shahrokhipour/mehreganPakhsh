import React, { useState } from 'react'
import styles from '../Hero/hero.module.css'
//icons
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Hero = () => {
  const slides =[
    {
    image:'/slider1.png',
    classItem:styles.sliderHolder,
  },
  {
    image:'/slider2.png',
        classItem:styles.backgroundChanging,

  }
  ]
  
  
  const [index,setIndex]=useState(0);
  const [direction,setDirection]=useState(null)
  const rightFunction=()=>{
     if(index < slides.length -1){
      setDirection('right')
      setIndex(index + 1)
      
     }else{
      setIndex(0)
        setDirection("right");

     }
  }
  const leftFunction=()=>{
    if(index > 0){
      setDirection('left')
      setIndex(index - 1)
    }else{
      setIndex(slides.length-1)
        setDirection("left");

    }
  }
  
  return (
    <section className={`${styles.sliderHolder} ${slides[index].classItem}`}>
        <div  className={styles.imgBox}>
          <img key={index} className={direction === 'right' ?`  ${styles.rightAnimation}` : ` ${styles.leftAnimation} `}src={slides[index].image} alt="hydrolic Hose"/> 
        </div>
          <div onClick={rightFunction} className={`${styles.directionIcon} ${styles.rightAnchor}`}>
              <FaChevronRight />
          </div>
          <div onClick={leftFunction} className={`${styles.directionIcon} ${styles.leftAnchor}`}>
            <FaChevronLeft />
          </div>
    </section>
  )
}

export default Hero