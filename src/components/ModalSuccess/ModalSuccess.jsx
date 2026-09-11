import React from "react";
import styles from "./ModalSuccess.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { resetRegisterState } from "../../store/features/users/registerSlice";

const ModalSuccess = ({ setShowRegister, success }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const successMessage = t(`success_${success}`, {
    defaultValue: t("error_unknown"),
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
        <h4>{successMessage}</h4>
      </div>
    </div>
  );
};

export default ModalSuccess;
