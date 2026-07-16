import React from 'react'
import styles from "../Header/header.module.css";

const SubMenuForMobile = () => {
  return (
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
  )
}

export default SubMenuForMobile