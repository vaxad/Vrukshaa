"use client"
import { UserAuth } from '@/lib/authContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AuthChecker() {
    const {user} = UserAuth()
    const router = useRouter()
    useEffect(() => {
      if(!user){
        router.push('/auth')
      }
    }, [user])
  return (
    <></>
  )
}
