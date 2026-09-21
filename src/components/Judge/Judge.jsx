import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../store/features/users/getAllUsersSlice";
import { useTranslation } from "react-i18next";
import styles from "./Judge.module.css";
import CardUser from "../CardUser/CardUser";

const Judge = () => {
  const { t } = useTranslation();
  const { users } = useSelector((state) => state.getAllUsers);
  const dispatch = useDispatch();

  const fetchAllUsers = async () => {
    await dispatch(getAllUsers());
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log(users);

  return (
    <div className={styles.container}>
      <h2>{t("fishermen")}</h2>
      <div className={styles.contentList}>
        <div className={styles.contentItem}>
          <h3>{t("photo")}</h3>
        </div>
        <div className={styles.contentItem}>
          <h3>{t("name")}</h3>
        </div>
        <div className={styles.contentItem}>
          <h3>{t("catches")}</h3>
        </div>
      </div>
      <div className={styles.content}>
        {users &&
          users
            .filter((user) => user.role === "fisherman")
            .map((user) => (
              <CardUser
                key={user._id}
                name={user.name}
                lastname={user.lastname}
                catches={user.catches.length}
                id={user._id}
              />
            ))}
      </div>
    </div>
  );
};

export default Judge;
