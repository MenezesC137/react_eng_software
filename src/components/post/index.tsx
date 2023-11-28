"use client"
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa'
import user from '@/assets/user.png'
import Image from 'next/image'

export default function Post() {
  const [like, setLike] = useState(false)

  return (
    <section className='flex flex-col w-full h-fit border-b'>
      <aside className='flex flex-row gap-2 p-4'>
        <Image src={user} alt='user' width={60} height={60} className='h-10 w-10' />
        <div className='flex w-full flex-col'>
          <div className='flex flex-row w-full justify-between items-center'>
            <p className='font-bold'>
            menezes.cadu
            </p>
            <BsThreeDots />
          </div>
          <p className='text-sm'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <div className='pt-2 flex flex-row gap-2'>
            <button onClick={() => setLike(!like)}>
              {like ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
            <button>
              <FaRegComment />
            </button>
          </div>
        </div>
      </aside>
    </section>
  )
}
