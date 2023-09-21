"use client"
import React, { useEffect, useState } from 'react'
import AuthChecker from '../components/AuthChecker'
import SearchBar from './components/SearchBar'
import ArticleCard from './components/ArticleCard'
import AddBtn from './components/AddBtn'
import { getArticles } from '@/lib/article'
import { UserAuth } from '@/lib/authContext'
import Loading from '../components/Loading'

export const metadata = {
  title: 'Articles - Vrukshaa',
  description: 'image analysis',
}
export default function Page() {
  const { token } = UserAuth()
  const [posts, setposts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getArticles(token)
      console.log(data.articles)
      setposts(data.articles)
    }
    getData()
  }, [])
  return (
    <div className=' flex flex-col justify-center items-center px-16 py-8 gap-8 w-full'>
      <AuthChecker />
      <SearchBar />
      <h1 className=' text-3xl font-bold mb-5'>Explore articles from experts!</h1>
      <AddBtn />
      {posts.length !== 0 ? <div className=' grid grid-cols-3 grid-flow-row-dense gap-5 w-full'>
        {posts?.map(el => (
          <ArticleCard key={el._id} el={el} />
        ))}
      </div> : <Loading loading={true} />}
    </div>
  )
}
