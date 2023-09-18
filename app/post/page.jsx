import React from 'react'
import AuthChecker from '../components/AuthChecker'
import PostForm from './components/PostForm'

export const metadata = {
    title: 'Post - Vrukshaa',
    description: 'image analysis',
  }
export default function page() {
    
  return (
    <div className=' px-24 py-12 '>
      <AuthChecker/>
      <div className=' flex flex-col justify-center items-center min-w-full'>
        <h1 className=' text-5xl font-bold'></h1>
        <div className=' py-5 w-full'>
          <PostForm/>
        </div>
        </div>
    </div> 
  )
}
