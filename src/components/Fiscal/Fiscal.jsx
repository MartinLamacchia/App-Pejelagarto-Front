import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../store/features/users/getAllUsersSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Fiscal.module.css";
import { validateCatch } from "./validateCatch";
import { registerCatch } from "../../store/features/catchFish/registerCatchSlice";
import ModalSuccess from "../ModalSuccess/ModalSuccess";

const Fiscal = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.login);
  const { users } = useSelector((state) => state.getAllUsers);
  const { loading, error, success, successCode  } = useSelector((state) => state.registerCatch);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fisherman: "",
    fiscal: user._id,
    species: "",
    length: null,
    weight: null,
  });
  const [fieldErrors, setFieldErrors] = useState({})
  const [showModalSuccess, setShowModalSuccess] = useState(false)

  const fetchAllUsers = async () => {
    await dispatch(getAllUsers());
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]:
      name === "length" || name === "weight"
        ? value === ""
          ? null
          : Number(value)
        : value,
    });
  };

  const handleBlur = (e) => {
    const {name} = e.target
    const validationErrors = validateCatch(formData, t)

    setFieldErrors((prevError) => ({
      ...prevError,
      [name]: validationErrors[name]
    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateCatch(formData, t);
    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    dispatch(registerCatch(formData))
    
  };
  

  return (
    <div className={styles.container}>
      <h2>{t("loadCatch")}</h2>
      <form action="" className={styles.contentForm} onSubmit={handleSubmit}>
        <select
          name="fisherman"
          value={formData.fisherman}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">{t("fisherman")}</option>
          {users &&
            users
              .filter((user) => user.role === "fisherman")
              .map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name} {user.lastname}
                </option>
              ))}
        </select>
        <input
          type="text"
          placeholder={`${user.name} ${user.lastname}`}
          name="fiscal"
          disabled
          className={styles.inputFiscal}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          type="text"
          placeholder={t("species")}
          onChange={handleChange}
          onBlur={handleBlur}
          name="species"
          value={formData.species}
        />
        <input
          type="number"
          placeholder={t("length")}
          onChange={handleChange}
          onBlur={handleBlur}
          name="length"
          value={formData.length ?? ""}
        />
        <input
          type="number"
          placeholder={t("weight")}
          onChange={handleChange}
          onBlur={handleBlur}
          name="weight"
          value={formData.weight ?? ""}
        />
        <button type="submit">{t("send")}</button>
      </form>
      {
        success && (
          <ModalSuccess success={successCode} successShow={success} setFormData={setFormData}/>
        )
      }
    </div>
  );
};

export default Fiscal;
