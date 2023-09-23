import Link from 'next/link'
import React from 'react'

export default function PostCard({ el }) {
  const verified = el?.reviews?.approved?.length !== 0
  return (
    <Link href={`/post/${el._id}`} className={` flex cursor-default relative flex-col w-full  ${verified ? 'bg-green-300 hover:border-green-600' : 'bg-slate-300 hover:border-slate-600'} rounded-lg gap-4 border-2 border-transparent p-5 transition-all text-zinc-900 `}>
      <div className=' bg-slate-100 rounded-tr-lg px-3 py-1 w-fit absolute top-0 right-0'>{verified ? 'Verified' : 'Unverified'}</div>
      <div className=' flex flex-row justify-between items-center '>
        <div className=' flex flex-col gap-1 justify-start overflow-x-hidden'>
          <h1 className=' font-semibold text-xl '>{el.analysis[0]?.disease}</h1>
          {/* <p className=' font-normal text-md '>Related to rice</p> */}
          <div className=' flex flex-row gap-5 text-slate-600'>
            <div className=' flex flex-row gap-1 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                <path d="M 11.677734 2.1816406 C 11.255625 2.2202656 10.879797 2.5279063 10.779297 2.9726562 L 10.224609 5.4179688 L 7.5136719 8.4296875 C 7.1826719 8.7966875 7 9.2735781 7 9.7675781 L 7 19 C 7 20.105 7.895 21 9 21 L 17.03125 21 C 17.77225 21 18.443141 20.563719 18.744141 19.886719 L 21.746094 13.130859 C 21.913094 12.756859 22 12.351406 22 11.941406 L 22 11 C 22 9.9 21.1 9 20 9 L 13 9 C 13 9 14 6.6292813 14 4.8632812 C 14 3.2502813 12.962422 2.5443281 12.107422 2.2363281 C 11.964672 2.1845781 11.818437 2.1687656 11.677734 2.1816406 z M 3.5 9 C 2.672 9 2 9.672 2 10.5 L 2 19.5 C 2 20.328 2.672 21 3.5 21 C 4.328 21 5 20.328 5 19.5 L 5 10.5 C 5 9.672 4.328 9 3.5 9 z"></path>
              </svg>
              <p className=' text-md font-light'>{el?.likes?.length}</p>
            </div>
            <div className=' flex flex-row gap-1 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                <path d="M 9 46 C 8.550781 46 8.15625 45.699219 8.035156 45.265625 C 7.914063 44.835938 8.101563 44.375 8.484375 44.144531 C 10.625 42.859375 11.480469 40.894531 11.140625 38 L 7 38 C 4.242188 38 2 35.757813 2 33 L 2 9 C 2 6.242188 4.242188 4 7 4 L 43 4 C 45.757813 4 48 6.242188 48 9 L 48 33 C 48 35.757813 45.757813 38 43 38 L 20.683594 38 C 17.707031 45.203125 11.558594 46 9 46 Z"></path>
              </svg>
              <p className=' text-md font-light'>{el?.comments?.length}</p>
            </div>
          </div>
        </div>
        <h2 className=' font-medium text-md '>{(new Date(el?.createdAt)).toDateString()}</h2>
      </div>
      <img className=' rounded-md' src={el.img}></img>
    </Link>
  )
}
