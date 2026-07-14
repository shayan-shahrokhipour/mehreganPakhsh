import React from "react";
import { IoIosSearch } from "react-icons/io";
import styles from "../Header/header.module.css";

const Header = () => {
  return (
    <header>
      <a href="" className={styles.logo}>
        <img src="/mehreganPakhsh.png" alt="" />
      </a>
      <button className={styles.selectCar}>
        <span className={styles.yourcar}>خودروی شما </span>
        <span className={styles.car}>پژو206</span>
      </button>
       <div className={styles.searchBox}>
        <input type="text" className={styles.searchInput} />
      <button className={styles.searchButton}><IoIosSearch className={styles.searchIcon} /></button>
       </div>
    </header>
  );
};

export default Header;
