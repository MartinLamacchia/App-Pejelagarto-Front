import { isValidPhoneNumber } from "react-phone-number-input";

export const validateRegister = (formData, t) => {
  const errors = {};

  // Regex para nombre y apellido: solo letras (incluye acentos de es/pt) y espacios, sin números ni símbolos
  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÃÕãõÂÊÔâêôÀàÈèÙù\s]+$/;

  // Regex de email: texto@texto.dominio
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regex de contraseña: mínimo 6 caracteres, al menos una letra y un número
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  // --- Name ---
  if (!formData.name.trim()) {
    errors.name = (t("nameRequired"));
  } else if (!nameRegex.test(formData.name)) {
    errors.name = (t("nameLyricsOnly"));
  }

  // --- Last name ---
  if (!formData.lastname.trim()) {
    errors.lastname = (t("lastnameRequired"));
  } else if (!nameRegex.test(formData.lastname)) {
    errors.lastname = (t("lastnameLyricsOnly"));
  }

  // --- Email ---
  if (!formData.email.trim()) {
    errors.email = (t("emailRequired"));
  } else if (!emailRegex.test(formData.email)) {
    errors.email = (t("invalidEmailFormat"));
  }

  // --- Password ---
  if (!formData.password.trim()) {
    errors.password = (t("passwordRequired"));
  } else if (!passwordRegex.test(formData.password)) {
    errors.password =
      (t("invalidPassFormat"));
  }

  // --- Phone ---
  if (!formData.phone) {
    errors.phone = (t("phoneRequired"));
  } else if (!isValidPhoneNumber(formData.phone)) {
    errors.phone =(t("invalidPhone"));
  }

  // --- Country ---
  if (!formData.country.trim()) {
    errors.country = (t("countryRequired"));
  } else if (!nameRegex.test(formData.country)) {
    errors.country = (t("countryLyricsOnly"));
  }

  return errors;
};
