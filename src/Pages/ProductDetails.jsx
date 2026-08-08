import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ContextProvider";
import styles from "../Pages/productDetails.module.css";
import { FaBox } from "react-icons/fa6";
import { BsClockHistory, BsFillBasket2Fill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { AiTwotoneMail } from "react-icons/ai";
import ProductCards from "../components/cards/ProductCards";
const ProductDetails = () => {
  const params = useParams();

  const [filteredByCars, setFilteredByCars] = useState([]);

  const { products, filterInfo } = useContext(ProductContext);

  const productsId = products.find((item) => item.id === Number(params.id));

  const sameProd = products.filter(
    (item) =>
      item.id != productsId.id &&
      item.cars.some((car) => productsId.cars.includes(car)),
  );

  console.log(sameProd);

  if (!productsId) {
    return <h2>Loading...</h2>;
  }

  const { name, img, brand, category, description, cars, price, stock } =
    productsId;

  return (
    <>
      <section className={styles.topLayoutHolder}>
        <div className={`${styles.sameStyleLayout} ${styles.rightSide}`}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.leftHolder}>
          <h1>{name}</h1>

          <div className={`${styles.sameStyleLayout} ${styles.leftSide}`}>
            <p>
              <span>نام برند :</span>
              {brand}
            </p>
            <p>
              <span>دسته بندی :</span> {category}
            </p>
            <p>
              <span>توضیحات : </span> {description}
            </p>
            <p>
              <span>مورد استفاده : </span> {cars.join(" ")}
            </p>
            <p className={stock ? `${styles.true} ` : `${styles.false}`}>
              <span>وضعیت : </span>
              {stock ? "موجود در انبار" : "موجود نیست"}
            </p>
            <p>
              <span>قیمت : </span>
              {price.toLocaleString("fa-IR")}
            </p>
            <button className={styles.buyNow}> افزودن به سبد خرید</button>
          </div>
        </div>
      </section>
      <hr className={styles.middleBorder} />
      <section className={styles.middleLayoutHolder}>
        <div className={styles.iconHolder}>
          <FaBox className={styles.Icons} />
          <p className={styles.deliveryparagraph}>امکان تحویل فوری</p>
        </div>
        <div className={styles.iconHolder}>
          <BsClockHistory className={styles.Icons} />
          <p className={styles.deliveryparagraph}>24 ساعته هفت روز هفته </p>
        </div>
        <div className={styles.iconHolder}>
          <MdVerified className={styles.Icons} />
          <p className={styles.deliveryparagraph}>کیفیت مناسب</p>
        </div>
      </section>
      <hr className={styles.middleBorder} />
      <section className={styles.sameProduct}>
        <h3>موارد مشابه</h3>
        <div className={styles.detailsHolder}>
          {sameProd.length > 0 &&
            sameProd.map((item) => <ProductCards key={item.id} item={item} />)}
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
