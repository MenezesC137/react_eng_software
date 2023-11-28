import React from 'react'
import TabNavigation from '@/components/tabNavigate'
import Post from '@/components/post'
import { LiaCatSolid } from "react-icons/lia";

export default function FeedPage() {
  return (
    <main className='flex flex-col w-screen h-screen items-center'>
      <header className='flex flex-row items-center justify-center gap-1 rounded-md border w-fit m-4 p-2 shadow-xl'>
        <LiaCatSolid size={24} />
        <p>Techon!</p>
      </header>
      <div className='flex w-full flex-col border-t overflow-auto h-full pb-[80px]'>
        <Post />
      </div>
      <TabNavigation />
    </main>
  )
}
