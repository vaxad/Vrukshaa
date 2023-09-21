"use client"
import { UserAuth } from '@/lib/authContext'
import Link from 'next/link'
import React from 'react'

export default function AddBtn() {
  const { user } = UserAuth()
  return user?.userType === 'Expert' && (
    <Link href={'/articles/make'} className=' w-full cursor-pointer rounded-full bg-yellow-500 text-zinc-900 py-2 font-bold text-4xl flex justify-center items-center'>+</Link>
  )
}
