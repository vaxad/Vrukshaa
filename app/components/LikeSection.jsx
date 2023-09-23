"use client"
import { likeArticle, unlikeArticle } from '@/lib/article'
import { UserAuth } from '@/lib/authContext'
import { likeComment, unlikeComment } from '@/lib/comment'
import { likePost, unlikePost } from '@/lib/post'
import React, { useState } from 'react'

export default function LikeSection({ likes, type, itemId, size }) {
  const { user } = UserAuth()
  const id = user?._id
  const [like, setlike] = useState(likes)
  const handleLike = async () => {
    if (like.includes(id)) {
      setlike(like.filter((item) => item != id))
      if (type === "post") {
        await unlikePost({ postId: itemId })
      } else if (type === "comment") {
        await unlikeComment({ commentId: itemId })
      } else if (type === "article") {
        await unlikeArticle({ articleId: itemId })
      }
    } else {
      setlike([...like, id])
      if (type === "post") {
        await likePost({ postId: itemId })
      } else if (type === "comment") {
        await likeComment({ commentId: itemId })
      } else if (type === "article") {
        await likeArticle({ articleId: itemId })
      }
    }
  }
  return (
    <div className=' flex flex-row gap-2 justify-start items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { handleLike() }} className={` ${like.includes(id) ? 'text-slate-900' : 'text-slate-600'} hover:scale-105 hover:text-slate-700 transition-all`} fill='currentColor' x="0px" y="0px" width={size} height={size} viewBox="0 0 24 24">
        <path d="M 11.677734 2.1816406 C 11.255625 2.2202656 10.879797 2.5279063 10.779297 2.9726562 L 10.224609 5.4179688 L 7.5136719 8.4296875 C 7.1826719 8.7966875 7 9.2735781 7 9.7675781 L 7 19 C 7 20.105 7.895 21 9 21 L 17.03125 21 C 17.77225 21 18.443141 20.563719 18.744141 19.886719 L 21.746094 13.130859 C 21.913094 12.756859 22 12.351406 22 11.941406 L 22 11 C 22 9.9 21.1 9 20 9 L 13 9 C 13 9 14 6.6292813 14 4.8632812 C 14 3.2502813 12.962422 2.5443281 12.107422 2.2363281 C 11.964672 2.1845781 11.818437 2.1687656 11.677734 2.1816406 z M 3.5 9 C 2.672 9 2 9.672 2 10.5 L 2 19.5 C 2 20.328 2.672 21 3.5 21 C 4.328 21 5 20.328 5 19.5 L 5 10.5 C 5 9.672 4.328 9 3.5 9 z"></path>
      </svg>
      <p className={` text-slate-600 ${size > 35 ? 'text-md' : 'text-sm'} `}>{like.length} people found this helpful</p>

    </div>
  )
}
