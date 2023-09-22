import React from 'react'
import FarmerButton from './components/FarmerButton'
import ExpertButton from './components/ExpertButton'


export default function Page() {

  return (
    <div className=' flex flex-col justify-center w-full items-center px-6 md:px-12 lg:px-24 py-48 lg:py-8 md:py-24 gap-5 '>
      <img src='/logo.png' className=' w-1/12 py-8 '></img>
      <h1 className=' text-2xl text-center md:text-5xl font-bold mb-5'>Are you an expert?</h1>
      <div className='flex flex-col md:flex-row gap-12'>
        <FarmerButton />
        <ExpertButton />
      </div>
      <p className=" text-md font-light text-center pb-12 pt-12 ">{"(NOTE: expert accounts will be verified)"}</p>
    </div>
  )
}
