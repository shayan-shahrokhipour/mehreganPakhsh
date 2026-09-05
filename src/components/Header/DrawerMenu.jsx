import React, { useContext, useState } from "react";
import styles from "../Header/headerstyles/header.module.css";
//Context
import { BuyContext } from "../../context/CartContext";
//react Icon
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
const DrawerMenu = ({ state, drawerHandeler, modalHandeler }) => {
  const ord =useLocation().state
  
  const {
    selectedItems,
    increaseThequantity,
    decreaseThequantity,
    deleteFromBasket,
    totalPrice,
    
  } = useContext(BuyContext);
   
     
  return (
    <section className={`${styles.menuWraper} ${state === true ? styles.drawerMenuActive : ""}
    `}>
                  <IoClose onClick={drawerHandeler} className={styles.closeIcon} />

       <div
      className={styles.drawerMenu}
    >  

      {selectedItems.length === 0 ? (
        <img src="/emptyBasket.webp" />
      ) : (
        selectedItems.map((item) => (
          <div className={styles.selectedProducts} key={item.id}>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
            <p>مبلغ قابل پرداخت :{item.price.toLocaleString("fa-IR")}</p>
            <div className={styles.buttonHolder}>
              {ord  ? <p className={styles.freezeTheItem}>قادر به تغییر دادن نیستید</p> 
              : 
              <>
              <FaPlus
                onClick={() => increaseThequantity(item.id)}
                className={styles.iconsBuy}
              />
              <p>{item.quantity}</p>
              {item.quantity === 1 ? (
                <FaTrash
                  onClick={() => deleteFromBasket(item.id)}
                  className={styles.iconsBuy}
                />
              ) : (
                <FaMinus
                  onClick={() => decreaseThequantity(item.id)}
                  className={styles.iconsBuy}
                />
              )}
              </>}
              
            </div>
          </div>
        ))
      )}
      {totalPrice !== 0 && <p>جمع مبلغ :{totalPrice.toLocaleString("fa-IR")}</p>}
    </div>
    </section>
  );
};

export default DrawerMenu;
