import React from 'react'
import Button from './Button'
import {DropDownMenu} from './DropDownMenu'

export function Navigation() {
  return (
    <div className='w-full h-28 flex items-center fixed top-0 left-0 z-50' >

<div className='w-full max-w-6xl mx-auto flex items-center'>
    <div className='absolute top-4 bg-[#CC2F2A] px-2'>
        <img src="/hitachi-nav-small.svg" alt="Hitachi Vantara Logo" />
    </div>

        <div className='w-[83%] border-y-[0.5px] border-gray-500/20 py-3 flex gap-8 justify-around'>
        <img src="/hv-logo.svg" alt="Hitachi Vantara Logo" />
        
        <DropDownMenu />
        </div>

        <div className='m-2'>
        <Button className='bg-white text-black font-bold tracking-tighter px-8 py-3'>
            Contact Sales
        </Button>
        </div>

        </div>  
        
    </div>
  )
}

