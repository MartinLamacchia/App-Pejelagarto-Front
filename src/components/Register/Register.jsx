import React from "react";
import styles from "./Register.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Register = ({ setShowRegister }) => {
  const { t } = useTranslation();

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
              <option value="participante">Participante</option>
              <option value="juez">Juez</option>
              <option value="fiscal">Fiscal</option>
            </select>
            <input type="text" />
            <input type="text" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
