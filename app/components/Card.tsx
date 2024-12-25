import { ArrowRight } from '@/public/Icons/Icons'
import Image from 'next/image'
import React from 'react'

interface CardProps {
    blogDate?: string
    Title: string
    src: string
}

export const Card = ({blogDate, Title, src}: CardProps) => {
  return (
    <div className='group/card h-[580px] w-[22rem] bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300 ease-in-out'>
        <div className='h-[50%] overflow-hidden'>

        <Image className=' scale-105 group-hover/card:scale-100 transition-all duration-300 ease-in-out' src={src} alt="clear-data-chaos" width={500} height={500} />
        </div>

        <div className='h-[50%] w-full p-4 flex flex-col justify-between'>
            <p className='font-bold'>{blogDate}</p>
            <p className='text-[1.2rem] font-bold'>{Title}</p>
            <p className='text-red-500 flex'>Read the blog <ArrowRight /></p>
        </div>

    </div>
  )
}

