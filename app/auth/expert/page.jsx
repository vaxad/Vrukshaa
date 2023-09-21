import React from 'react'
import FarmerButton from './components/FarmerButton'
import ExpertButton from './components/ExpertButton'


export default function Page() {

  return (
    <div className=' flex flex-col justify-center w-full items-center px-24 py-8 gap-5 '>
      <img src='/logo.png' className=' w-1/12 py-8 '></img>
      <h1 className=' text-5xl font-bold mb-5'>Are you an expert?</h1>
      <div className='flex gap-12'>
        <FarmerButton />
        <ExpertButton />
      </div>
      <p className=" text-md font-light text-center pb-12 pt-12 ">{"(NOTE: expert accounts will be verified)"}</p>
    </div>
  )
}
