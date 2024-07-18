import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

type Props = {}

const Porfolio = (props: Props) => {
  return (
    <section id="portfolio" className='flex flex-col bg-white dark:bg-black w-full text-center px-6 -mt-1'>
      <h1 className='text-3xl my-10 font-extrabold uppercase'>Our Portfolio</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 xl:mx-[20rem]'>
        <div className='space-y-4 sm:col-span-2 lg:col-span-1 text-left px-6 shadow-xl rounded-xl shadow-blue-200 dark:shadow-blue-500/50 py-10 border-b-4 border-[#1047B5] mb-20'>
          <Image src='/stock.png' alt='hero image' width={800} height={800} />
          <div>
            <h1 className='font-bold text-xl'>Valley Construction</h1>
            <p className='text-slate-500 dark:text-slate-200'>Seattle, WA</p>
          </div>
          <p>Valley Construction Supply is the largest privately held construction supply company in Seattle, WA for over 35 years.</p>
          <Button className='bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm font-bold p-6'>Visit Website</Button>
        </div>
        <div className='space-y-4 text-left px-6 shadow-xl rounded-xl shadow-blue-200 dark:shadow-blue-500/50 py-10 border-b-4 border-[#1047B5] mb-20'>
          <Image src='/stock.png' alt='hero image' width={800} height={800} />
          <div>
            <h1 className='font-bold text-xl'>AB&apos;s Hillbilly Gyros</h1>
            <p className='text-slate-500 dark:text-slate-200'>Oak Harbor, WA</p>
          </div>
          <p>AB&apos;s Hillbilly Gyros is a local fusion gyros restaurant that opened in 2018, we made their first website.</p>
          <Button className='bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm font-bold p-6'>Visit Website</Button>
        </div>
        <div className='space-y-4 text-left px-6 shadow-xl rounded-xl shadow-blue-200 dark:shadow-blue-500/50 py-10 border-b-4 border-[#1047B5] mb-20'>
          <Image src='/stock.png' alt='hero image' width={800} height={800} />
          <div>
            <h1 className='font-bold text-xl'>Dr. Victoria Chan</h1>
            <p className='text-slate-500 dark:text-slate-200'>Foster City, CA</p>
          </div>
          <p>Dr. Victoria Chan is a Naturopathic Doctor based in California who offers a holistic approach to mental health.</p>
          <Button className='bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm font-bold p-6'>Visit Website</Button>
        </div>
      </div>
    </section>
  )
}

export default Porfolio