import React, { useState } from "react";
import RandallImg from "../../assets/Randall.webp";
import styles from "./Nav.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import SelectorLanguage from "../SelectorLenguage/SelectorLenguage";

const Nav = () => {
  const { t } = useTranslation()
  const [menuProfile, setMenuProfile] = useState(false)

  const handleMenuProfile = () => {
    setMenuProfile(!menuProfile)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentLogo}>
        <img className={styles.logo} src={RandallImg} alt="" />
        <h2>Pejelagarto</h2>
      </div>
      <div className={styles.contentuserProfile}>
        <BiSolidUserCircle className={styles.userProfile} onClick={handleMenuProfile}/>

        {
          menuProfile && (
            <div className={styles.contentMenuProfile}>
              <h4>{t("profile")}</h4>
              <h4>{t("language")}</h4>
              <SelectorLanguage/>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Nav;
