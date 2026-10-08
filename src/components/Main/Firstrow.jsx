import React, { useContext } from 'react'

import styles from '../Hero/hero.module.css'
import ProductCards from '../cards/ProductCards';
//context
import {ProductContext} from '../../context/ContextProvider'
import Loading from '../../Loading/Loading';

const Firstrow = ({slides}) => {
      const {filterInfo,loading}=useContext(ProductContext)
      
   
  return (
    <>
    <div className={`${styles.firstRowHolder} ${slides.classItem} `}>
     {loading===false ? filterInfo.map(item => <ProductCards key={item.id} item={item}/>) : <Loading/>}
     {}
    </div>

    </>

  )
}

export default Firstrow