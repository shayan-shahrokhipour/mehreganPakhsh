import React, { useContext, useState } from 'react'
import styles from '../Hero/hero.module.css'
import Firstrow from '../Main/Firstrow'
//icons
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { ProductContext } from '../../context/ContextProvider';


const Hero = () => {
 
 //context
const {products,Model,setModel,filterInfo,setFilterInfo,error}=useContext(ProductContext)
  const slides =[
    {
    image:'/slider1.png',
    classItem:styles.firstRowHolder,
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
    <>
    <section className={`${styles.sliderHolder} `}>
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
                          <Firstrow slides={slides[index]} /> 
                           {error && <p>{error}</p>}

          </>
  )
}

export default Hero