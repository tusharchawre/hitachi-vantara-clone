import React from 'react'
import Hero from './components/Hero'
import { Navigation } from './components/Navigation'
import Features from './components/Features'

function page() {
  return (
    <div className='w-full mx-auto relative'>
      <Navigation />
      <Hero />
      <Features />
    </div>
  )
}

export default page