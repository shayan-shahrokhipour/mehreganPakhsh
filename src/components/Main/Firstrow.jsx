import React, { useContext } from 'react'
import { Link } from "react-router";

import styles from '../Hero/hero.module.css'
import ProductCards from '../cards/ProductCards';
//context
import {ProductContext} from '../../context/ContextProvider'
const Firstrow = ({slides}) => {
      const {products,filterInfo,Model}=useContext(ProductContext)
  return (
    <>
    <div className={`${styles.firstRowHolder} ${slides.classItem} `}>
    
     {filterInfo.map(item => <ProductCards key={item.id} item={item}/>)}
       
      
      
   
    </div>
    </>

  )
}

export default Firstrow