import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthSetContext = createContext();
export default function useAuth({ children }) {
  const [state, setState] = useState({ user: null });
  return (
    <AuthContext.Provider value={state}>
      <AuthSetContext.Provider value={setState}>
        {children}
      </AuthSetContext.Provider>
    </AuthContext.Provider>
  );
}
