import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ routes }) => {
  // console.log(routes)
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null)

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const manageProfile = (name, image)=> {
    updateProfile(auth.currentUser,  {
      displayName:name, photoURL: image
    })
  }

  const handleLogout = () => {
    return signOut(auth);
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    manageProfile,
    handleLogout,
    user,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('amr sonar bangla',currentUser);
      setUser(currentUser)
    });
    return () => unSubscribe();
  }, []);
  return <authContext.Provider value={authInfo}>{routes}</authContext.Provider>;
};

export default AuthProvider;
