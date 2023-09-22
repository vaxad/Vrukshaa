"use client"
import { UserAuth } from '@/lib/authContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export const metadata = {
  title: 'Authentication',
  description: 'image analysis',
}
export default function Page() {

  const { googleSignIn, user } = UserAuth()

  const handleGoogle = async () => {
    try {
      const result = await googleSignIn()
    } catch (error) {
      //.log(error)
    }
  }
  const router = useRouter()
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
    if (user?.userType === "None") {
      router.replace('/auth/expert')
    } else if (user) {
      router.replace('/home')
    }
  }, [user]);

  return (
    <main className=' flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-24'>
      <h1 className=" text-2xl md:text-5xl text-center font-bold pt-24 pb-10">Sign in</h1>
      <div className=' flex flex-col md:flex-row gap-12 pb-10'>
        <button onClick={() => { handleGoogle() }} className=" bg-green-500 text-center rounded-lg p-5 text-xl md:text-3xl font-bold">Google</button>
        <Link href={'/auth/otp'} className=" bg-green-500 text-center rounded-lg p-5 text-xl md:text-3xl font-bold">OTP</Link>
      </div>
      {/* {user&&<button onClick={()=>{logOut()}} className=" bg-green-500 rounded-lg p-5 text-3xl font-bold">Logout {user.displayName}</button>} */}
    </main>
  )
}
