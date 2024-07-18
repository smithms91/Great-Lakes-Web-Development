import React from 'react'
import Nav from './nav'

type Props = {
  title: string
}

const PageHeader = ({ title }: Props) => {
  return (
    <section className='bg-blue-950 pb-10'>
      <Nav />
      <h1 className='text-center text-white font-extrabold text-3xl mt-10'>{title}</h1>
    </section>
  )
}

export default PageHeader