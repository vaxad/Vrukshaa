"use client"
import React, { useEffect, useState } from 'react'
import AuthChecker from '../../components/AuthChecker'
import SearchBar from './SearchBar'
import ArticleCard from './ArticleCard'
import AddBtn from './AddBtn'
import { getArticles } from '@/lib/article'
import Loading from '../../components/Loading'

export const metadata = {
  title: 'Articles - Vrukshaa',
  description: 'image analysis',
}

export default function ArticlePage() {
  const [posts, setposts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getArticles()
      // console.log(data.articles)
      setposts(data.articles)
    }
    getData()
  }, [])
  return (
    <div className=' flex flex-col justify-center items-center md:px-16 px-6 py-8 gap-8 w-full'>
      <AuthChecker />
      <SearchBar />
      <h1 className=' text-2xl md:text-3xl text-center font-bold mb-5'>Explore articles from experts!</h1>
      <AddBtn />
      {posts.length !== 0 ? <div className=' grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-5 w-full'>
        {posts?.map(el => (
          <ArticleCard key={el._id} el={el} />
        ))}
      </div> : <Loading loading={true} />}
    </div>
  )
}
