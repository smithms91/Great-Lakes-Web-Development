import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const WhoWeAre = (props: Props) => {
  return (
    <section className='flex flex-col text-center items-center px-6 space-y-4 bg-white dark:bg-black dark:text-slate-200 -mt-1 pb-20 lg:pb-[10rem] xl:px-[30rem]'>
      <h1 className='text-3xl font-extrabold uppercase'>Who We Are</h1>
      <p className='text-lg font-semibold text-slate-500 dark:text-slate-200 sm:px-10 lg:px-[12rem] md:py-11'>My name is Mike, I am a full time web developer, and run this web development agency as well. I spent the past 10 years teaching myself the right way to make websites and learning to write the code myself. Now after being in business professionally for over 5 years I have built hundreds websites and have my method down to a science. <Link href='/' className='text-blue-500 underline font-semibold'>LEARN MORE</Link></p>
      <Image className="sm:w-[400px]" src='/me.jpg' alt='Me' width={800} height={800} />
      <div className=''>
        <h2 className='text-xl font-bold'>Mike S.</h2>
        <p className='text-md font-medium tracking-widest uppercase'>Owner/Developer</p>
      </div>
    </section>
  )
}

export default WhoWeAre