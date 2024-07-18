import PageHeader from '@/components/page-header'
import NumberIcon from '@/components/number'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Footer from '@/components/footer'
import { Send, Smartphone } from 'lucide-react'
import ContactForm from '@/components/contact-form'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <main className=''>
      <PageHeader title="About" />
      <div className='p-8 space-y-6 lg:flex lg:my-10 lg:justify-center lg:space-y-0 xl:px-[200px]'>
        <Image src='/me2.jpg' alt="Me" width={200} height={100} className='rounded-md sm:w-[400px] lg:w-[400px] lg:self-start' />
        <div className='lg:basis-1/2 lg:ml-10'>
          <p className='uppercase text-sm text-[#43C3FF]'>Great Lakes Web Development</p>
          <h1 className='text-4xl font-bold mb-6'>Giving Small Businesses The Big Business Treatment</h1>
          <p className='mb-4'>My name is Ryan P, I am the owner and sole developer of Oak Harbor Web Designs. I got into programming after my wife had our first child. I was and still am a stay-at-home dad, and I wanted a career that I can do from home and still be there with the kids to watch them grow up. So over the course of two years I taught myself how to code websites the right way by hand and just started calling small businesses to offer my help.</p>
          <p className=''>What I found was that a lot of small businesses don&apos;t have the funds to spend thousands of dollars upfront on a new website. And the ones that did, got taken advantage of and have a terrible website that looks like it was built by someone in a dungeon and haven&apos;t seen design trends for the last 10 years. They were in a frustrating spot - they either can&apos;t afford a good website, and if they can they don&apos;t know who to trust to make something great. So I tweaked my business model to fit their needs. That&apos;s how I came up with my $0 down and $150 a month model. It&apos;s more managable for a small business to handle and won&apos;t hurt their bank accounts.</p>
        </div>
      </div>
      <div className='p-8 lg:text-center lg:space-y-4 lg:px-20 lg:-mt-10 xl:px-[400px]'>
        <h1 className='text-4xl font-bold pt-10'><span className='text-[#43C3FF]'>Quality</span> Over Quantity</h1>
        <p>We focus on the needs on each individual business and tailor content around what makes it unique. Our collaborative process is very hands on as we work closely with you to create a website you&apos;re 100% happy with and not something you just settle for.</p>
      </div>
      <section className='flex flex-col items-center justify-center p-10 space-y-10 lg:flex-row lg:space-y-0 lg:px-20 lg:items-start xl:px-[200px]'>
        <div className='flex items-center flex-col text-center space-y-4 mb-12'>
          <NumberIcon number={1} />
          <h2 className='text-xl font-bold'>No Pre-Written Content</h2>
          <p>We write unique and engaging content around your company. Everyone is unique!</p>
        </div>
        <div className='flex items-center flex-col text-center space-y-4 mb-12'>
          <NumberIcon number={2} />
          <h2 className='text-xl font-bold'>Unbeatable Customer Service</h2>
          <p>No automated systems - When you need help the lead developer answers your call.</p>
        </div>
        <div className='flex items-center flex-col text-center space-y-4 mb-12'>
          <NumberIcon number={3} />
          <h2 className='text-xl font-bold'>No Limits On Design</h2>
          <p>We can edit the design to cater to your tastes. Everything is customizable!</p>
        </div>
      </section>
      <Button className='bg-blue-500 text-white dark:bg-blue-500 dark:text-white dark:border-2 dark:border-blue-900 dark:shadow-white/25 dark:shadow-lg block mx-auto rounded-sm '>Our Services</Button>
      <div className='flex flex-col justify-evenly space-y-10 my-10 lg:flex-row lg:mx-20 lg:justify-center'>
        <div className='space-y-10 my-10 mx-auto lg:mx-0 lg:pr-10'>
          <div className='flex items-start space-x-4'>
            <div className='flex items-center'>
              <Smartphone size={50} color='#43B7FF' className='w-[50px]' />
            </div>
            <div className='w-[1px] h-[50px] bg-[#43B7FF]'></div>
            <div className='w-[150px]'>
              <p className='text-xl font-bold'>Phone:</p>
              <p>(586) 888-9127</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='flex items-center'>
              <Send size={50} color="#43B7FF" className='w-[50px]' />
            </div>
            <div className='w-[1px] h-[50px] bg-[#43B7FF]'></div>
            <div className='w-[150px]'>
              <p className='text-xl font-bold'>Email:</p>
              <p>smithms91@gmail.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}

export default AboutPage