"use client"
import React, { useEffect, useState } from 'react'
import AuthChecker from '../../../components/AuthChecker'
import LikeSection from '../../../components/LikeSection'
import CommentSection from '@/app/components/CommentSection'
import Tag from '../../components/Tag'
import { getArticle } from '@/lib/article'
import { UserAuth } from '@/lib/authContext'
import Loading from '@/app/components/Loading'

export const metadata = {
  title: 'Article - Vrukshaa',
  description: 'image analysis',
}

export default function Page({ params: { articleId } }) {
  const { token, user } = UserAuth()
  const [loading, setloading] = useState(true)
  const [post, setpost] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const data = await getArticle({ token, articleId })
      setpost(data)
    }
    if (post) {
      setloading(false)
    }
    getData()
  }, [user, post])

  return post ? (
    <div className=' px-24 py-12 '>
      <AuthChecker />
      <div className={` flex relative flex-col bg-yellow-100 rounded-lg text-zinc-900 w-full p-8 gap-5`}>
        <div className=' flex flex-row justify-between items-center '>
          <div className=' flex flex-col gap-1 justify-start'>
            <h1 className=' font-semibold text-xl '>{post?.title}</h1>
          </div>
          <h2 className=' font-medium text-md '>{(new Date(post?.createdAt)).toDateString()}</h2>
        </div>
        <div className=' flex flex-row w-full gap-12'>
          {/* <div className=' w-1/3 flex flex-col gap-2'>
            <img alt='plant' className=' rounded-md' src='https://res.cloudinary.com/db670bhmc/image/upload/v1695038209/vruksha/bir4wlmhobjhj2l1tde6.jpg'></img>
            <p id='description' className=' text-sm font-medium '>The best management practice is to use resistant corn hybrids. Fungicides can also be beneficial, especially if applied early when few pustules have appeared on the leaves.</p>
            <LikeSection likes={[1, 3, 4, 5, 5]} id={1243} size={50} />
          </div> */}
          <div className=' flex flex-col w-full gap-2'>

            {/* description  */}
            <p className=' w-full text-lg font-normal pb-5'>{post?.description}</p>
            <div className=' flex flex-row justify-between items-center '>
              <LikeSection likes={post.likes} itemId={articleId} type={"article"} size={50} />
              <div className=' flex flex-row gap-2 items-center justify-start'>
                {post?.tags?.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>
            <CommentSection articleId={articleId} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading loading={true} />
  )
}
