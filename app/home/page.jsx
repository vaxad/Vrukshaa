"use client"
import { UserAuth } from '@/lib/authContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export const metadata = {
    title: 'Home - Vrukshaa',
    description: 'image analysis',
  }
export default function page() {
    const {user, logOut} = UserAuth()
    const router = useRouter()
    useEffect(() => {
      if(!user){
        router.push('/auth')
      }
    }, [user])
    
  return (
    <div className=' flex flex-col justify-center items-center p-24 '>
        <h1 className=' text-5xl font-bold mb-5'>Home page</h1>
    {user&&<button onClick={()=>{logOut()}} className=" bg-green-500 rounded-lg p-5 text-3xl font-bold">Logout {user.displayName}</button>}
    </div> 
  )
}
