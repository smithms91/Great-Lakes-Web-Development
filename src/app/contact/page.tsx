import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <main>
      <PageHeader title="Contact" />
      <section className='space-y-10 p-2 xs:p-4 sm:my-20 sm:flex sm:items-center sm:justify-center'>
        <div className='mr-10'>
          <Image src='/1.jpg' className="mt-10" alt='Contact Us' width={400} height={400} />
          <div className='border-l-2 border-blue-400 pl-2 text-xl mb-6'>
            <p className='font-bold'>Email:</p>
            <p>smithms91@gmail.com</p>
          </div>
          <div className='border-l-2 border-blue-400 pl-2 text-xl'>
            <p className='font-bold'>Phone:</p>
            <p>(586) 888-9127</p>
          </div>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </main>
  )
}

export default ContactPage