import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item === null ? initialValue : JSON.parse(item);
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
};

export { useLocalStorage };
