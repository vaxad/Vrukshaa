"use client"
import React, { useState } from 'react'
import { Jelly } from '@uiball/loaders'
import { useRouter } from 'next/navigation'
import { makeArticle } from '@/lib/article'

export default function PostForm() {
    const [data, setdata] = useState({ title: '', description: '', tags: '' })
    const [submit, setSubmit] = useState(false)
    const [submitStatus, setsubmitStatus] = useState({ color: '', text: '' })
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setsubmitStatus({ text: 'Article is being uploaded' })
        setSubmit(true)
        const res = await makeArticle(data)
        //.log(res)
        router.push(`/articles/view/${res.article._id}`)
    }

    const handleChange = (e) => {
        setdata({ ...data, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }} className=' flex flex-col justify-center items-center w-full gap-8'>
                <div className='flex flex-col gap-2 w-11/12'>
                    <label>Title<sup>*</sup></label>
                    <input id="title" required onChange={(e) => { handleChange(e) }} value={data.title} type='text' className=' w-full rounded-full text-black px-5 py-3'></input>
                </div>
                <div className=' w-11/12 flex-col flex justify-center items-center'>
                    <label className=' w-full py-2'>Description<sup>*</sup></label>
                    <textarea id='description' required onChange={(e) => { handleChange(e) }} value={data.description} defaultValue={''} rows={30} className='w-full text-black p-3 focus:ring-0 placeholder:text-gray-500' placeholder='i have been facing this issue since last falll. even tho i sprayed metamorphic pesticides on few of the crops...' />
                </div>
                <div className='flex flex-col gap-2 w-11/12'>
                    <label>Tags</label>
                    <input required onChange={(e) => { handleChange(e) }} value={data.tags} id='tags' type='text' className=' w-full rounded-full text-black px-5 py-3' placeholder='pests, fertilizers'></input>
                </div>
                <button type='submit' className=' mt-5 w-11/12 py-6 md:py-12 rounded-lg text-zinc-950 cursor-pointer bg-yellow-500 hover:bg-yellow-300 flex justify-center items-center text-xl md:text-3xl transition-all font-bold'>
                    PUBLISH MY ARTICLE
                </button>
                <div className={`${!submit && '-translate-y-full'} transition-all w-full h-full flex justify-center items-center bg-yellow-300 fixed top-0 right-0`} style={{ transitionDuration: "500ms" }}>
                    <Jelly
                        size={80}
                        speed={0.9}
                        color="black"
                    />
                    <p className=' py-12 text-2xl font-medium text-zinc-900'>{submitStatus.text}</p>
                </div>
            </form>
        </div>
    )
}
