import React from 'react'
import InfoCard from './info-card'
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'

type Props = {}

const WhatWeDo = (props: Props) => {
  return (
    <section className='bg-white dark:bg-black p-4 text-center text-black dark:text-slate-200 lg:px-10 xl:px-[30rem]'>
      <h1 className='text-center text-3xl my-6 uppercase font-extrabold'>What We Do</h1>
      <p className='font-semibold text-lg text-slate-500 dark:text-slate-200 sm:px-10 lg:px-[10rem]'>We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business. <Link href="/" className='text-blue-600 underline'>LEARN MORE</Link></p>
      <div className='lg:grid lg:grid-cols-3 lg:gap-x-10 lg:mt-10'>
        <InfoCard title='Mobile First Design' desc='We start building your site for mobile devices first, then we add on to it to make tablet and desktop.' />
        <InfoCard title='Fully Responsive' desc='Your website will fit all mobile screen sizes, tablets, and desktop sizes so new clients can access your site from anywhere.' />
        <InfoCard title='Optimization' desc='60% of all internet traffic is mobile devices, so we optimize your mobile to perform their best in search engines.' />
      </div>
      <div className='xl:flex xl:items-start xl:my-[4rem]'>
        <Image className="mt-12 sm:w-[400px] sm:mt-[10rem] xl:mt-[5rem]" src='/savings.svg' alt='mobile first design' width={800} height={800} />
        <div className='flex flex-col space-y-4 mt-10 text-left px-6 text-black dark:text-slate-200 sm:mr-[10rem] xl:mr-0 xl:p-0 xl:ml-10'>
          <h1 className='text-xl font-bold text-left sm:text-2xl lg:text-4xl'>$0 Down, $150 Per Month,<br />12 Month Minimum Contract</h1>
          <p className='font-semibold text-lg text-slate-500 dark:text-slate-200 sm:text-lg'>$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.</p>
          <p className='font-semibold text-lg text-slate-500 dark:text-slate-200 sm:text-lg'>You own your domain, content, listing, and profiles. Cancel anytime with no fees or hassle.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 md:justify-between md:w-full px-6 gap-y-8 my-10 sm:mr-[10rem] xl:mr-0 xl:pt-10 xl:px-0'>
            <div className='flex text-left'>
              <div className='w-[30px] h-[30px]'>
                <Check size={30} className='text-green-500' />
              </div>
              <div className='ml-2'>
                <h1 className='font-bold text-xl'>Hosting Fees Included</h1>
                <p className='font-semibold text-md text-slate-500 dark:text-slate-200'>Hosting fees are built right into the monthly payment.</p>
              </div>
            </div>
            <div className='flex items-start text-left'>
              <div className='w-[30px] h-[30px]'>
                <Check size={30} className='text-green-500' />
              </div>
              <div className='ml-2'>
                <h1 className='font-bold text-xl'>Unlimited Edits</h1>
                <p className='font-semibold text-md text-slate-500 dark:text-slate-200'>Change anything you want at anytime and it will be done that day.</p>
              </div>
            </div>
            <div className='flex items-start text-left'>
              <div className='w-[30px] h-[30px]'>
                <Check size={30} className='text-green-500' />
              </div>
              <div className='ml-2'>
                <h1 className='font-bold text-xl'>24/7 Customer Service</h1>
                <p className='font-semibold text-md text-slate-500 dark:text-slate-200'>Call direct anytime day or night, no phone trees or automated responses.</p>
              </div>
            </div>
            <div className='flex items-start text-left'>
              <div className='w-[30px] h-[30px]'>
                <Check size={30} className='text-green-500' />
              </div>
              <div className='ml-2'>
                <h1 className='font-bold text-xl'>Web Design & Development</h1>
                <p className='font-semibold text-md text-slate-500 dark:text-slate-200'>Includes over 40 hours of design, development, and testing.</p>
              </div>
            </div>
            <div className='flex items-start text-left'>
              <div className='w-[30px] h-[30px]'>
                <Check size={30} className='text-green-500' />
              </div>
              <div className='ml-2'>
                <h1 className='font-bold text-xl'>100 Google Page Speed Score</h1>
                <p className='font-semibold text-md text-slate-500 dark:text-slate-200'>We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking.</p>
              </div>
            </div>
            <div className='flex items-start text-left'>
              <div className='w-[30px] h-[30px]'>
                <Check size={30} className='text-green-500' />
              </div>
              <div className='ml-2'>
                <h1 className='font-bold text-xl'>Google Analytics</h1>
                <p className='font-semibold text-md text-slate-500 dark:text-slate-200'>We install Analytics for free to monitor traffic and where it comes from.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo