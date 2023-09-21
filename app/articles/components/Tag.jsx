import React from 'react'

export default function Tag({ tag }) {
  return (
    <div className='py-1 px-2 bg-yellow-300 items-center rounded-full '>
      <h2 className=' font-semibold text-sm'>{tag}</h2>
    </div>
  )
}
