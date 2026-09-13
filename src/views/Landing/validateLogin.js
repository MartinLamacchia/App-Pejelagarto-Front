
export const validateLogin = (formData, t) => {
  const errors = {};

  // Regex de email: texto@texto.dominio
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regex de contraseña: mínimo 6 caracteres, al menos una letra y un número
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  // --- Email ---
  if (!formData.email.trim()) {
    errors.email = t("emailRequired");
  } else if (!emailRegex.test(formData.email)) {
    errors.email = t("invalidEmailFormat");
  }

  // --- Password ---
  if (!formData.password.trim()) {
    errors.password = t("passwordRequired");
  } else if (!passwordRegex.test(formData.password)) {
    errors.password = t("invalidPassFormat");
  }

  return errors;
};
