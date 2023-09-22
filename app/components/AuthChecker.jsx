"use client"
import { UserAuth } from '@/lib/authContext'
import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AnimatedPlant from './AnimatedPlant'

export default function AuthChecker() {
  const { user, getMe, checkServer, token } = UserAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [error, seterror] = useState(false)

  useEffect(() => {
    goError()
    goHero()
    goAuth()
    goHome()
  }, [user])

  const goError = async() => {
    const data = await checkServer()
    if(!data){
      // router.push('/error')
      seterror(true)
    }else if(pathname.includes('/error')){
      // router.replace('/')
      seterror(false)
    }
  }

  const goAuth = async () => {
    if (!user && !pathname.includes('/auth/expert')) {
      const data = await getMe()
      router.replace('/')
    }
  }

  const goHome = async () => {
    if (user && pathname.includes('/auth') && !pathname.includes('expert')) {
      router.replace('/home')
    }
  }

  const goHero = async () => {
    if (user && (token===''||!token)) {
      router.replace('/')
    }
  }


  return error&&(
      <div className={` z-50 overflow-hidden fixed ${!error&&' translate-y-full'} top-0 right-0 flex justify-center flex-col pt-24 gap-4 items-center w-full h-screen bg-zinc-900`} style={{transitionDuration:"500ms"}}>
        <h1 className=' text-xl md:text-4xl font-bold text-center ' >Sorry! Our server is down☹️🌱</h1>
        <h1 className=' text-lg md:text-2xl font-bold text-center ' >Please try again after a while!</h1>
        {error&&<AnimatedPlant/>}
    </div>
  )
}

