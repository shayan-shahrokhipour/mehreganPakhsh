import React, { useContext } from "react";
import styles from "../Hero/hero.module.css";
//reactIcons
import { CgDetailsMore } from "react-icons/cg";
import { BsFillBasket2Fill } from "react-icons/bs";
//context
import { ProductContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import { BuyContext } from "../../context/CartContext";
const ProductCards = ({ item }) => {
  const Info = item.id;
    
  const { showInfo } = useContext(BuyContext);

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
