import React from 'react'
import AuthChecker from '../components/AuthChecker'

export const metadata = {
    title: 'Profile - Vrukshaa',
    description: 'image analysis',
  }
export default function page() {
    
  return (
    <div className=' flex flex-col justify-center items-center p-24 '>
      <AuthChecker/>
        <h1 className=' text-5xl font-bold mb-5'>Profile page</h1>
    </div> 
  )
}
