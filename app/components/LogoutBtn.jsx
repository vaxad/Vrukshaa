"use client"
import { UserAuth } from '@/lib/authContext'
import React from 'react'

export default function LogoutBtn() {
    const {user, logOut} = UserAuth()
    
  return user&&(
  <button onClick={()=>{logOut()}} className=" bg-green-500 rounded-lg px-5 py-3 text-xl font-bold">Logout</button>
  )
}
