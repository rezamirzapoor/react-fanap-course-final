import { createContext, useState } from "react";
const ToastContext = createContext();
const ToastUpdaterContext = createContext();

export default function ToastProvider({ children }) {
  const [state, setState] = useState({
    isOpen: false,
    message: "",
    severity: "success",
  });
  return (
    <ToastContext.Provider value={state}>
      <ToastUpdaterContext.Provider value={setState}>
        {children}
      </ToastUpdaterContext.Provider>
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastUpdaterContext };
