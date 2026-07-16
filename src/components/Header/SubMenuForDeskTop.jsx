import React from 'react'
import styles from "../Header/header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const SubMenuForDeskTop = ({drawerHandeler}) => {
  return (
    <section className={styles.subMenuforDesktop}>
        <ul>
          <li onClick={drawerHandeler}  className={`${styles.hoverAnimation} ${styles.hamburgerIconforDesktop}`}>
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
      
  )
}

export default SubMenuForDeskTop