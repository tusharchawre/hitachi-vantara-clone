import React from 'react'
import { Card } from './Card'

export const CardCaseDark = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center text-white bg-black flex-col'>
      <div className='pt-12'>
      <h1 className='text-[3rem] leading-none font-bold mt-1 mb-4'>
      Resources & Insights
      </h1>
      </div>
      

      <div className='w-full h-full max-w-6xl flex items-center justify-between text-black'>
        <Card 
        src='/Card6.webp'
        Title='A Buyer’s Guide to Hitachi Vantara Virtual Storage Platform One SDS'
        />
        <Card
        src='/Card5.webp'
        Title='The Total Economic Impact™ of Managed Services From Hitachi Vantara for XaaS'
        />
        <Card 
        src='/Card4.webp'
        Title='Enterprise Data Infrastructure for Generative AI: A Foundation for Success'
        />

      </div>
   
    </div>
  )
}

