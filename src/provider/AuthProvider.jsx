import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../public/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // 3.0 but there is a problem in after login with 2.0 method, user can access the news details but if in news detail page reload it will go to the login page. thats why apply a loading state to solve this after loading problem. and set the initial loading value is true. Because when user is not found it will show loading after found the user loading will be stopped.

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    // 3.6 also show this loading during createUser
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    // 3.7 also show this loading during logout
    setLoading(true);
    return signOut(auth);
  };

  const logIn = (email, password) => {
    // 3.8 also show this loading during login
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // 3.1 after get the user value loading will be off
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const obj = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    // 3.2 pass the loading and setLoading
    loading,
    setLoading,
  };
  return <AuthContext value={obj}>{children}</AuthContext>;
};

export default AuthProvider;
