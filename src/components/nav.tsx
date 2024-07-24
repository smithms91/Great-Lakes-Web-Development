'use client';

import { AlignJustify, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link';

type Props = {}

const Nav = (props: Props) => {
  const [navOpen, setNavOpen] = useState(false)

  const handleNavOpen = () => {
    setNavOpen(!navOpen)
    console.log('nav open')
    if (!navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup to reset body overflow when component unmounts or nav closes
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${navOpen ? 'block' : 'hidden'}`} onClick={() => setNavOpen(false)}></div> {/* Optional: Overlay */}
      <div className={`fixed flex flex-col min-h-screen bg-gray-50 right-0 w-[250px] p-5 z-30 transform transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <X size={40} className='text-black self-end cursor-pointer' onClick={() => handleNavOpen()} />
        <ul className='space-y-10 text-right mt-10 flex flex-col text-black'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <nav className='flex items-center justify-between w-full px-4 lg:px-[3rem] xl:px-[30rem]'>
        <Link href="/"><Image src="/glwd-logo.png" alt="logo" width={100} height={100} className='w-[200px] sm:w-[250px] lg:w-[300px]' /></Link>
        <AlignJustify size={40} className='text-white sm:mr-10 lg:hidden' onClick={() => handleNavOpen()} />
        <ul className='hidden lg:flex items-center w-[50%] justify-evenly text-white font-bold text-xl'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>
        <ModeToggle className='absolute top-[5rem] right-4 flex flex-col items-center sm:right-14 sm:top-[5.5rem] lg:relative lg:top-2 lg:right-10' />
      </nav>
    </>
  )
}

export default Nav