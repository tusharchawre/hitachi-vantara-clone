import React from 'react'
import { Card } from './Card'

export const CardCaseLight = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center text-black flex-col'>
      <div className='pt-12'>
      <p className='text-center'>News, opinions & events</p>
      <h1 className='text-[3rem] leading-none font-bold mt-1 mb-4'>
      This just in
      </h1>
      </div>
      

      <div className='w-full h-full max-w-6xl flex items-center justify-between'>
        <Card 
        src='/Card1.webp'
        blogDate='November 19, 2024'
        Title='Unleash the Power of Your AI Initiative with Hitachi iQ'
        />
        <Card
        src='/Card2.webp'
        blogDate='November 19, 2024'
        Title='Hitachi Vantara Announces Hitachi iQ for Trusted Data Infrastructure Solutions for Modern AI Systems with NVIDIA HGX™ Platform'
        />
        <Card 
        src='/Card3.webp'
        blogDate='November 12, 2024'
        Title='Hitachi Vantara Expands Hybrid Cloud Storage Platform with Object Storage, All-QLC Flash and Advancing Cloud Integration'
        />

      </div>
   
    </div>
  )
}

