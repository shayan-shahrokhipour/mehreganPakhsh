import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ContextProvider";
import styles from "../Pages/productDetails.module.css";
import { FaBox } from "react-icons/fa6";
import { BsClockHistory, BsFillBasket2Fill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosWarning } from "react-icons/io";
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
      <section className={styles.trust}>
        <div className={styles.trustHolder}>
          <div className={styles.backgroundParagraph}>
            <p>
              مورد <span className={styles.acceptParagraph}>تایید</span> فروشگاه
              های لوازم یدکی |{" "}
              <a className={styles.trustNumber} href="tel:+989192700682">
                برای <span className={styles.acceptParagraph}>اطمینان</span> از
                سازگاری قطعه با خودرو تماس بگیرید
              </a>
            </p>
          </div>
        </div>
      </section>
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
      {sameProd.length > 0 && (
        <section className={styles.sameStyleAbout}>
          <h3>موارد مشابه</h3>
          <div className={styles.detailsHolder}>
            {sameProd.map((item) => (
              <ProductCards key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
      <hr className={styles.middleBorder} />
      <section className={`${styles.sameStyleAbout} ${styles.aboutMehregan}`}>
        <h3>چرا محصولات هیدرولیک مهرگان پخش ؟</h3>
        <div className={styles.reasonHolder}>
          <div className={`${styles.styleForBackground} ${styles.firstReason}`}>
            <p>شلنگ های فشار قوی همراه با فشار شکن</p>
            <p>شلنگ های فشار قوی مهرگان پخش کامل هستند </p>
          </div>
          <div
            className={`${styles.styleForBackground} ${styles.secondReason}`}
          >
            <p>مرجوعی پایین</p>
            <p>معمولا خیلی کم پیش میاد خریدار جنس رو مرجوع کنه</p>
          </div>
          <div className={`${styles.styleForBackground} ${styles.thirdReason}`}>
            <p>پس گرفتن مرجوعی ها</p>
            <p>اگر جنس ما باشه و ایراد از شلنگ باشه مرجوعی جنس برای ماست !</p>
          </div>
        </div>
        <div className={styles.warningHolder}>
          <div className={styles.warningBackground}>
            <div className={styles.lightBackgrounding}>
              <p>
                <IoIosWarning className={styles.warningIcon}/>
                اشتباه در <span className={styles.warningParagraph}>بستن</span> شلنگ هیدرولیک و <span className={styles.warningParagraph}>آب بندی</span> میتواند باعث خورده شدن
                اورینگ های دو سر شلنگ , نشت روغن و آسیب به پمپ هیدرولیک شود{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
