import React from "react";
import styles from "../modals/modals.module.css";
//icons
import { IoClose } from "react-icons/io5";

const SelectCarModal = ({ state, modalHandeler }) => {
  return (
    <>
      {state === true ? (
        <div className={styles.SelectCarModal}>
          <div className={styles.CardModalHolder}>
            <h4>ماشینت رو انتخاب کن </h4>

            <IoClose onClick={modalHandeler} className={styles.closeIcon} />
          </div>
          <p className={styles.description}>
            برای انتخاب بهتر محصولی که مد نظرتون هست میتوانید در این قسمت مدل
            ماشین خود را انتخاب کنید تا سایت برای شما شخصی سازی شود{" "}
          </p>
          <div className={styles.selectedcartInfo}>
            <div className={styles.firstLine}></div>
            <div className={styles.title}>
              <p>مدل ماشینت رو انتخاب کن </p>
            </div>
            <div className={styles.secondLine}></div>
          </div>
          <div className={styles.optionHolder}>
            <select id="cars" name="cars">
            <option value="همه">همه</option>
            <option value="206">206</option>
            <option value="405">405</option>
            <option value="سمند">سمند</option>
            <option value="پژو پارس">پژو پارس</option>
            <option value="پراید">پراید</option>
              <option value="تیبا">تیبا</option>
          </select>
          </div>
          <button className={styles.signIn}>کلیک کنید !</button>
        </div>
      ) : null}
    </>
  );
};

export default SelectCarModal;
