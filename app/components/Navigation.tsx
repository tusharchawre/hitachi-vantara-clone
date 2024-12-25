"use client"

import React, { useState, useEffect } from 'react';
import Button from './Button';
import { DropDownMenu } from './DropDownMenu';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-24 flex items-center fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center">
        <div className="absolute top-4 px-2">
          {isScrolled ? (
                      <img src="/hitachi-nav-small-black.svg" alt="Hitachi Vantara Logo" />
          ) : (
            <img src="/hitachi-nav-small.svg" alt="Hitachi Vantara Logo" />
          ) }
        </div>

        <div className={"w-[83%] border-y-[0.5px] border-gray-500/20 py-3 flex gap-8 justify-around text-white" + `${
          isScrolled ? 'bg-white' : 'bg-transparent'

        }`}>


{isScrolled ? (
                     <img src="/hv-logo-black.svg" alt="Hitachi Vantara Logo" />
          ) : (
            <img src="/hv-logo.svg" alt="Hitachi Vantara Logo" />
          ) }
          

          <DropDownMenu className={`${
          isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
        } md:flex hidden`}/>
        </div>

        <div className="m-2">
          <Button className={`font-bold tracking-tighter px-8 py-3 xl:block hidden ${
            isScrolled ? 'bg-black text-white' : 'bg-white text-black'
          }`}>
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}
