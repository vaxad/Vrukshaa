"use client"
import { UserAuth } from '@/lib/authContext'
import { approvePost, disapprovePost } from '@/lib/post'
import React, { useState } from 'react'

export default function Approve({ postId }) {

  const { user } = UserAuth()
  const [reviewed, setreviewed] = useState(false)

  return (user?.userType === 'Expert' && !reviewed) && (
    <div className=' flex flex-row justify-between items-center text-slate-100 w-full px-8 absolute -bottom-8'>
      <div onClick={() => { approvePost({ postId }); setreviewed(true) }} className=' p-3 bg-green-500 rounded-full hover:scale-110 transition-all'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
          <path d="M55.211 14.629L26.125 43.715 8.789 26.379 5.961 29.207 26.125 49.371 58.039 17.457z"></path>
        </svg>
      </div>
      <div onClick={() => { disapprovePost({ postId }); setreviewed(true) }} className=' p-3 bg-red-500 rounded-full hover:scale-110 transition-all'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg>
      </div>
    </div>
  )
}
