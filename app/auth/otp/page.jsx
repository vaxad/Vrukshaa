"use client"
import { UserAuth } from '@/lib/authContext'
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {auth} from '../../firebase'
import { useRouter } from 'next/navigation'

export const metadata = {
    title: 'Authentication',
    description: 'image analysis',
  }
export default function page() {

    const {googleSignIn,user,setUser,logOut} = UserAuth()
    const router = useRouter()
    const [data, setdata] = useState({phone:'', otp:''})
    const [otpSent, setotpSent] = useState(false)
    useEffect(() => {
      if(user){
        router.replace('/home')
      }
    }, [user])
    
    const handleGoogle = async () =>{
        try {
        const result = await googleSignIn()
        const userData = await result.json()
        console.log(userData)
        } catch (error) {
            console.log(error)
        }
    }
    const handleOtp = async()=>{
      try {
          window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
              'size': 'normal',
              'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
                setCaptcha(true)
              },
              'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
                alert('captcha failed')
              }
            });
            const recaptchaVerifier = window.recaptchaVerifier
            console.log(data.phone)
            signInWithPhoneNumber(auth,("+91"+data.phone), recaptchaVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              // ...
            });
      } catch (error) {
          
      }
    }

    const handleVerifyCode = () => {
      confirmationResult.confirm(data.otp).then((result) => {
          // User signed in successfully.
          console.log(result.user)
          setUser(result.user)
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    };
    useEffect(() => {
        const checkAuthentication = async () => {
          await new Promise((resolve) => setTimeout(resolve, 50));
        };
        checkAuthentication();
      }, [user]);

    const handleClick = async() => {
      if(otpSent){
        
        handleVerifyCode()  
      }else{
        setotpSent(true)
        await handleOtp()
      }
    }
  return (
    <main className=' flex flex-col justify-center items-center p-24'>
      <h1 className=" text-5xl text-center font-bold pt-24 pb-10">Sign in with otp</h1>
      <div className=' flex flex-col gap-12 pb-10'>
        <div className=' py-3 text-black'>
        <label>{otpSent?'OTP':'Phone'}</label>
        <input type='Number' onChange={(e)=>{setdata({...data,[otpSent?"otp":"phone"]:e.target.value})}} value={otpSent?data.otp:data.phone} className=' p-3 w-full rounded-xl' placeholder={otpSent?'enter otp':'enter phomr number'}></input>
        </div>
        <button onClick={()=>{handleClick()}} className=" bg-green-500 rounded-lg p-5 text-3xl font-bold">{otpSent?'Vrify otp':'submit phone'}</button>
        </div>
        <div id='recaptcha-container'></div>
        {user&&<button onClick={()=>{logOut()}} className=" bg-green-500 rounded-lg p-5 text-3xl font-bold">Logout {user.displayName}</button>}
    </main>
  )
}
