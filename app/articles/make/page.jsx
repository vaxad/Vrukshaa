import React from 'react'
import AuthChecker from '../../components/AuthChecker'
import ArticleForm from './components/ArticleForm'

export const metadata = {
  title: 'Post - Vrukshaa',
  description: 'image analysis',
}
export default function page() {

  return (
    <div className=' px-6 md:px-12 lg:px-24 py-12 '>
      <AuthChecker />
      <div className=' flex flex-col justify-center items-center min-w-full'>
        <h1 className=' text-5xl font-bold'></h1>
        <div className=' py-5 w-full'>
          <ArticleForm />
        </div>
      </div>
    </div>
  )
}
