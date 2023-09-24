import React from 'react'
import LikeSection from './LikeSection'

export default function CommentCard({ el }) {
  return (
    <div className=' w-full bg-slate-300 rounded-lg flex flex-col gap-2 p-4 relative text-zinc-900 flex-wrap overflow-x-hidden'>
      {el.type !== "Normal" && <div className=' bg-slate-100 rounded-tr-lg px-3 text-sm py-1 w-fit absolute top-0 right-0'>{el.type}</div>}
      <p className={`text-md font-normal w-11/12 break-words ${el.type !== "Normal" ? 'pt-2' : ''}`}>{el.message}</p>
      <div className=' flex flex-row justify-between items-center w-full'>
        <LikeSection likes={el.likes} itemId={el._id} type={"comment"} size={25} />
        <h2 className=' font-light text-sm '>{(new Date(el.createdAt)).toDateString()}</h2>
      </div>
    </div>
  )
}
