import React from "react";
import styles from "./ModalError.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { resetRegisterState } from "../../store/features/users/registerSlice";

const ModalError = ({ setShowRegister, error }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const errorMessage = t(`error_${error}`, {
    defaultValue: t("error_unknown"), // por si llega un código que no mapeaste
  });

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
        <h4>{errorMessage}</h4>
      </div>
    </div>
  );
};

export default ModalError;
