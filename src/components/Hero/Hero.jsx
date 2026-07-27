import React, { useState } from 'react'
import styles from '../Hero/hero.module.css'
//icons
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Hero = () => {
  const slides =[
    {
    image:'/slider1.png',
    classItem:styles.sliderHolder
  },
  {
    image:'/slider2.png',
        classItem:styles.backgroundChanging

  }
  ]

  const [holders,setHolders]=useState(false)
  console.log(holders);
  
  const [index,setIndex]=useState(0);
      console.log(slides[index].image);
       console.log(slides.length);
       console.log(slides[index].classItem);
       
  const rightFunction=()=>{
     if(index < slides.length -1){
      setIndex(index + 1)
      console.log(index);
      
     }else{
      setIndex(0)
     }
  }
  const leftFunction=()=>{
    if(index > 0){
      setIndex(index - 1)
      console.log(index);
    }else{
      setIndex(slides.length-1)
    }
  }
  return (
    <section className={`${styles.sliderHolder} ${slides[index].classItem}`}>
        <div className={styles.imgBox}>
          <img src={slides[index].image} alt="hydrolic Hose" />
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