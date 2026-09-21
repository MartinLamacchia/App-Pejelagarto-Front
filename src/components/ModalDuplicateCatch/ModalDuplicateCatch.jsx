import React from "react";
import styles from "./ModalDuplicateCatch.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { registerCatch } from "../../store/features/catchFish/registerCatchSlice";

const ModalDuplicateCatch = ({ error, setShowModalDuplicate, setFormData, formData }) => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.login);
  const handleCloseRegister = () => {
    setFormData({
      fisherman: "",
      fiscal: user._id,
      species: "",
      length: null,
      weight: null,
    });
    setShowModalDuplicate(false);
  };
  const dispatch = useDispatch()

  const errorMessage = t(`error_${error}`, {
    defaultValue: t("error_unknown"),
  });

  const handleConfirmDuplicate = async () =>{
    const newFormData = {
      ...formData,
      confirmDuplicate: true
    }

    await dispatch(registerCatch(newFormData))

    
    setShowModalDuplicate(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>{errorMessage}</h4>
        <div className={styles.containerBtn}>
          <button onClick={handleConfirmDuplicate}>{t("yes")}</button>
          <button onClick={handleCloseRegister}>{t("no")}</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDuplicateCatch;
