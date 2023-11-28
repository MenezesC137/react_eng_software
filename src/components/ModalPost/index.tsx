import React from 'react'

export default function ModalPost({show, setShow} : {show: boolean, setShow: Function}) {
  return show && (
    <div className='z-50 flex flex-col absolute h-screen bottom-0 w-screen bg-white p-4 gap-4'>
      <header className='border-b flex flex-row h-fit justify-between w-full py-4'>
        <button className='text-xs' onClick={() => setShow(false)}>cancelar</button>
        <p>Novo Post</p>
        <p className='text-white'>cancelar</p>
      </header>
      <section>
        <textarea className='w-full h-96 outline-none border rounded-xl p-2' placeholder='Digite aqui seu post' />
      </section>
      <button className="bg-[#262261] text-white rounded-md px-4 py-2 w-full">Postar</button>  
    </div>
  )
}