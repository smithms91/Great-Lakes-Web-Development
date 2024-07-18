import Ecommerce from '@/components/ecommerce'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ServicesPage = (props: Props) => {
  return (
    <main className=''>
      <PageHeader title="Our Services" />
      <div className='md:flex md:px-10 md:my-10 xl:px-[400px] xl:my-40'>
        <Image className="mx-auto my-10 sm:w-[450px] md:w-[300px] md:mr-10 md:self-start xl:basis-8/12" src='/code-svg.svg' alt='services' width={300} height={300} />
        <div className='px-10 space-y-8 my-10 md:px-0 xl:basis-10/12'>
          <h1 className='text-4xl font-bold'>Web Design & Development Done Differently</h1>
          <p className='xl:text-lg'>What makes us unique in the development world is that we don&apos;t use WordPress, frameworks, or page builders. We meticulously write the code line by line. This gives us much more control over the design, and the website performs lightning fast because there&apos;s no bloated or messy code that slows it down.</p>
          <p className='xl:text-lg'>Websites built by hand will out-perform most WordPress sites and drag and drop page builders which could cost thousands of dollars. When it comes to the web, the faster and more organized websites win.</p>
        </div>
      </div>
      <div className='h-[100px] relative border-l-4 border-b-4 border-dashed border-black dark:border-white after:dark:border-white -mt-20 mb-[250px] hidden xl:block xl:mx-[600px] after:absolute after:content-[""] after:h-[100px] after:w-[50px] after:-right-[0px] after:-bottom-[100px] after:border-r-4 after:border-dashed after:border-black'>
        <Image className="absolute -right-5 top-[200px] rotate-[160deg]" src='/plane.svg' alt='services' width={50} height={50} />
      </div>
      <div className='md:flex md:flex-row-reverse md:px-10 md:my-10 md:mt-20 xl:px-[400px] xl:my-40'>
        <Image className="mx-auto my-10 sm:w-[450px] md:w-[300px] md:self-start md:ml-10 xl:basis-8/12 xl:mt-0" src='/code2.svg' alt='services' width={300} height={300} />
        <div className='px-10 space-y-8 md:px-0 xl:basis-10/12'>
          <h1 className='text-4xl font-bold'>Search Engine Optimization for 2025</h1>
          <p className='xl:text-lg'>If someone tells you they can get you to the front page of Google in 3 months - RUN! Unless your website was featured by The New York Times it could take years to rank in the top of the search results.</p>
          <p className='xl:text-lg'>We offer a number of the latest search engine optimization techniques for 2021:</p>
          <ul className='xl:text-lg'>
            <li>Keyword-Centered Content & Blogs</li>
            <li>Mobile-First-Optimized for the Best Experience</li>
            <li>Clean & Organized Code Structure For Web Crawlers</li>
            <li>Fully Responsive For Mobile, Tablet, & Desktop</li>
          </ul>
        </div>
      </div>
      <div className='h-[100px] relative border-r-4 border-b-4 border-dashed border-black dark:border-white mb-[250px] hidden xl:block xl:mx-[600px] after:absolute after:content-[""] after:h-[100px] after:w-[50px] after:-left-[0px] after:-bottom-[100px] after:border-l-4 after:border-dashed after:border-black after:dark:border-white'>
        <Image className="absolute -left-5 top-[200px] rotate-[210deg] scale-x-[-1]" src='/plane.svg' alt='services' width={50} height={50} />
      </div>
      <div className='md:flex md:px-10 md:my-10 md:mt-20 xl:px-[400px] xl:my-40'>
        <Image className="mx-auto my-10 sm:w-[450px] md:w-[300px] md:self-start md:mr-10 xl:basis-8/12 xl:mt-0" src='/code3.svg' alt='services' width={300} height={300} />
        <div className='px-10 space-y-8 md:px-0 xl:basis-10/12'>
          <h1 className='text-4xl font-bold'>Logos, Graphic Design, &amp; Branding</h1>
          <p className='xl:text-lg'>We also offer logo and graphic design services via our own in-house graphic designer. If you have an existing logo that needs a touch up or need a completely new one we can help build your business&apos;s brand.</p>
          <ul className='xl:text-lg'>
            <li>
              <h5 className='font-bold'>Logos Starting at $350</h5>
              <p>Rates may increase based on complexity, number of hours, and number of revisions</p>
            </li>
            <li>
              <h5 className='font-bold'>Social Media Graphics</h5>
              <p>Make a post that stands out with its own custom graphics. Give us a call for plans and rates.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-10 my-10 bg-[#F9FDFF] py-10 dark:bg-black xl:px-[400px] xl:my-40 xl:flex xl:flex-row xl:py-40'>
        <div className='space-y-8 xl:basis-1/2 xl:mr-20'>
          <h1 className='text-4xl font-bold'>Lifetime Updates For Your Website</h1>
          <p className='xl:text-lg'>Google changes its search alogrithm standards every so often, changing what is important to rank. And web accessibility guidelines for users with screen readers get updated as well. So we also include lifetime updates to your website to make sure it never goes out of date and is always changing with the times.</p>
          <Button>Read More</Button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-10 my-10 space-y-10 sm:space-y-0 sm:mt-20 dark:text-black xl:mt-0'>
          <div className='bg-white p-8 space-y-8 shadow-lg shadow-[#43b7ff] border-t-4 border-[#43b7ff] dark:bg-black dark:border dark:text-white dark:shadow-xl dark:shadow-[#43b7ff] sm:mx-auto'>
            <Image src='/code2.svg' alt='services' width={80} height={80} />
            <h5 className='text-xl font-bold dark:text-[#43b7ff]'>Design Updates</h5>
            <p>If you ever want a new design, we will rebuild your website at no extra cost.</p>
          </div>
          <div className='bg-white p-8 space-y-8 shadow-lg shadow-[#43b7ff] border-t-4 border-[#43b7ff] dark:bg-black dark:border dark:text-white dark:shadow-xl dark:shadow-[#43b7ff] sm:mx-auto'>
            <Image src='/code2.svg' alt='services' width={80} height={80} />
            <h5 className='text-xl font-bold dark:text-[#43b7ff]'>Website Accessibility</h5>
            <p>Staying on top of the latest guidelines for web accessibility compliance.</p>
          </div>
          <div className='bg-white p-8 space-y-8 shadow-lg shadow-[#43b7ff] border-t-4 border-[#43b7ff] dark:bg-black dark:border dark:text-white dark:shadow-xl dark:shadow-[#43b7ff] sm:mx-auto'>
            <Image src='/code2.svg' alt='services' width={80} height={80} />
            <h5 className='text-xl font-bold dark:text-[#43b7ff]'>Search Engine Updates</h5>
            <p>Your website will stay up to date with Google&apos;s search guidelines for ranking.</p>
          </div>
          <div className='bg-white p-8 space-y-8 shadow-lg shadow-[#43b7ff] border-t-4 border-[#43b7ff] dark:bg-black dark:border dark:text-white dark:shadow-xl dark:shadow-[#43b7ff] sm:mx-auto'>
            <Image src='/code2.svg' alt='services' width={80} height={80} />
            <h5 className='text-xl font-bold dark:text-[#43b7ff]'>Google Business Profile</h5>
            <p>We also help optimize and manage your Google, Bing, & Yahoo Business Profile.</p>
          </div>
        </div>
      </div>
      <Ecommerce />
      <Footer />
    </main >
  )
}

export default ServicesPage