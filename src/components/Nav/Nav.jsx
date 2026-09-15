import React, { useState } from "react";
import RandallImg from "../../assets/Randall.webp";
import styles from "./Nav.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import SelectorLanguage from "../SelectorLenguage/SelectorLenguage";
import { useDispatch } from "react-redux";
import { logout } from "../../store/features/users/loginSlice";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const { t } = useTranslation();
  const [menuProfile, setMenuProfile] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleMenuProfile = () => {
    setMenuProfile(!menuProfile);
  };

  const handleLogout = () => {
    dispatch(logout)
    navigate("/")

  }

  const handleShowProfile = () => {
    if (location.pathname === "/home") {
      navigate("/profile")
    }

    if (location.pathname === "/profile") {
      navigate("/home")
    }
  }

  console.log(location);
  

  return (
    <div className={styles.container}>
      <div className={styles.contentLogo}>
        <img className={styles.logo} src={RandallImg} alt="" />
        <h2>Pejelagarto</h2>
      </div>
      <div className={styles.contentuserProfile}>
        <BiSolidUserCircle
          className={styles.userProfile}
          onClick={handleMenuProfile}
        />

        {menuProfile && (
          <div className={styles.contentMenuProfile}>
            <h4 onClick={handleShowProfile}>{location.pathname === "/home" ? t("profile") : "Home"}</h4>
            <h4>{t("language")}</h4>
            <SelectorLanguage />
            <h4 onClick={handleLogout}>{t("Logout")}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
