import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../store/features/users/getAllUsersSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Fiscal.module.css";

const Fiscal = () => {
  const { t } = useTranslation();
  const {user} = useSelector((state) => state.login)
  const { users } = useSelector((state) => state.getAllUsers);
  const dispatch = useDispatch();

  const fetchAllUsers = async () => {
    await dispatch(getAllUsers());
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <h2>{t("loadCatch")}</h2>
      <form action="" className={styles.contentForm} onSubmit={handleSubmit}>
        <select name="fisherman">
          <option value="">{(t("fisherman"))}</option>
          {users &&
            users.filter(user => user.role === "fisherman")
            .map(user => (
              <option value="" key={user._id}>{user.name} {user.lastname}</option>
            ))
          }
        </select>
        <input type="text" placeholder={`${user.name} ${user.lastname}`} value={""} disabled className={styles.inputFiscal}/>
        <input type="text" placeholder={t("species")} />
        <input type="text" placeholder={t("length")} />
        <input type="text" placeholder={t("weight")} />
        <button type="submit">{t("send")}</button>
      </form>
    </div>
  );
};

export default Fiscal;
