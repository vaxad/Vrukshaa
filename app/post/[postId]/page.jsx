"use client"
import React, { useEffect, useState } from 'react'
import AuthChecker from '../../components/AuthChecker'
import LikeSection from '@/app/components/LikeSection'
import CommentSection from '@/app/components/CommentSection'
import Approve from './components/Approve'
import { getPost } from '@/lib/post'
import { UserAuth } from '@/lib/authContext'
import Loading from '@/app/components/Loading'


export default function Page({ params: { postId } }) {
  const { user } = UserAuth()
  const [loading, setloading] = useState(true)
  const [post, setpost] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const data = await getPost({ postId })
      setpost(data)
    }
    if (post) {
      setloading(false)
    }

    getData()
  }, [user, post])

  return post && (
    <div className=' px-6 md:px-12 lg:px-24 py-12 '>
      <Loading loading={loading} />
      <AuthChecker />
      <div className={` flex relative flex-col  ${post?.reviews?.approved?.length !== 0 ? 'bg-green-300 text-zinc-900' : 'bg-slate-400 text-slate-100'}  rounded-lg  w-full p-8 gap-5`}>
        <div className=' bg-slate-100 text-zinc-800 rounded-tr-lg px-3 py-1 w-fit absolute top-0 right-0'>{post?.reviews?.approved?.length !== 0 ? 'Verified' : 'Unverified'}</div>
        <div className=' flex flex-row justify-between items-center '>
          <div className=' flex flex-col gap-1 justify-start'>
            <h1 className=' font-semibold text-xl '>{post?.analysis[0]?.disease}</h1>
          </div>
          <h2 className=' font-medium text-md '>{(new Date(post?.createdAt)).toDateString()}</h2>
        </div>
        <div className=' flex flex-col md:flex-row w-full gap-12'>
          <div className=' w-full md:w-1/3 flex flex-col gap-2'>
            <img alt='plant' className=' rounded-md' src={post.img}></img>
            <p id='description' className=' text-sm font-medium break-words'>{post?.description}</p>
            <LikeSection likes={post?.likes} itemId={post?._id} type="post" size={50} />
          </div>
          <div className=' flex flex-col w-full gap-2'>

            {/* diagnosisCard  */}
            <div id='diagnosisCard' className={`flex flex-col relative p-5 gap-6 ${post?.reviews?.approved?.length !== 0 ? 'bg-green-800' : 'bg-slate-500'} h-fit rounded-lg justify-center items-center text-slate-100 pb-12 mb-12`}>

              <h1 className=' font-bold text-xl '>Diagnosis & Treatment</h1>

              {post?.analysis?.map((obj) => {
                return (
                  <div key={obj.disease} className=' flex flex-col gap-1 w-full justify-start'>
                    <h2 className=' font-semibold text-lg'>{obj.disease}</h2>
                    {obj.solution.map((sol) => {
                      return (
                        <p key={sol} className=' text-sm font-medium '>{sol}</p>
                      )
                    })}
                  </div>
                )
              })}
              {!(post?.reviews.approved.includes(user?._id) || post?.reviews.disapproved.includes(user?._id)) &&
                <Approve postId={postId} />
              }
            </div>

            <CommentSection postId={postId} />
          </div>
        </div>
      </div>
    </div>
  )
}
