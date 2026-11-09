import React, { useContext, useEffect } from "react";
import styles from "../Hero/hero.module.css";
//reactIcons
import { CgDetailsMore } from "react-icons/cg";
import { BsFillBasket2Fill } from "react-icons/bs";
//context
import { Link } from "react-router-dom";
import { BuyContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ContextProvider";
const ProductCards = ({ item }) => {
  const Info = item.id;
  const productSlug =item.slug
    
  const { showInfo } = useContext(BuyContext);
 


  return (
    <>
    
       <div className={styles.cardHolder}>
        <p className={styles.kindofcar}>{item.cars.join(" | ")}</p>
        <img loading="lazy" src={item.img} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.brand}</p>
        <Link className={styles.detailsLinks} to={`/productDetails/${productSlug}`}>
          <CgDetailsMore className={styles.detailsIcon} />
          برای مطالعه جزئیات کلیک کنید
        </Link>
        <p>
          <span>قیمت : </span>
          {item.price.toLocaleString("fa-IR")}
        </p>
        <button onClick={() => showInfo(Info)}  className={styles.basketButton}>
          <BsFillBasket2Fill />
          خرید کالا
        </button>
      </div>
    </>
  );
};

export default ProductCards;
