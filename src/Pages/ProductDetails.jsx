import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ContextProvider'
import styles from '../Pages/productDetails.module.css'
import { FaBox } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
const ProductDetails = () => {
const params =useParams()
console.log(params);

const {products,filterInfo}=useContext(ProductContext)
console.log(products);


  const productsId = products.find(item=>item.id===Number(params.id));
  
  if(!productsId){
 return <h2>Loading...</h2>;   
  }
    
 const {name,img,brand,category,description,cars,price,stock}=productsId
      console.log(name)


  return (
  <>
   <section className={styles.topLayoutHolder}>
     <div className={`${styles.sameStyleLayout} ${styles.rightSide}`}>
     <img src={img} alt={name} />
    </div>
    <div className={styles.leftHolder}>
<h1>{name}</h1>

    <div className={`${styles.sameStyleLayout} ${styles.leftSide}`}>
       <p><span>نام برند :</span>{brand}</p>
       <p><span>دسته بندی :</span> {category}</p>
       <p><span>توضیحات : </span> {description}</p>
       <p><span>مورد استفاده : </span> {cars.join(" ")}</p>
       <p className={stock ? `${styles.true} `: `${styles.false}`}><span>وضعیت : </span>{stock ?  "موجود در انبار" : "موجود نیست"}</p>
        <p><span>قیمت : </span>{price.toLocaleString("fa-IR")}</p>
    </div>
    </div>
          
   </section>
    <hr className={styles.middleBorder}/>
   <section className={styles.middleLayoutHolder}>
    <div className={styles.iconHolder}>
      <FaBox className={styles.Icons} />
            <p className={styles.deliveryparagraph}>امکان تحویل فوری</p>

    </div>
    <div className={styles.iconHolder}>
       <BsClockHistory className={styles.Icons}/>
      <p className={styles.deliveryparagraph}>24 ساعته هفت روز هفته </p>
    </div>
   </section>
  </>
  )

}
export default ProductDetails