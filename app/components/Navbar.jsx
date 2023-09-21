import Link from 'next/link'
import React from 'react'
import LogoutBtn from './LogoutBtn'
import AuthChecker from './AuthChecker'

export default function Navbar() {

  return (
    <div className=' w-full  py-12 px-24 flex justify-between items-center bg-black bg-opacity-10'>
      <AuthChecker />
      <div className=' flex justify-start items-center gap-2 w-full'>
        <img className=' w-1/12' src='/logo.png'></img>
        <h2 className=' font-bold text-lg'>Vrukshaa</h2>
      </div>
      <div className=' w-full flex gap-5 justify-center items-center'>
        <Link href={'/home'} className=" font-normal text-md">Home</Link>

        <Link href={'/post'} className=" font-normal text-md">Post</Link>

        <Link href={'/articles'} className=" font-normal text-md">Articles</Link>

        <Link href={'/profile'} className=" font-normal text-md">Profile</Link>
      </div>
      <div className='flex justify-end items-center w-full'>
        <LogoutBtn />
      </div>
    </div>
  )
}
