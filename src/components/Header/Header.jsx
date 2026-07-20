import React, { useEffect, useState } from "react";
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


const Header = ({drawerHandeler,state,modalHandeler,onmouseEnter,onmouseOver}) => {
 
  const {drawer,modal,onmouse}=state
  return (
    <>
      <DrawerMenu   drawerHandeler={drawerHandeler}
        state={state.drawer} />

      <header className={onmouse ? styles.headerActive : null}>
        {/*===============================================*/}
        <DesktopHeader  drawerHandeler={drawerHandeler} modalHandeler={modalHandeler} onmouseEnter={onmouseEnter} onmouseOver={onmouseOver}/>
        {/*===============================================*/}

        <MobileHeader />
       {/*===============================================*/}

        <SubMenuForMobile />
      </header>
                   

              
        {/*===============================================*/}
      <SubMenuForDeskTop drawerHandeler={drawerHandeler}/>

        {/*==========================================*/}

       <SelectCarModal state={state.modal} modalHandeler={modalHandeler}/>

       {/*==========================================*/}

        <SignInModal state={state.onmouse}/>
      <div
        className={`${styles.overlay} ${
          state.drawer || state.modal || state.onmouse ? styles.overlayActive : null
        }`}
      ></div>
      
    </>
  );
};

export default Header;
