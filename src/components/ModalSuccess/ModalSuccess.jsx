import React from "react";
import styles from "./ModalSuccess.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { resetRegisterState } from "../../store/features/users/registerSlice";
import { useLocation } from "react-router-dom";
import { resetRegisterCatchState } from "../../store/features/catchFish/registerCatchSlice";

const ModalSuccess = ({
  setShowRegister,
  success,
  successShow,
  setFormData,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const {user} = useSelector(state => state.login)

  const successMessage = t(`success_${success}`, {
    defaultValue: t("error_unknown"),
  });

  const handleCloseRegister = () => {
    if (location.pathname === "/landing") {
      dispatch(resetRegisterState());
      setShowRegister(false);
    }

    if (location.pathname === "/home") {
      dispatch(resetRegisterCatchState());
      setFormData({
        fisherman: "",
        fiscal: user._id,
        species: "",
        length: null,
        weight: null,
      });
      successShow = false;
    }

    console.log(location.pathname);
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
