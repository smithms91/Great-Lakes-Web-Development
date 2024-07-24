import Footer from '@/components/footer'
import PageHeader from '@/components/page-header'
import { blogPosts } from '@/lib/blog-posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <main>
      <PageHeader title="Blog" />
      <section className='p-10'>
        {blogPosts.slice(0, 2).map((post, index) => (
          <div key={index} className='mb-20 space-y-4 flex flex-col'>
            <Image src={post.image} alt={post.title} width={300} height={300} />
            <h2 className='font-bold text-2xl'>{post.title}</h2>
            <div className='flex items-center border-b-2 pb-4'>
              <Image src='/me.jpg' alt='Avatar' width={50} height={50} className='rounded-full w-[40px] h-[40px] mr-2' />
              <div className='text-xs'>
                <p>{post.author}</p>
                <p>{post.date}</p>
              </div>
            </div>
            <p>{post.description}</p>
            <Link key={index} href={`/blog/${post.id}`} className='self-start rounded-sm text-white text-sm px-6 py-3 bg-blue-500'>Read More</Link>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  )
}

export default BlogPage