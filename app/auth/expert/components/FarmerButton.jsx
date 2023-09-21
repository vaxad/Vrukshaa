"use client"
import { UserAuth } from '@/lib/authContext'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FarmerButton() {
  const router = useRouter()
  const { makeNormal } = UserAuth()
  const handleSubmit = async () => {
    await makeNormal()
    router.push('/home')
  }
  return (
    <button onClick={() => { handleSubmit() }} className=" bg-green-500 rounded-lg px-5 py-3 text-xl font-bold hover:scale-95 transition-all">No, I am a regular user!</button>
  )
}
