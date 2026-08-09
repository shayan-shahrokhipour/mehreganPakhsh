import React, { useContext } from "react";
import styles from "../Hero/hero.module.css";
//reactIcons
import { CgDetailsMore } from "react-icons/cg";
import { BsFillBasket2Fill } from "react-icons/bs";
//context
import { ProductContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
const ProductCards = ({ item }) => {
   const getProduct = useContext(ProductContext)
  
  return (
    <>
    <div className={styles.cardHolder}>
      <p className={styles.kindofcar}>{item.cars.join(" | ")}</p>
      <img src={item.img} alt="" />
      <p>{item.name}</p>
      <p>{item.brand}</p>
      <Link className={styles.detailsLinks} to={`/productDetails/${item.id}`}>
        <CgDetailsMore className={styles.detailsIcon} />
        برای مطالعه جزئیات کلیک کنید
      </Link>
      <button className={styles.basketButton}>
        <BsFillBasket2Fill />
        خرید کالا
      </button>
    </div>
   
    </>
  );
};

export default ProductCards;
