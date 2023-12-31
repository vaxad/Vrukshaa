"use client"
import React, { useEffect, useState } from 'react'
import PostCard from '../../home/components/PostCard'
import AuthChecker from '../../components/AuthChecker'
import ArticleCard from '../../articles/components/ArticleCard'
import { UserAuth } from '@/lib/authContext'
import { getUserData } from '@/lib/profile'
import Loading from '../../components/Loading'

export const metadata = {
  title: 'Home - Vrukshaa',
  description: 'image analysis',
}
export default function ProfilePage() {
  const { user } = UserAuth()

  const [posts, setposts] = useState([])
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)

  const [content, setcontent] = useState(posts?.length !== 0 ? true : articles?.length !== 0 ? false : -1)
  useEffect(() => {
    const getData = async () => {
      const data = await getUserData()
      //.log(data)

      setcontent((data?.posts?.length !== 0) ? true : data?.articles?.length !== 0 ? false : -1)
      setposts(data.posts ? data.posts : data)
      setarticles(data.articles ? data.articles : [])
      setloading(false)
    }
    getData()
  }, [])

  return (posts?.length !== 0 || articles?.length !== 0) || !loading ? (
    <div className=' flex flex-col justify-center items-center px-6 md:px-16 py-8 gap-8 w-full'>
      <AuthChecker />
      {user?.userType === 'Expert' && articles.length !== 0 && posts.length != 0 && <button onClick={() => { setcontent(!content) }} className={` px-4 py-2 rounded-full text-xl font-semibold text-zinc-900 bg-yellow-400`}>See {content ? 'articles' : 'posts'}</button>}
      {/* <h1 className=' text-3xl font-bold mb-5'>Explore posts from other farmers!</h1> */}
      {content === -1 ? <h1 className=' md:text-3xl font-bold text-xl text-center py-8'>No posts available to display</h1> :
        content ? <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-5 w-full'>
          {posts.map(el => (
            <PostCard key={el._id} el={el} />
          ))}
        </div> :
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-5 w-full'>
            {articles.map(el => (
              <ArticleCard key={el._id} el={el} />
            ))}
          </div>
      }
    </div>
  ) : (
    <Loading loading={true} />
  )
}
