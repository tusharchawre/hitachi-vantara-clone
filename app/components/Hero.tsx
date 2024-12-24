import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { ArrowRight } from '@/public/Icons/Icons'


function Hero() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-[#CC2F2A] via-[#CC2F2A] to-[#F07939] flex items-center text-white'>
        <div className='flex justify-between max-w-6xl mx-auto px-4 -translate-y-12'>
           <div className='w-[60%] py-8 flex flex-col gap-4'>
           <h1 className='font-extrabold text-[4rem] leading-none'>
            The Data Foundation for Innovation
            </h1>
            <p className='font-thin'>Discover how Hitachi Vantara empowers customers to build data resilience and drive sustainable business outcomes.</p>
            <Button className='mt-8 bg-transparent hover:bg-white hover:text-black trasition-all duration-150 ease-in-out font-bold'>
                Explore More 
                <ArrowRight />
            </Button>
           </div>

           <div>
            <Image 
            className='rounded-3xl w-[21rem] -translate-x-12 shadow-2xl'
            height={500} 
            width={500} 
            src="/energy-star-storage-sustainability-hero_herohomepage.webp" alt="" />
           </div>
        </div>

        
    </div>
  )
}

export default Hero