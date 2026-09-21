import React from "react";
import { TbUserFilled } from "react-icons/tb";
import styles from "./CardUser.module.css";
import { useNavigate } from "react-router-dom";

const CardUser = ({ name, lastname, catches }) => {
  const navigate = useNavigate()


  const handleDetailsUser = () => {
    navigate("/detailsUser")
  }


  return (
    <div className={styles.container} onClick={handleDetailsUser}>
      <div className={styles.contentItem}>
        <TbUserFilled />
      </div>
      <div className={styles.contentItem}>
        <h4>{name} {lastname}</h4>
      </div>
      <div className={styles.contentItem}>
        <h4>{catches}</h4>
      </div>
    </div>
  );
};

export default CardUser;
