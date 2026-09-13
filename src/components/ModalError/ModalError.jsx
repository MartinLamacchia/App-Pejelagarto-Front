import React from "react";
import styles from "./ModalError.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const ModalError = ({ error, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const errorMessage = t(`error_${error}`, {
    defaultValue: t("error_unknown"),
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <IoIosCloseCircle
          className={styles.btnClose}
          onClick={onClose}
        />
        <h4>{errorMessage}</h4>
      </div>
    </div>
  );
};

export default ModalError;
