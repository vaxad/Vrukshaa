"use client"
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../app/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const sentOtp = async (phoneNumber) => {
    console.log(phoneNumber)
      const appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log(confirmationResult)
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
        console.log(error)
      // Error; SMS not sent
      // ...
    });
  }

  const verifyOtp = async(code) => {
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  setUser(result.user)
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, sentOtp, verifyOtp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
