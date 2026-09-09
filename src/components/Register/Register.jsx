import React, { useState } from "react";
import styles from "./Register.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Register = ({ setShowRegister }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: 0,
    country: "",
    role: "fisherman",
  });

  const [error, setError] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: 0,
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
  setFormData({
    ...formData,
    phone: value || "" 
  })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("name")}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder={t("lastname")}
              value={formData.lastname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder={t("email")}
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder={t("password")}
              value={formData.password}
              onChange={handleChange}
            />
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="fisherman">{t("fisherman")}</option>
              <option value="fiscal">{t("fiscal")}</option>
              <option value="judge">{t("judge")}</option>
            </select>
            <PhoneInput
              international
              defaultCountry="BR"
              placeholder={t("phone")}
              value={formData.phone}
              onChange={handlePhoneChange}
              className={styles.phoneInput}
            />
            <input
              type="text"
              name="country"
              placeholder={t("country")}
              value={formData.country}
              onChange={handleChange}
            />
            <button>{t("send")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
