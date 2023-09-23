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
// const url = 'https://vruksha-server.onrender.com/'
// const url = "http://localhost:3001/"
// const url = "http://192.168.0.108:3001/"
const url = `${process.env.NEXT_PUBLIC_SERVER}`

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('')
  useEffect(() => {
    const temp = localStorage.getItem('token')
    if (temp) {
      //.log(temp)
      setToken(temp)
    }
    if (token !== '') {
      getMe()
    }
  }, [token])

  const checkServer = async () => {
    try {
      const response = await fetch(`${url}profile/check`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      })
      return response.ok
    } catch (error) {

    }

  }
  const register = async ({ uid, providerData }) => {
    try {
      const response = await fetch(`${url}auth/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          uid, providerData
        })
      })
      const resp = await response.json()
      //.log(resp)
      setUser(resp.user)
      setToken(resp.authToken)
      //.log(resp.user)
      localStorage.setItem('token', resp.authToken)
    } catch (error) {
      //.log(error)
    }
  }

  const getMe = async () => {
    const tempToken = token===''?localStorage.getItem('token'):token
    try {
      const response = await fetch(`${url}auth/`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'authToken': tempToken
        }
      })
      const resp = await response.json()
      setUser(resp)
      //.log(resp)
    } catch (error) {
      //.log(error)
    }
  }

  const makeExpert = async (data) => {
    const tempToken = localStorage.getItem('token')
    try {
      const response = await fetch(`${url}auth/verify`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'authToken': tempToken
        },
        body: JSON.stringify(data)
      })
      const resp = await response.json()
      //.log(resp)
      await getMe()
    } catch (error) {
      //.log(error)
    }
  }

  const makeNormal = async () => {
    const tempToken = localStorage.getItem('token')
    try {
      const response = await fetch(`${url}auth/verify`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'authToken': tempToken
        },
        body: JSON.stringify({ type: 'Normal' })
      })
      const resp = await response.json()
      //.log(resp)
      await getMe()
    } catch (error) {
      //.log(error)
    }
  }

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // //.log(result)
    //const data ={ uid:result.user.uid, providerData:result.user.providerData[0]} 
  };

  const logOut = () => {
    signOut(auth);
    localStorage.setItem('token', '')
    setToken('')
  };

  const sentOtp = async (phoneNumber) => {
    //.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        //.log(confirmationResult)
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        //.log(error)
        // Error; SMS not sent
        // ...
      });
  }

  const verifyOtp = async (code) => {
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
      try {
        if (!currentUser) {
          setUser(currentUser)
        }
        if (!user) {
          register({ uid: currentUser.uid, providerData: currentUser.providerData[0] })
        }
      } catch (error) {

      }
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, sentOtp, verifyOtp, token,setToken, makeExpert, getMe, makeNormal, checkServer }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
