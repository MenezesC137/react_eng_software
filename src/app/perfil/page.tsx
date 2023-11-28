"use client"
import React, { useState } from 'react'
import TabNavigation from '@/components/tabNavigate'
import Image from 'next/image'
import user from '@/assets/user.png'
import Post from '@/components/post'
import ModalEdit from '@/components/ModalEdit'

export default function PerfilPage() {

  const [tabs, setTabs] = useState<"post" | "likes" | "answer">("post")
  const [show, setShow] = useState(false)

  return (
    <>
      <ModalEdit show={show} setShow={() => setShow(false)} />
      <main className='flex w-screen flex-col h-screen'>
        <section className='p-4 flex flex-col justify-between w-full gap-4'>
          <Image src={user} alt='user' width={60} height={60} className='h-16 w-16' />
          <aside>
            <h1 className='text-2xl font-bold'>
              Eduardo Menezes
            </h1>
            <p>
              menezes.cadu
            </p>
          </aside>
        </section>
        <section className='flex flex-row w-full p-4 gap-2'>
          <button onClick={() => setShow(true)} className='flex w-full justify-center py-1 rounded-xl border'>
            Editar perfil
          </button>
          <button className='flex w-full justify-center py-1 rounded-xl border'>
            Compartilhar perfil
          </button>
        </section>
        <section className='flex flex-row w-full border-b '>
          <button className={`w-full py-2 text-center font-bold mx-2 ${tabs === 'post' && 'border-b-2'}`} onClick={() => setTabs('post')}>Posts</button>
          <button className={`w-full py-2 text-center font-bold mx-2 ${tabs === 'likes' && 'border-b-2'}`} onClick={() => setTabs('likes')}>Respostas</button>
          <button className={`w-full py-2 text-center font-bold mx-2 ${tabs === 'answer' && 'border-b-2'}`} onClick={() => setTabs('answer')}>Curtidas</button>
        </section>
        <div className='flex w-full flex-col border-t overflow-auto h-full pb-[80px]'>
          <Post />
        </div>
        <TabNavigation />
      </main>
    </>

  )
}
