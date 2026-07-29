import React, { useContext } from 'react'
import styles from '../Hero/hero.module.css'
//context
import {ProductContext} from '../../context/ContextProvider'
const Firstrow = ({slides}) => {
      const getProducts=useContext(ProductContext)
 console.log(getProducts);
  return (
    <div className={`${styles.firstRowHolder} ${slides.classItem} `}>Firstrow</div>
  )
}

export default Firstrow