"use client"
import React from 'react'
import Button from './Button'
import { ArrowRight } from '@/public/Icons/Icons'
import Image from 'next/image'

export function Ebook() {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center text-white'>
        <div className='w-3/4 h-[55%] border border-white/50 rounded-xl overflow-hidden flex justify-between'>
        <div className='w-[60%] py-8 flex flex-col gap-4 px-16'>
        <h1
        className='text-[3rem] leading-none font-bold mt-8 mb-4'
                >The Rise of the Data Platform for Hybrid Cloud
         </h1>
         <p>How can enterprises like yours manage the explosive growth of data, the need for a cloud-like consumption model to mitigate cyber risks, and cut costs while boosting performance?</p>
        <Button className='bg-white text-black font-bold tracking-tighter px-8 py-3'>
            Read eBook
            <ArrowRight />
        </Button>
        </div>

    <div>
    <Image src="/mit-technology-review-hybrid-cloud-rectangle_tabsimage.webp" alt="clear-data-chaos" className='h-full w-full' width={500} height={500} />
    </div>
        

        </div>
    </div>
  )
}

