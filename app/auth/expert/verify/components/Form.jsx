"use client"
import { UserAuth } from '@/lib/authContext'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Form() {
  const [data, setdata] = useState({ name: '', email: '', qualification: '', experience: '', uid: '', expertise: '', createdAt: Date.now(), type: 'Expert' })
  const router = useRouter()
  const { makeExpert, user } = UserAuth()
  useEffect(() => {
    //.log(user)
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    //.log(data)
    await makeExpert(data)
    router.push('/home')
  }

  const handleCancel = async (e) => {
    e.preventDefault()
    router.back()
  }
  const handleChange = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value })
  }
  return (
    <form onSubmit={(e) => { handleSubmit(e) }} on className=' w-full flex flex-col justify-center items-center gap-6'>
      <div className='flex flex-col gap-2 w-full'>
        <label>Name</label>
        <input required onChange={(e) => { handleChange(e) }} value={data.name} id='name' type='text' className=' w-full rounded-full text-black px-5 py-3'></input>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <label>Email</label>
        <input required onChange={(e) => { handleChange(e) }} value={data.email} id='email' type='text' className=' w-full rounded-full text-black px-5 py-3'></input>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <label>Qualification</label>
        <input required onChange={(e) => { handleChange(e) }} value={data.qualification} id='qualification' type='text' className=' w-full rounded-full text-black px-5 py-3'></input>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <label>Years of Experience</label>
        <input required onChange={(e) => { handleChange(e) }} value={data.years} id='experience' type='Number' className=' w-full rounded-full text-black px-5 py-3'></input>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <label>Aadhar number</label>
        <input required onChange={(e) => { handleChange(e) }} value={data.aadhar} id='uid' type='Number' pattern='^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$' className=' w-full rounded-full text-black px-5 py-3'></input>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <label>Expertise</label>
        <input required onChange={(e) => { handleChange(e) }} value={data.expertise} id='expertise' type='text' className=' w-full rounded-full text-black px-5 py-3'></input>
      </div>
      <div>
        <div className=' flex flex-row gap-8'>
          <button type='submit' className=" bg-green-500 rounded-lg px-5 py-3 text-xl font-bold hover:scale-95 transition-all">Verify my details!</button>

          <button type='cancel' onClick={() => { handleCancel() }} className=" bg-red-500 rounded-lg px-5 py-3 text-xl font-bold hover:scale-95 transition-all">Cancel verification</button>
        </div>
      </div>
    </form>
  )
}
