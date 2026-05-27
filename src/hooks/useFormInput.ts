import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/Validation";

export function useFormInput(initialValue: string, required = false) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationError>({
    isError: false,
    errorMessage: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    checkIfValid(newValue);
  }

  function checkIfValid(inputValue: string): boolean {
    if (required && inputValue === "") {
      setError({
        isError: true,
        errorMessage: "Bitte geben Sie einen Wert ein",
      });
      return false;
    }
    setError({ isError: false, errorMessage: "" });
    return true;
  }

  return { value, handleChange, error, checkIfValid };
}
