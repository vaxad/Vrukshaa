"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ExpertButton() {
  const router = useRouter()
  const handleSubmit = async () => {
    router.push('/auth/expert/verify')
  }
  return (
    <button onClick={() => { handleSubmit() }} className=" bg-yellow-500 rounded-lg px-5 py-3 text-xl font-bold text-zinc-900 hover:scale-95 transition-all">Yes, i am a qualified expert!</button>
  )
}
