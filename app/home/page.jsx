"use client"
import React, { useEffect, useState } from 'react'
import AuthChecker from '../components/AuthChecker'
import PostCard from './components/PostCard'
import SearchBar from './components/SearchBar'
import { UserAuth } from '@/lib/authContext'
import { getPosts } from '@/lib/post'
import Loading from '../components/Loading'

export const metadata = {
  title: 'Home - Vrukshaa',
  description: 'image analysis',
}
export default function Page() {
  const { token } = UserAuth()
  const [posts, setposts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getPosts(token)
      setposts(data)
    }
    getData()
  }, [])
  return (
    <div className=' flex flex-col justify-center items-center px-6 md:px-16 py-8 gap-8 w-full'>
      <AuthChecker />
      <SearchBar />
      <h1 className=' text-2xl md:text-3xl font-bold mb-5 text-center'>Explore posts from other farmers!</h1>
      {posts.length !== 0 ? <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-5 w-full'>
        {posts.map(el => (
          <PostCard key={el._id} el={el} />
        ))}
      </div> : <Loading loading={true} />}
    </div>
  )
}
