import { useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.AuthContextProvider
      value={{}}
    >
        {children}
    </AuthContext.AuthContextProvider>
  );
};

export const UserAuth =()=>{
    return useContext(AuthContext)
}