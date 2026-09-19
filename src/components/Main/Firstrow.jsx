import React, { useContext } from 'react'

import styles from '../Hero/hero.module.css'
import ProductCards from '../cards/ProductCards';
//context
import {ProductContext} from '../../context/ContextProvider'
import Loading from '../../Loading/Loading';
import { PaginationProvider } from '../../context/PaginationContext';

const Firstrow = ({slides}) => {
      const {products,filterInfo,Model,loading}=useContext(ProductContext)
      const {chunkedArray,currentpage}= useContext(PaginationProvider)
      console.log(chunkedArray[currentpage]);
   
  return (
    <>
    <div className={`${styles.firstRowHolder} ${slides.classItem} `}>
     {loading===false ? (chunkedArray[currentpage] ?? []).map(item => <ProductCards key={item.id} item={item}/>) : <Loading/>}
     {}
    </div>

    </>

  )
}

export default Firstrow