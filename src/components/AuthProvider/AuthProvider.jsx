import { createContext, useEffect } from "react";

export const authContext = createContext();
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ routes }) => {
  // console.log(routes)
  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogout = () => {
    return signOut();
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
    });
    return () => unSubscribe();
  }, []);
  return <authContext.Provider value={authInfo}>{routes}</authContext.Provider>;
};

export default AuthProvider;
