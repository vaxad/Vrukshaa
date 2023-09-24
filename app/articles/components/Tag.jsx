import React from 'react'

export default function Tag({ tag }) {
  return tag !== '' && (
    <div className='py-1 px-2 bg-yellow-300 items-center rounded-full max-w-full overflow-x-hidden'>
      <h2 className=' font-semibold text-sm max-w-full overflow-x-hidden'>{tag}</h2>
    </div>
  )
}
