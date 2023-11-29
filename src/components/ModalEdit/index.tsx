import React, { useState } from 'react'
import InputText from '../InputText'
import api_client from '@/config/api_client';
import { parseCookies } from 'nookies';

export default function ModalPost({show, setShow} : {show: boolean, setShow: Function}) {

  const [user, setUser] = useState({
    name: "",
    cpf: "",
    phone: "",
  })

  const { token } = parseCookies()

  function formatarPhone(phone: string) {
    phone = phone.replace(/\D/g, '');
    
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  function formatarCPF(cpf: string) {
    cpf = cpf.replace(/\D/g, '');
    
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  async function updateUser() {
    api_client.put("/auth", {
      "name": user.name,
      "cpf": user.cpf,
      "phone": user.phone,
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
        <p>Editar</p>
        <p className='text-white'>cancelar</p>
      </header>
      <section className='flex flex-col gap-4'>
        <InputText placeholder='Name' onChange={e => setUser({...user, name: e.target.value})} />
        <InputText placeholder='Phone' value={formatarPhone(user.phone)} onChange={e => setUser({...user, phone: e.target.value})} />
        <InputText placeholder='CPF' value={formatarCPF(user.cpf)} onChange={e => setUser({...user, cpf: e.target.value})} />
      </section>
      <button className="bg-[#262261] text-white rounded-md px-4 py-2 w-full" onClick={updateUser}>Editar</button>  
    </div>
  )
}