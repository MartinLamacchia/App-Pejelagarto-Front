import React, { useState } from "react";
import styles from "./Register.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Register = ({ setShowRegister }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: 0,
    country: "",
    role: "fisherman"
  })

  const [error, setError] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: 0,
    country: ""
  })

  const handleCloseRegister = () => {
    setShowRegister(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <IoIosCloseCircle
          className={styles.btnClose}
          onClick={handleCloseRegister}
        />
        <h3 className={styles.title}>{t("register")}</h3>
        <div className={styles.containerForm}>
          <form className={styles.form} action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="password" />
            <select name="role">
              <option value="fisherman">{(t("fisherman"))}</option>
              <option value="fiscal">{(t("fiscal"))}</option>
              <option value="judge">{(t("judge"))}</option>
            </select>
            <input type="text" />
            <input type="text" />
            <button>{(t("send"))}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
