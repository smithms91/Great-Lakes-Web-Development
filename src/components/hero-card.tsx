import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

type Props = {}

const HeroCard = (props: Props) => {
  return (
    <section className='pt-20 pb-10 px-4 space-y-8 text-white dark:text-slate-200 xl:px-[30rem]'>
      <h1 className='font-extrabold text-3xl mr-4 sm:text-5xl md:pr-[10rem]'>Small Business Web Design + Development</h1>
      <p className='sm:text-lg sm:mr-4 md:pr-[10rem]'>No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo.</p>
      <Button className='bg-white dark:bg-transparent text-black dark:text-slate-200 dark:border-2 dark:border-blue-900 dark:shadow-white/25 dark:shadow-lg px-6 rounded-sm'>Get in touch!</Button>
      <Image src='/stock-mockup.png' alt='hero image' width={800} height={800} />
    </section>
  )
}

export default HeroCard