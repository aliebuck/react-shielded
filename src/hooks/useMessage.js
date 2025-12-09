import { useEffect, useRef } from "react";

export const useMessage = (handler) => {
  const handlerRef = useRef();
  useEffect(() => {
    handlerRef.current = handler;
  });
  useEffect(() => {
    const listener = (event) => handlerRef.current?.(event);
    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, []);
};
