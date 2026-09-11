import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Register.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { validateRegister } from "./validateRegister";
import { registerUser, resetRegisterState } from "../../store/features/users/registerSlice";
import ModalError from "../ModalError/ModalError";
import ModalSuccess from "../ModalSuccess/ModalSuccess";

const Register = ({ setShowRegister }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, success, successCode  } = useSelector((state) => state.register);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    role: "fisherman",
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value || "",
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const validationErrors = validateRegister(formData, t);

    setFieldErrors((prevError) => ({
      ...prevError,
      [name]: validationErrors[name],
    }));
  };

  const handlePhoneBlur = () => {
    const validationErrors = validateRegister(formData, t);

    setFieldErrors((prevError) => ({
      ...prevError,
      phone: validationErrors.phone,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateRegister(formData, t);
    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    dispatch(registerUser(formData));
  };

  const handleCloseRegister = () => {
    dispatch(resetRegisterState());
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
              <input
                type="text"
                name="name"
                placeholder={t("name")}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldErrors.name && <span className={styles.errorText}>{fieldErrors.name}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="lastname"
                placeholder={t("lastname")}
                value={formData.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldErrors.lastname && <span className={styles.errorText}>{fieldErrors.lastname}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="email"
                placeholder={t("email")}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldErrors.email && <span className={styles.errorText}>{fieldErrors.email}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                placeholder={t("password")}
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldErrors.password && <span className={styles.errorText}>{fieldErrors.password}</span>}
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
              {fieldErrors.phone && <span className={styles.errorText}>{fieldErrors.phone}</span>}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="country"
                placeholder={t("country")}
                value={formData.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {fieldErrors.country && <span className={styles.errorText}>{fieldErrors.country}</span>}
            </div>

            {error && <ModalError setShowRegister={setShowRegister} error={error}/>}
            {success && <ModalSuccess setShowRegister={setShowRegister} success={successCode}/>}

            <button type="submit" disabled={loading}>
              {loading ? t("loading") : t("send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;