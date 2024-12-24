import React from 'react'
import Hero from './components/Hero'
import { Navigation } from './components/Navigation'
import Features from './components/Features'
import { BrandShowcase } from './components/BrandShowcase'

function page() {
  return (
    <div className='w-full mx-auto relative'>
      <Navigation />
      <Hero />
      <Features />
      <BrandShowcase  />
    </div>
  )
}

export default page