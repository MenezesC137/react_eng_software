"use client"
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa'
import user from '@/assets/user.png'
import Image from 'next/image'

export default function Post({item}: any) {  
  const [like, setLike] = useState(false)

  return !item ? null : (
    <section className='flex flex-col w-full h-fit border-b'>
      <aside className='flex flex-row gap-2 p-4'>
        <Image src={user} alt='user' width={60} height={60} className='h-10 w-10' />
        <div className='flex w-full flex-col'>
          <div className='flex flex-row w-full justify-between items-center'>
            <p className='font-bold'>
              {item?.user.name || item?.user.email}
            </p>
            <BsThreeDots />
          </div>
          <div className='flex flex-row w-96 line-clamp-6'>
            <p className='text-sm'>
              {item?.content}
            </p>
          </div>

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
