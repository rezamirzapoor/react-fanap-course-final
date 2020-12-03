import { useContext } from "react";
import { ToastContext, ToastUpdaterContext } from "providers/ToastProvider";

export default function useToast() {
  const { isOpen, message, severity } = useContext(ToastContext);

  const setToast = useContext(ToastUpdaterContext);

  const openToast = (message, severity = "success") => {
    setToast({ isOpen: true, message, severity });
  };
  const closeToast = () => {
    setToast({ isOpen: false, message: "" });
  };
  return { isOpen, message, severity, openToast, closeToast };
}
