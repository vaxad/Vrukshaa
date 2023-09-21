"use client"
import React from 'react'

export default function CommentBtn() {
  const handleSend = (e) => {
    e.preventDefault()

  }
  return (
    <div className=' flex justify-between items-center bg-white text-black w-full rounded-full py-3 px-6' defaultValue={''}>
      <div id='msg' contentEditable={true} className=' w-full outline-none'></div>
      <button onClick={(e) => { handleSend(e) }} className=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
        <path d="M 2 3 L 2 10.5 L 17 12 L 2 13.5 L 2 21 L 22 12 L 2 3 z"></path>
      </svg></button>
    </div>
  )
}
