import React from 'react'
import Hero from './components/Hero'
import { Navigation } from './components/Navigation'
import Features from './components/Features'
import { BrandShowcase } from './components/BrandShowcase'
import { CardCaseDark } from './components/CardCase-dark'
import { CardCaseLight } from './components/CardCase-light'
import { Ebook } from './components/e-book'
import { Footer } from './components/Footer'
import { Partnership } from './components/partnership'

function page() {
  return (
    <div className='w-full mx-auto relative'>
      <Navigation />
      <Hero />
      <Features />
      <BrandShowcase  />
      <Ebook />
      <CardCaseLight />
      <CardCaseDark />
      <Partnership />
      <Footer />

    </div>
  )
}

export default page