import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

type Props = {}

const Blog = (props: Props) => {
  return (
    <section className='bg-white dark:bg-black flex flex-col items-center px-6 pb-20 -mt-1 xl:px-[20rem]'>
      <h1 className='text-3xl mb-4 font-extrabold uppercase mt-10 sm:mt-0'>Our Blog</h1>
      <div className='grid grid-cols-1 sm:px-10 lg:grid-cols-3 lg:gap-x-10 lg:mt-10 md:px-[8rem]'>
        <div className='flex flex-col items-center p-10 lg:p-6 shadow-xl shadow-blue-200 dark:shadow-blue-500/50 border-t-4 border-blue-500 rounded-xl space-y-4 mb-10'>
          <Image src='/stock.png' alt='hero image' width={800} height={800} />
          <h1 className='font-bold text-2xl lg:text-xl'>Are hand coded websites better than WordPress?</h1>
          <p className='lg:text-sm'>Learn the differences in speed and security between the two.</p>
          <Button className='self-end bg-gradient-to-r from-blue-500 to-cyan-400 font-bold px-6'>Read More</Button>
        </div>
        <div className='flex flex-col items-center p-10 lg:p-6 shadow-xl shadow-blue-200 dark:shadow-blue-500/50 border-t-4 border-blue-500 rounded-xl space-y-6 mb-10'>
          <Image src='/stock.png' alt='hero image' width={800} height={800} />
          <h1 className='font-bold text-2xl lg:text-xl'>How to add a Dark Mode to a custom website</h1>
          <p className='lg:text-sm'>Learn how I create Dark Mode and why it matters for your site.</p>
          <Button className='self-end bg-gradient-to-r from-blue-500 to-cyan-400 font-bold px-6'>Read More</Button>
        </div>
        <div className='flex flex-col items-center p-10 lg:p-6 shadow-xl shadow-blue-200 dark:shadow-blue-500/50 border-t-4 border-blue-500 rounded-xl space-y-6 mb-10'>
          <Image src='/stock.png' alt='hero image' width={800} height={800} />
          <h1 className='font-bold text-2xl lg:text-xl'>How to build responsive websites from scratch</h1>
          <p className='lg:text-sm'>I talk about how I start each website to make it responsive.</p>
          <Button className='self-end bg-gradient-to-r from-blue-500 to-cyan-400 font-bold px-6'>Read More</Button>
        </div>
      </div>
    </section>
  )
}

export default Blog