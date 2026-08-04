import React, { useContext } from 'react'
import styles from '../Hero/hero.module.css'

//context
import {ProductContext} from '../../context/ContextProvider'
import { Link } from 'react-router-dom'
const ProductCards = ({item}) => {
    
  return (
    

      <div className={styles.cardHolder}>
                <p className={styles.kindofcar}>{item.cars.join(" | ")}</p>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <p>{item.brand}</p>
                 <Link className={styles.detailsLinks} to={`/productDetails/${item.id}`}>برای مطالعه جزئیات کلیک کنید</Link>
                 
     
    
    </div>
  )
}

export default ProductCards