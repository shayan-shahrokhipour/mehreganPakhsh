import React, { useContext, useEffect, useState } from "react";
//module css
import styles from "../Header/headerstyles/header.module.css";

//components
import DrawerMenu from "./DrawerMenu";
import SubMenuForDeskTop from "./SubMenuForDeskTop";
import SubMenuForMobile from "./SubMenuForMobile";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import SelectCarModal from "../modals/SelectCarModal";
import SignInModal from "../modals/SignInModal";
import { ProductContext } from "../../context/ContextProvider";


const Header = ({drawerHandeler,state,modalHandeler,onmouseEnter,onmouseLeave}) => {
 const overlayClose=()=>{
  drawerHandeler()
    
 }
 //destructures
  const {drawer,modal,onmouse,descriptions}=state
  return (
    <>
      <DrawerMenu   drawerHandeler={drawerHandeler}
        state={state.drawer} />

      <header className={onmouse ? styles.headerActive : ""}>
        {/*===============================================*/}
        <DesktopHeader  drawerHandeler={drawerHandeler} modalHandeler={modalHandeler} onmouseEnter={onmouseEnter} onmouseLeave={onmouseLeave}/>
        {/*===============================================*/}

        <MobileHeader />
       {/*===============================================*/}

        <SubMenuForMobile />
      </header>
                   

              
        {/*===============================================*/}
      <SubMenuForDeskTop drawerHandeler={drawerHandeler}/>

        {/*==========================================*/}

       <SelectCarModal state={state.modal} modalHandeler={modalHandeler} />

       {/*==========================================*/}

        <SignInModal state={state.onmouse}/>
      <div onClick={overlayClose}
        className={`${styles.overlay} ${
          state.drawer || state.modal || state.onmouse || descriptions ? styles.overlayActive : ""
        }`}
      ></div>
      
    </>
  );
};

export default Header;
