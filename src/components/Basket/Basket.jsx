import React, { useContext } from "react";
import { BuyContext } from "../../context/CartContext";
import styles from "../../components/Basket/basket.module.css";
const Basket = () => {
  const { totalPrice, selectedItems } = useContext(BuyContext);

  return (
    <section className={styles.BasketHolder}>
      <div className={styles.factorOfbuying}>
       <div className={styles.borderHolder}>
         <div className={styles.sumBorder}></div>
         <p>صورت حساب</p>
        <div className={styles.sumBorder}></div>
       </div>
        {selectedItems.map((item) => (
          <div key={item.id}>
            <div className={styles.countAndname}>
               <p>{item.name}</p>
            <p>تعداد : {item.quantity.toLocaleString("fa-IR") } عدد</p>
            <p>قیمت :{item.price.toLocaleString("fa-IR") } تومان</p>
            </div>
          </div>
        ))}
        <p>{totalPrice.toLocaleString("fa-IR")} تومان</p>
      </div>
    </section>
  );
};

export default Basket;
