"use client"
import { UserAuth } from '@/lib/authContext'
import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AuthChecker() {
  const { user, getMe, token } = UserAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    goAuth()
    goHome()
  }, [user])

  const goAuth = async () => {
    if (!user && !pathname.includes('/auth/expert')) {
      const data = await getMe()
      router.replace('/')
    }
  }

  const goHome = async () => {
    if (user && pathname.includes('/auth')) {
      router.replace('/home')
    }
  }


  return (
    <></>
  )
}

