"use client"
import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import { UserAuth } from '@/lib/authContext'
import { getComments, postComment } from '@/lib/post'
import { articleComment, getCommentsForArticle } from '@/lib/article'

export default function CommentSection({ postId, articleId }) {
  const [comments, setcomments] = useState([])
  const { user, token } = UserAuth()
  useEffect(() => {
    const getPostComments = async () => {
      const data = await getComments({ postId, token })
      //.log(data)
      setcomments(data)
    }
    const getArticleComments = async () => {
      const data = await getCommentsForArticle({ articleId, token })
      //.log(data)
      setcomments(data)
    }
    if (postId) {
      getPostComments()
    } else {
      getArticleComments()
    }
  }, [])

  const handleSend = async (e) => {
    e.preventDefault()
    const message = document.getElementById('commentBox').textContent
    let newComment
    if (postId) {
      const resp = await postComment({ token, postId, message })
      newComment = resp
    } else {
      const resp = await articleComment({ token, articleId, message })
      newComment = resp
    }
    document.getElementById('commentBox').textContent = ""
    setcomments([...comments, newComment])
  }
  return (
    <div className=' w-full flex flex-col gap-3 justify-center items-center bg-slate-600 rounded-lg p-8'>
      <div id='commentField' className=' flex justify-between items-center bg-white text-black w-full rounded-full py-3 px-6 mb-5' defaultValue={''}>
        <div id='commentBox' contentEditable={true} className=' w-full outline-none'></div>
        <button onClick={(e) => { handleSend(e) }} className=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M 2 3 L 2 10.5 L 17 12 L 2 13.5 L 2 21 L 22 12 L 2 3 z"></path>
        </svg></button>
      </div>
      {comments.map(el => {
        return (
          <CommentCard key={el._id} el={el} />
        )
      })}
    </div>
  )
}
