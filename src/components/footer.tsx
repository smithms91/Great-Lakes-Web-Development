import React from 'react'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flex flex-col items-start w-full text-white'>
      <div className='w-full px-6 bg-gradient-to-b from-blue-500 to-[#36CCF8] lg:grid lg:grid-cols-3 xl:px-[30rem]'>
        <div>
          <Image src='/glwd-logo.png' alt='logo' width={200} height={200} className='sm:w-[300px] lg:w-[200px]' />
          <div className='sm:text-lg'>
            <p>smithms91@gmail.com</p>
            <p>(586) 888-9127</p>
          </div>
        </div>
        <div className='my-10 xl:pl-24'>
          <h2 className='text-2xl font-bold'>Navigation</h2>
          <hr className='my-4 border-blue-500' />
          <ul className='space-y-2 sm:text-lg'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='my-10 xl:pl-24'>
          <h2 className='text-2xl font-bold'>Services</h2>
          <hr className='my-4 border-blue-500' />
          <ul className='space-y-2 sm:text-lg'>
            <li>Web Design</li>
            <li>Website Maintenance</li>
            <li>SEO Services</li>
            <li>Content Creation</li>
            <li>Logo Design</li>
          </ul>
        </div>
      </div>
      <p className='text-center text-xs py-8 w-full -mt-1 -mb-1 bg-gradient-to-r from-[#2693C5] to-[#31B9D9] sm:text-md'>Copyright © 2025 | Great Lakes Web Design | All Rights Reserved</p>
    </footer>
  )
}

export default Footer