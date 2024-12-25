import React from 'react'
import Button from './Button'
import { ArrowRight } from '@/public/Icons/Icons'

export const Partnership = () => {
  return (
    <div className='w-full my-24'>
        <div className='w-full max-w-6xl mx-auto bg-gradient-to-r from-[#CC2F2A] via-[#CC2F2A] to-[#F07939] flex items-center text-white rounded-xl px-8 py-8'>

            <div className='px-4 py-4'>
            <h1 className='text-[2.5rem] leading-none font-bold mt-1 mb-4'>Partnership has its privileges
            </h1>
            <p>The speed of our industry demands great partnerships. Our partner-centric approach ensures the value is mutual.</p>
            </div>


            <div>
                <Button className='bg-white border-2 text-black trasition-all duration-150 ease-in-out font-bold flex'>
                    Partner with us <ArrowRight />
                </Button>
            </div>
        </div>
    </div>
  )
}

