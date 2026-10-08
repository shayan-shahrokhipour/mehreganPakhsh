import React, { useContext, useEffect, useState } from 'react'
import styles from '../components/pagination.module.css'
import { ProductContext } from '../context/ContextProvider'

const Pagination = () => {
    const {next,currentpage,setCurrentpage} = useContext(ProductContext)
   
 
const nextPages=()=>{
 if(next){
   setCurrentpage(currentpage + 1)
    
 }
}

const prepages=()=>{
  currentpage > 1 && setCurrentpage(currentpage - 1)
}

    
  return (
    <section className={styles.paginationHolder}>
        <div className={styles.pagination}>
          <button disabled={currentpage===1} onClick={prepages}>عقب</button>
          <button disabled={!next} onClick={nextPages}>جلو</button>
        </div>
    </section>
  )
}

export default Pagination