import { AuthContext } from '@/contexts/authContext'
import React, { useContext, useState } from 'react'
import InputText from '../InputText'
import { parseCookies } from 'nookies'
import api_client from '@/config/api_client'

export default function ModalPost({show, setShow} : {show: boolean, setShow: Function}) {

  const {currentUser} = useContext(AuthContext)
  const [post , setPost] = useState({
    title: "",
    description: "",
    user_id: currentUser.id,
  })

  const { token } = parseCookies()

  async function createPost() {
    await api_client.post("/posts", {
      "title": post.title,
      "content": post.description,
      "user_id": post.user_id,
    },{
      headers: {
        "Authorization": token
      }
    }
    ).finally(() => setShow(false))
  }

  return show && (
    <div className='z-50 flex flex-col absolute h-screen bottom-0 w-screen bg-white p-4 gap-4 pt-32'>
      <header className='border-b flex flex-row h-fit justify-between w-full py-4'>
        <button className='text-xs' onClick={() => setShow(false)}>cancelar</button>
        <p>Novo Post</p>
        <p className='text-white'>cancelar</p>
      </header>
      <InputText placeholder='Título' onChange={e => setPost({...post, title: e.target.value})} />
      <section>
        <textarea className='w-full h-96 outline-none border rounded-xl p-2' placeholder='Digite aqui seu post' onChange={e => setPost({...post, description: e.target.value})} />
      </section>
      <button className="bg-[#262261] text-white rounded-md px-4 py-2 w-full" onClick={createPost}>Postar</button>  
    </div>
  )
}