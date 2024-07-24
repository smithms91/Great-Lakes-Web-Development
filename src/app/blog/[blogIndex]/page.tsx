'use client'

import React from 'react'
import { blogPosts } from '@/lib/blog-posts'
import Image from 'next/image'
import PageHeader from '@/components/page-header'
import Footer from '@/components/footer'

type Props = {
  params: {
    blogIndex: number
  }
}

const SingleBlogPost = ({ params }: Props) => {
  // Find the blog post that matches the blogIndex ID
  const post = blogPosts[params.blogIndex - 1];

  return (
    <main>
      <PageHeader title="Blog" />
      <section className='p-10 flex flex-col items-center justify-center'>
        {post ? (
          <div className='flex flex-col items-center space-y-4'>
            <Image src={post.image} alt={post.title} width={300} height={300} />
            <h1 className='font-bold text-3xl'>{post.title}</h1>
            <div className='flex items-center border-b-2 pb-4 self-start w-full'>
              <Image src='/me.jpg' alt='Avatar' width={50} height={50} className='rounded-full w-[40px] h-[40px] mr-2' />
              <div className='text-xs'>
                <p>{post.author}</p>
                <p>{post.date}</p>
              </div>
            </div>
            {/* Assuming 'content' is a field in your blogPosts objects that contains HTML */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} className='space-y-4' />
          </div>
        ) : (
          <p>Post not found.</p>
        )}
      </section>
      <Footer />
    </main>
  )
}

export default SingleBlogPost