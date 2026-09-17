import { LuFish } from "react-icons/lu";
import styles from "./Fish.module.css";

const Fish = ({ species, weight, length, nameFiscal, lastnameFiscal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentItem}>
        <LuFish />
      </div>
      <div className={styles.contentItem}>
        <h3>{species}</h3>
      </div>
      <div className={styles.contentItem}>
        <h3>{length}</h3>
      </div>
      <div className={styles.contentItem}>
        <h3>{weight}</h3>
      </div>
      <div className={styles.contentItem}>
        <h3>
          {nameFiscal} {lastnameFiscal}
        </h3>
      </div>
    </div>
  );
};

export default Fish;
