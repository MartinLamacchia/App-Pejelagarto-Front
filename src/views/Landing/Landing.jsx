import { useTranslation } from "react-i18next";
import RandallImg from "../../assets/Randall.webp";
import SelectorLanguage from "../../components/SelectorLenguage/SelectorLenguage";
import styles from "./Landing.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Register from "../../components/Register/Register";

function Landing() {
  const { t } = useTranslation();
  const [showRegister, setShowRegister] = useState(false)

  const handleShowRegister = () => {
    setShowRegister(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerBar}>
        <img className={styles.logo} src={RandallImg} alt="" />
        <SelectorLanguage />
      </div>
      <div className={styles.containerTitle}>
        <h1>Pejelagarto</h1>
        <h2>{t("slogan")}</h2>
      </div>
      <div className={styles.containerForm}>
        <form action="">
          <input type="text" placeholder={(t("email"))} />
          <input type="Password" placeholder={(t("password"))} />
          <button>{t("login")}</button>
        </form>
        <h3 onClick={handleShowRegister}>{t("register")}</h3>
      </div>
      <div className={styles.containerSocial}>
        <FaInstagramSquare className={styles.iconSocial} />
        <FaFacebookSquare className={styles.iconSocial} />
        <FaLinkedin className={styles.iconSocial} />
      </div>
      {
        showRegister && (
          <Register setShowRegister={setShowRegister}/>
        )
      }
    </div>
  );
}

export default Landing;
