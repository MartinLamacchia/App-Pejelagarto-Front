import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Fisherman.module.css";
import Fish from "../Fish/Fish";
import { getAllFishForUser } from "../../store/features/catchFish/getAllFishForUser";
import { useTranslation } from "react-i18next";

const Fisherman = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.login);
  const { allFish } = useSelector((state) => state.getAllFishForUser);
  const dispatch = useDispatch();

  const fetchAllFish = async () => {
    await dispatch(getAllFishForUser(user._id));
  };

  useEffect(() => {
    fetchAllFish();
  }, [dispatch, user._id]);

  return (
    <div className={styles.container}>
      <h2>
        {user?.name} {user?.lastname}
      </h2>
      <div className={styles.contentList}>
        <div className={styles.contentItem}>
          <h3>{t("image")}</h3>
        </div>
        <div className={styles.contentItem}>
          <h3>{t("species")}</h3>
        </div>
        <div className={styles.contentItem}>
          <h3>{t("length")}</h3>
        </div>
        <div className={styles.contentItem}>
          <h3>{t("weight")}</h3>
        </div>
        <div className={styles.contentItem}>
          <h3>{t("fiscal")}</h3>
        </div>
      </div>
      <div className={styles.containerFish}>
        {allFish?.length !== 0 ? (
          allFish?.map((fish, index) => (
            <Fish
              species={fish.species}
              weight={fish.weight}
              length={fish.length}
              nameFiscal={fish.fiscal.name}
              lastnameFiscal={fish.fiscal.lastname}
              key={index}
            />
          ))
        ) : (
          <h3 className={styles.message}>No ha atrapado ningun pez</h3>
        )}
      </div>
    </div>
  );
};

export default Fisherman;
