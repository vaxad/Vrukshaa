"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import AuthChecker from './AuthChecker'
import { usePathname } from 'next/navigation'
import { UserAuth } from '@/lib/authContext'

export default function Navbar() {
  const [nav, setnav] = useState(false)
  const { user,logOut } = UserAuth()
  const path = usePathname()

  return (
    <div>
      <AuthChecker />
    <div className=' w-full py-6 px-12  lg:py-12  lg:px-24 md:flex hidden justify-between items-center bg-black bg-opacity-25'>
      <Link href={'/'} className=' flex justify-start items-center gap-2 transition-all cursor-default w-full'>
        <img className=' w-1/12 hover:scale-105 transition-all' src='/logo.png'></img>
        <h2 className=' font-bold text-lg'>Vrukshaa</h2>
      </Link>
      <div className=' w-full flex gap-5 justify-center items-center'>
        <Link href={'/home'} className={` font-normal rounded-lg py-1 px-2 ${path.includes('/home')&&'bg-green-200 text-zinc-900'}  text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Home</Link>

        <Link href={'/post'} className={` font-normal rounded-lg py-1 px-2  ${path.includes('/post')&&'bg-green-200 text-zinc-900'} text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Post</Link>

        <Link href={'/articles'} className={` font-normal rounded-lg py-1 px-2  ${path.includes('/articles')&&'bg-green-200 text-zinc-900'} text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Articles</Link>

        <Link href={'/profile'} className={` font-normal rounded-lg py-1 px-2  ${path.includes('/profile')&&'bg-green-200 text-zinc-900'} text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Profile</Link>
      </div>
      <div className='flex justify-end items-center w-full'>
    {user?<button onClick={() => { logOut() }} className=" bg-green-500 hover:bg-slate-100 hover:text-green-500 transition-all rounded-lg px-5 py-3 text-xl font-bold">Logout</button>:<></>}
      </div>
    </div>
    <div className=' w-full bg-black bg-opacity-25 flex md:hidden justify-between items-center py-4 px-8'>
    <Link href={'/'} className=' flex justify-start items-center gap-2  transition-all cursor-default w-full'>
        <img className=' w-1/12 hover:scale-105 transition-all' src='/logo.png'></img>
        <h2 className=' font-bold text-lg '>Vrukshaa</h2>
      </Link>
      <button onClick={()=>{setnav(!nav)}} className={`z-40 p-3 ${nav?'text-black':'text-white'} transition-all rounded-lg`}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" fill="currentColor" height="20" viewBox="0 0 50 50">
<path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
</svg>
      </button>
    <div className={` w-full fixed top-0 -right-full z-3  0 py-4 px-8 flex md:hidden ${nav&&' -translate-x-full'} transition-all justify-center flex-col items-center gap-16 h-screen bg-slate-100`} style={{transitionDelay:"100ms", transitionDuration:"500ms"}}>
      
      <div className=' w-full flex flex-col gap-6 justify-center items-center'>
        <Link onClick={()=>{setnav(!nav)}} href={'/home'} className={` font-normal rounded-lg py-1 px-2 ${path.includes('/home')&&'bg-green-200 '} text-zinc-900  text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Home</Link>

        <Link onClick={()=>{setnav(!nav)}} href={'/post'} className={` font-normal rounded-lg py-1 px-2  ${path.includes('/post')&&'bg-green-200 '} text-zinc-900 text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Post</Link>

        <Link onClick={()=>{setnav(!nav)}} href={'/articles'} className={` font-normal rounded-lg py-1 px-2  ${path.includes('/articles')&&'bg-green-200 '} text-zinc-900 text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Articles</Link>

        <Link onClick={()=>{setnav(!nav)}} href={'/profile'} className={` font-normal rounded-lg py-1 px-2  ${path.includes('/profile')&&'bg-green-200 '} text-zinc-900 text-md hover:bg-green-200 hover:text-zinc-900 transition-all`}>Profile</Link>
      </div>
      <div className='flex justify-center items-center w-full'>
        
    {user?<button onClick={() => { logOut(); setnav(false) }} className=" bg-green-500 hover:bg-slate-100 hover:text-green-500 transition-all rounded-lg px-5 py-3 text-xl font-bold">Logout</button>:<></>}
      </div>
      
    </div>
    </div>
    </div>
  )
}
