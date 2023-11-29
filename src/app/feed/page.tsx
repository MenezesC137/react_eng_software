"use client"
import React, { useEffect, useState } from 'react'
import TabNavigation from '@/components/tabNavigate'
import Post from '@/components/post'
import { LiaCatSolid } from "react-icons/lia";
import api_client from '@/config/api_client';

export default function FeedPage() {
  const [posts, setPosts] = useState([])  

  useEffect(() => {
    getPosts()
  }, [])
  
  async function getPosts() {
    await api_client.get('/posts').then(res => setPosts(res.data))
  }

  return (
    <main className='flex flex-col w-screen h-screen items-center'>
      <header className='flex flex-row items-center justify-center gap-1 rounded-md border w-fit m-4 p-2 shadow-xl'>
        <LiaCatSolid size={24} />
        <p>Techon!</p>
      </header>
      <div className='flex w-full flex-col border-t overflow-auto h-full pb-[80px]'>
        {posts.map((item, index) => <Post key={index} item={item} />)}
      </div>
      <TabNavigation />
    </main>
  )
}
