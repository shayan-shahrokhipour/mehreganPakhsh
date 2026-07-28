import React from 'react'
import styles from '../Hero/hero.module.css'
const Firstrow = ({slides}) => {
   
  return (
    <div className={`${styles.firstRowHolder} ${slides.classItem} `}>Firstrow</div>
  )
}

export default Firstrow