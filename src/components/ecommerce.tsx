import React from 'react'
import { Button } from './ui/button'
import { Check } from 'lucide-react'

type Props = {}

const Ecommerce = (props: Props) => {
  return (
    <section className='bg-white dark:bg-black w-full flex flex-col items-center px-6 sm:px-[10rem] lg:px-[2rem] -mt-1 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:items-stretch xl:px-[20rem] xl:gap-x-10 xl:pb-32'>
      <div className='border-2 border-[#e2f1ff] w-full text-center rounded space-y-4 mb-10 z-0'>
        <h1 className='bg-[#F1F8FF] border-b-2 border-[#e2f1ff] py-3 font-extrabold text-sm uppercase dark:text-black'>E-Commerce</h1>
        <div className='px-6 pb-10 space-y-6 lg:px-0'>
          <p className='uppercase'>Starting At</p>
          <h2 className='text-6xl font-bold text-blue-500 dark:text-slate-200'>$8K</h2>
          <ul className='text-left pl-8 space-y-4 my-4'>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />$8000 min. Up Front Cost</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />Custom Designed</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />Custom Coded Shopify Integration</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />Easy to edit</li>
          </ul>
          <Button className='bg-gradient-to-r from-blue-500 to-cyan-400 rounded-none font-bold px-6'>Contact Us</Button>
        </div>
      </div>
      <div className='border-2 border-[#e2f1ff] w-full text-center rounded-t space-y-4 mb-10 xl:scale-125 z-10 bg-white dark:bg-black'>
        <h1 className='bg-[#F1F8FF] border-b-2 border-[#e2f1ff] py-3 font-extrabold text-sm uppercase dark:text-black'>Standard</h1>
        <div className='px-6 pb-10 space-y-6 lg:px-0'>
          <p className='uppercase'>5 Pages</p>
          <h2 className='text-6xl font-bold text-blue-500 dark:text-slate-200'>$150/mo</h2>
          <ul className='text-left pl-8 space-y-4 my-4'>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />Unlimited Edits</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />Includes Hosting</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />24/7 Customer Service</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />Lifetime Updates</li>
          </ul>
          <Button className='bg-gradient-to-r from-blue-500 to-cyan-400 rounded-none font-bold px-6'>Contact Us</Button>
        </div>
      </div>
      <div className='border-2 border-[#e2f1ff] w-full text-center rounded-t space-y-4 mb-10 z-0'>
        <h1 className='bg-[#F1F8FF] border-b-2 border-[#e2f1ff] py-3 font-extrabold text-sm uppercase dark:text-black'>Logos & Graphic Design</h1>
        <div className='px-6 pb-10 space-y-6 lg:px-0'>
          <p className='uppercase'>Included!</p>
          <h2 className='text-6xl font-bold text-blue-500 dark:text-slate-200'>$0</h2>
          <ul className='text-left pl-8 space-y-4 my-4'>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />2 Revisions</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />All File Formats</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />Ready To Use</li>
            <li className='flex items-center'><Check size="14" className='mr-2' color="blue" />FREE w/ Subscription</li>
          </ul>
          <Button className='bg-gradient-to-r from-blue-500 to-cyan-400 rounded-none font-bold px-6'>Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

export default Ecommerce