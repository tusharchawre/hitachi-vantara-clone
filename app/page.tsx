import React from 'react'
import Hero from './components/Hero'
import { Navigation } from './components/Navigation'

function page() {
  return (
    <div className='w-full mx-auto'>
      <Navigation />
      <Hero />
    </div>
  )
}

export default page