import { useContext, createContext } from "react";

import { auth } from "./../firebase";
import {
  GoogleAuthProvider,
  signInWithpopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithpopup(auth, provider);
  };
  return (
    <AuthContext.AuthContextProvider value={{googleSignIn}}>
      {children}
    </AuthContext.AuthContextProvider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
