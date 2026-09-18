const objectIdRegex = /^[0-9a-fA-F]{24}$/;
const speciesRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;

export const validateCatch = (formData) => {
  const errors = {};

  // fisherman
  if (!formData.fisherman) {
    errors.fisherman = "Debe seleccionar un pescador";
  } else if (!objectIdRegex.test(formData.fisherman)) {
    errors.fisherman = "El ID del pescador no es válido";
  }

  // fiscal
  if (!formData.fiscal) {
    errors.fiscal = "No se encontró el fiscal";
  } else if (!objectIdRegex.test(formData.fiscal)) {
    errors.fiscal = "El ID del fiscal no es válido";
  }

  // species
  if (!formData.species.trim()) {
    errors.species = "Debe ingresar una especie";
  } else if (!speciesRegex.test(formData.species.trim())) {
    errors.species = "La especie solo puede contener letras y espacios";
  }

  // length
  if (formData.length === null || formData.length === "") {
    errors.length = "Debe ingresar el largo";
  } else if (
    typeof formData.length !== "number" ||
    !Number.isFinite(formData.length) ||
    formData.length <= 0
  ) {
    errors.length = "El largo debe ser un número mayor a 0";
  }

  // weight
  if (formData.weight === null || formData.weight === "") {
    errors.weight = "Debe ingresar el peso";
  } else if (
    typeof formData.weight !== "number" ||
    !Number.isFinite(formData.weight) ||
    formData.weight <= 0
  ) {
    errors.weight = "El peso debe ser un número mayor a 0";
  }

  return errors;
};