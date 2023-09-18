import React from 'react'
import AuthChecker from '../components/AuthChecker'

export const metadata = {
    title: 'Articles - Vrukshaa',
    description: 'image analysis',
  }
export default function page() {
    
  return (
    <div className=' flex flex-col justify-center items-center p-24 '>
      <AuthChecker/>
        <h1 className=' text-5xl font-bold mb-5'>Articles page</h1>
    </div> 
  )
}
