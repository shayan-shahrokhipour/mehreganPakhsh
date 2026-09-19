import React, { useContext, useState } from 'react'
import styles from '../components/pagination.module.css'
import { ProductContext } from '../context/ContextProvider'
import { PaginationProvider } from '../context/PaginationContext'

const Pagination = () => {
    const {products} = useContext(ProductContext)
     const {chunkedArray,currentpage,setCurrentpage} = useContext(PaginationProvider)
    

const changePages=(index)=>{
       setCurrentpage(index)
       console.log(currentpage);
       
       
    
    
}

console.log(chunkedArray);
    
  return (
    <section className={styles.paginationHolder}>
        <div className={styles.pagination}>
             {chunkedArray.map((item,index) =>(<div onClick={()=>changePages(index)} className={`${styles.paginationGroups} ${index -1  && styles.paginationActive } `} key={index}><p>{(index + 1).toLocaleString('fa-IR')}</p></div>))}
        </div>
    </section>
  )
}

export default Pagination