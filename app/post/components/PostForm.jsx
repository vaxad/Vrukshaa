"use client"
import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Jelly } from '@uiball/loaders'
import { useRouter } from 'next/navigation'
import { makePosts } from '@/lib/post'

export default function PostForm() {
    const [img, setimg] = useState(null)
    const [imgFile, setImgFile] = useState('')
    const imageUpload = useRef(null)
    const [desc, setdesc] = useState('')
    const [submit, setSubmit] = useState(false)
    const [submitStatus, setsubmitStatus] = useState({ color: '', text: '' })
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setsubmitStatus({ text: 'Image is being uploaded' })
        setSubmit(true)
        //.log(img, desc)
        const formData = new FormData();
        formData.append('file', imgFile);
        formData.append('upload_preset', 'vruksha');

        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/db670bhmc/image/upload',
                formData
            );

            setsubmitStatus({ text: 'waiting for response' })
            //.log(response.statusText);
            if (response.statusText === "OK") {
                setsubmitStatus({ text: 'Image uploaded successfully' })
                const resData = await makePosts({ img: response.data.url, description: desc })
                //.log(resData)
                setsubmitStatus({ text: 'Image analysis started' })
                router.push(`/post/${resData._id}?title=${resData.analysis[0]?.disease}`)

            } else {
                setsubmitStatus({ text: 'Image could not be uploaded' })
                router.push('/home')
            }
        } catch (error) {
            //.error(error);
        }
    }
    const validateFileType = (e) => {
        var selectedFile = e.target.files[0];
        var allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

        if (!allowedTypes.includes(selectedFile.type)) {
            alert('Invalid file type. Please upload a JPEG, PNG, or PDF file.');
            e.value = '';
        } else {
            setimg((URL.createObjectURL(e.target.files[0])))
            setImgFile(e.target.files[0])
        }
    }
    return (
        <div>
            <form className=' flex flex-col justify-center items-center w-full'>
                {(!img) ? <></> : <img className=' py-10' src={img}></img>}
                <div onClick={() => { imageUpload.current.click() }} className=' w-11/12 py-6 md:py-12 rounded-lg cursor-pointer bg-green-500 hover:bg-green-300 flex justify-center items-center text-xl md:text-3xl transition-all font-bold'>
                    {!img ? 'ADD IMAGE' : 'CHANGE IMAGE'}{!img && <sup>*</sup>}
                </div>
                <input id='imageUpload' ref={imageUpload} className=' hidden' onChange={(e) => { validateFileType(e) }} type='file'></input>
                <div className=' my-10 w-11/12 flex-col flex justify-center items-center'>
                    <div className=' flex flex-row w-full justify-between items-center'>
                        <label className=' w-full py-2'>Description<sup>{' (optional)'}</sup></label>
                        <label className={`${desc.length > 1900 ? ' text-red-500' : ''}`}>{desc.length}/2000</label>
                    </div>
                    <textarea value={desc} onChange={(e) => {
                        if (e.target.value.length < 2000) {
                            setdesc(e.target.value)
                        }
                    }} rows={20} className='w-full text-black p-3 focus:ring-0 placeholder:text-gray-500' placeholder='i have been facing this issue since last falll. even tho i sprayed metamorphic pesticides on few of the crops...' />
                </div>
                {img && <button onClick={(e) => { handleSubmit(e) }} className=' w-11/12 py-6 md:py-12 rounded-lg cursor-pointer bg-green-500 hover:bg-green-300 flex justify-center items-center text-xl md:text-3xl transition-all font-bold'>
                    SEND FOR ANALYSIS
                </button>}
                <div className={`${!submit && '-translate-y-full'} transition-all w-full h-full flex flex-col md:flex-row justify-center items-center bg-green-300 fixed top-0 right-0`} style={{ transitionDuration: "500ms" }}>

                    <Jelly
                        size={80}
                        speed={0.9}
                        color="white"
                    />
                    <p className=' py-12 text-lg md:text-2xl font-medium text-center'>{submitStatus.text}</p>
                </div>
            </form>
        </div>
    )
}
