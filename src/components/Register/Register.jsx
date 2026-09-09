import React, { useState } from "react";
import styles from "./Register.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {validateRegister} from './validateRegister.js'

const Register = ({ setShowRegister }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    role: "fisherman"
  })

  const [error, setError] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value || ""
    })
  }

  const handleBlur = (e) => {
    const { name } = e.target
    const validationErrors = validateRegister(formData, t)

    setError((prevError) => ({
      ...prevError,
      [name]: validationErrors[name]
    }))
  }

  const handlePhoneBlur = () => {
    const validationErrors = validateRegister(formData, t)

    setError((prevError) => ({
      ...prevError,
      phone: validationErrors.phone
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateRegister(formData, t)
    setError(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    console.log("Formulario válido:", formData)
  }

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

            <div className={styles.inputGroup}>
              <input type="text" name="name" placeholder={t("name")} value={formData.name} onChange={handleChange} onBlur={handleBlur}/>
              {error.name && <span className={styles.errorText}>{error.name}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input type="text" name="lastname" placeholder={t("lastname")} value={formData.lastname} onChange={handleChange} onBlur={handleBlur}/>
              {error.lastname && <span className={styles.errorText}>{error.lastname}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input type="text" name="email" placeholder={t("email")} value={formData.email} onChange={handleChange} onBlur={handleBlur}/>
              {error.email && <span className={styles.errorText}>{error.email}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input type="password" name="password" placeholder={t("password")} value={formData.password} onChange={handleChange} onBlur={handleBlur}/>
              {error.password && <span className={styles.errorText}>{error.password}</span>}
            </div>

            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="fisherman">{t("fisherman")}</option>
              <option value="fiscal">{t("fiscal")}</option>
              <option value="judge">{t("judge")}</option>
            </select>

            <div className={styles.inputGroup}>
              <PhoneInput
                international
                defaultCountry="AR"
                placeholder={t("phone")}
                value={formData.phone}
                onChange={handlePhoneChange}
                onBlur={handlePhoneBlur}
                className={styles.phoneInput}
              />
              {error.phone && <span className={styles.errorText}>{error.phone}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input type="text" name="country" placeholder={t("country")} value={formData.country} onChange={handleChange} onBlur={handleBlur}/>
              {error.country && <span className={styles.errorText}>{error.country}</span>}
            </div>

            <button>{t("send")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;