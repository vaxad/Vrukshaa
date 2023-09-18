"use client"
import React from 'react'
import AuthChecker from '../components/AuthChecker'

export const metadata = {
    title: 'Home - Vrukshaa',
    description: 'image analysis',
  }
export default function page() {
  return (
    <div className=' flex flex-col justify-center items-center p-24 '>
        <h1 className=' text-5xl font-bold mb-5'>Home page</h1>
        <AuthChecker/>
    </div> 
  )
}
