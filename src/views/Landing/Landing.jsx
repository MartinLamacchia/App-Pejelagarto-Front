import { useTranslation } from "react-i18next";
import RandallImg from "../../assets/Randall.webp";
import SelectorLanguage from "../../components/SelectorLenguage/SelectorLenguage";
import styles from "./Landing.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Register from "../../components/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { validateLogin } from "./validateLogin";
import {
  loginUser,
  resetLoginState,
} from "../../store/features/users/loginSlice";
import ModalError from "../../components/ModalError/ModalError";
import {useNavigate} from 'react-router-dom'

function Landing() {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, success, successCode } = useSelector(
    (state) => state.login
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const validationErrors = validateLogin(formData, t);

    setFieldErrors((prevError) => ({
      ...prevError,
      [name]: validationErrors[name],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(formData, t);
    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const response = await dispatch(loginUser(formData));

    if (response.payload.access) {
      navigate("/home");
      return;
    }
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleCloseError = () => {
    dispatch(resetLoginState());
  };

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
        <form action="" onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="email"
              placeholder={t("email")}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {fieldErrors.email && (
              <span className={styles.errorText}>{fieldErrors.email}</span>
            )}
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
            {fieldErrors.password && (
              <span className={styles.errorText}>{fieldErrors.password}</span>
            )}
          </div>

          {error && <ModalError error={error} onClose={handleCloseError} />}

          <button type="submit" disabled={loading}>
            {loading ? t("loading") : t("send")}
          </button>
        </form>
        <h3 onClick={handleShowRegister}>{t("register")}</h3>
      </div>
      <div className={styles.containerSocial}>
        <FaInstagramSquare className={styles.iconSocial} />
        <FaFacebookSquare className={styles.iconSocial} />
        <FaLinkedin className={styles.iconSocial} />
      </div>
      {showRegister && <Register setShowRegister={setShowRegister} />}
    </div>
  );
}

export default Landing;
