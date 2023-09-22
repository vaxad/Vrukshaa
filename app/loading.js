import React from 'react'
import { Jelly } from '@uiball/loaders'

export default function loading() {
  return (
    <div className=' flex w-full justify-center py-48 items-center'>
                <Jelly
                            size={80}
                            speed={0.9}
                            color="white"
                        /></div>
  )
}
