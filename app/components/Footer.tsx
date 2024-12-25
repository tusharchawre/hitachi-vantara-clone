
import React from 'react'
import Button from './Button'

export function Footer() {
  return (
    <div className='w-full h-fit'>
      <div className='flex gap-2 md:gap-4 justify-around py-8'>
      <div className='flex flex-col gap-2'>
        <p className='font-bold'>Company</p>
        <p>About Hitachi Vantara</p>
        <p>Sustainability & environment</p>
        <p>Careers</p>
        <p>News & press releases</p>
        <p>Leadership</p>
        <p>Preference center</p>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='font-bold'>Help</p>
        <p>Support</p>
        <p>Contact us</p>
        <p>Terms of service</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
        <p>Careers</p>
      </div>


      <div className='flex flex-col gap-2'>
        <p className='font-bold'>Resources</p>
        <p>Guides</p>
        <p>Blog</p>
        <p>Licenses</p>
        <p>Sitemap</p>
        <p>Ecommerce</p>
        <p>Marketplaces</p>
      </div>

      <div>
        <Button className=' bg-transparent border-2 border-red-500 text-black trasition-all duration-150 ease-in-out font-bold'>
            Contact Sales
        </Button>
        <Button className='mt-2 bg-transparent border-2 border-red-500 text-black trasition-all duration-150 ease-in-out font-bold'>
            Our Locations
        </Button>
      </div>

      </div>


          
    </div>
  )
}

