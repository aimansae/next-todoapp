"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() =>initialValue)
  
  const setValue :Dispatch<SetStateAction<T>> = (value) => {
  const valueToStore = value instanceof Function? value(storedValue): value
    try {
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
        console.log(item,'value stred')
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);
  return [storedValue, setValue];
}
