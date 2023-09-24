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
        if (data.title.length < 5) {
            alert('Title too short, it should be minimum 5 characters long')
        } else if (data.description.length < 2000) {
            alert('Description too short, it should be minimum 2000 characters long')
        } else {
            setsubmitStatus({ text: 'Article is being uploaded' })
            setSubmit(true)
            const res = await makeArticle(data)
            //.log(res)
            router.push(`/articles/view/${res.article._id}?title=${res.article.title}`)
        }
    }

    const handleChange = (e) => {
        if ((e.target.id === "title" && e.target.value.length <= 150)) {
            setdata({ ...data, ["title"]: e.target.value })
        } else if ((e.target.id === "description" && e.target.value.length <= 6000)) {
            setdata({ ...data, ["description"]: e.target.value })
        } else if (e.target.id === "tags") {
            setdata({ ...data, ["tags"]: e.target.value })
        }
    }

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }} className=' flex flex-col justify-center items-center w-full gap-8'>
                <div className='flex flex-col gap-2 w-11/12'>
                    <div className=' flex flex-row w-full justify-between items-center'>
                        <label>Title<sup>*</sup></label>
                        <label className={`${data.title.length > 140 ? ' text-red-500' : ''}`}>{data.title.length}/150</label>
                    </div>
                    <input id="title" required onChange={(e) => { handleChange(e) }} value={data.title} type='text' className=' w-full rounded-full text-black px-5 py-3'></input>
                </div>
                <div className=' w-11/12 flex-col flex justify-center items-center'>
                    <div className=' flex flex-row w-full justify-between items-center'>
                        <label>Description<sup>*</sup></label>
                        <label className={`${data.description.length > 5900 ? ' text-red-500' : ''}`}>{data.description.length}/6000</label>
                    </div>
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
