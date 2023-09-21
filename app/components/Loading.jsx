import React from 'react'
import { Jelly } from '@uiball/loaders'

export default function Loading({ loading }) {
  return loading && (
    <div className=' flex w-full justify-center h-full items-center'>
      <Jelly
        size={80}
        speed={0.9}
        color="white"
      /></div>
  )
}
