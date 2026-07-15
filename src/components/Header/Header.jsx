import React, { useEffect, useState } from "react";
//module css
import styles from "../Header/header.module.css";
//reaact Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.logo}>
          <span className={styles.hamburgerIcon}>
            <GiHamburgerMenu />
          </span>
          <img src="/mehreganPakhsh.png" alt="" />
        </div>
        <div className={`${styles.hoverAnimation} ${styles.selectCar}`}>
          <a href="" className={styles.selectedLinks}>
            <span className={styles.topText}>انتخاب خودرو:</span> <br />
            <span className={styles.car}>پژو</span>
          </a>
        </div>
        <div className={styles.inputHolder}>
          <input type="text" className={styles.searchInput} placeholder="جست و جو در مهرگان پخش ..."/>
          <button className={styles.searchButton}>
            <IoIosSearch className={styles.searchIcon}/>
          </button>
        </div>
        {/* this division belongs to mobile */}
        <div className={styles.signInboxforMobile}>
          <a href="" className={styles.signinLinks}>
            <MdAccountCircle />
            <span className={styles.signInText}> ثبت نام</span>
            <br />{" "}
          </a>
          <a href=""></a>
          <GiShoppingCart className={styles.shopIcon} />
        </div>
        {/* this division belongs to mobile */}
        <div className={`${styles.hoverAnimation} ${styles.returnBox}`}>
          <a href="" className={styles.returnsLink}>
            <span className={styles.returns}>مرجوعی ها</span>
            <br /> <span className={styles.orders}>و سفارشات</span>
          </a>
        </div>
        <div className={`${styles.hoverAnimation} ${styles.signinboxforDesktop}`}>
          <a href="" className={styles.signinLinksDesktop}>
            <span className={styles.signInTextDesktop}> سلام , ثبت نام</span>
            <br />
            <span className={styles.signinAccountsdesktop}>
              اکانت ها و لیست ها
            </span>{" "}
          </a>
          <a href=""></a>
        </div>
        <div className={`${styles.hoverAnimation} ${styles.shoppingCart}`}>
          <GiShoppingCart className={styles.shopiconDesk} />
        </div>
        <div className={styles.submenuforMobile}>
          <ul>
            <li>
              <a href="">تخفیف ها</a>
            </li>
            <li>
              <a href="">قطعات پرفروش</a>
            </li>
            <li>
              <a href="">جدیدترین قطعات</a>
            </li>
            <li>
              <a href="">راهنمای انتخاب قطعه</a>
            </li>
            <li>
              <a href="">پیگیری سفارش</a>
            </li>
            <li>
              <a href="">پشتیبانی</a>
            </li>
          </ul>
        </div>
      </header>

      {/*Desktop*/ }
      <section className={styles.subMenuforDesktop}>
        <ul>
          <li className={`${styles.hoverAnimation} ${styles.hamburgerIconforDesktop}`}>
            <GiHamburgerMenu />
            <span className={styles.all}>همه</span>
          </li>
          <li className={styles.hoverAnimation}>
            <a href="">تخفیف ها</a>
          </li>
          <li className={styles.hoverAnimation}>
            <a href="">قطعات پرفروش</a>
          </li>
          <li className={styles.hoverAnimation}>
            <a href="">جدیدترین قطعات</a>
          </li>
          <li className={styles.hoverAnimation}>
            <a href="">راهنمای انتخاب قطعه</a>
          </li>
          <li className={styles.hoverAnimation}>
            <a href="">پیگیری سفارش</a>
          </li>
          <li className={styles.hoverAnimation}>
            <a href="">پشتیبانی</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
