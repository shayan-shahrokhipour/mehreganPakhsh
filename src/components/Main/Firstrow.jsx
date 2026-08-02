import React, { useContext } from 'react'
import { Link } from "react-router";

import styles from '../Hero/hero.module.css'
//context
import {ProductContext} from '../../context/ContextProvider'
const Firstrow = ({slides}) => {
      const getProducts=useContext(ProductContext)
 console.log(getProducts);
  return (
    <div className={`${styles.firstRowHolder} ${slides.classItem} `}>
    
       {getProducts.map(item=> <div key={item.id} className={styles.cardHolder}>
                <p className={styles.kindofcar}>{item.cars.join(" | ")}</p>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <p>{item.brand}</p>
                 <Link className={styles.detailsLinks} to={`/productDetails/${item.id}`}>برای مطالعه جزئیات کلیک کنید</Link>
                 
      </div>)}
   
    </div>
  )
}

export default Firstrow