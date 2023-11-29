"use client"
import React, {  use, useContext, useEffect, useState } from "react"

//next
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"

//components
import InputText from "@/components/InputText"

//styles
import { AiOutlineMail } from "react-icons/ai";
import { LiaCatSolid } from "react-icons/lia"
import { AuthContext } from "@/contexts/authContext"

export default function AuthPage() {
  const { login, register } = useContext(AuthContext)
  const { currentUser } = useContext(AuthContext)
  const { push } = useRouter()
  const { authMode } = useParams()
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  })

  useEffect(() => {
    if (currentUser?.id) {
      push("/feed")
    }
  }, [currentUser])

  useEffect(() => {
    if (authMode !== "entrar" && authMode !== "cadastrar") {
      push("/auth/entrar")
    }
  }, [authMode])

  const handleLogin = async () => {
    if (authMode === "entrar") {
     login(user.email, user.password)
    } else {
      register(user.email, user.password, user.password_confirmation)
    }
  }

  return (
  <main className="flex flex-col h-full w-full justify-center p-10 gap-10">
    <div className="flex items-center justify-center">
      <header className='flex flex-row items-center justify-center gap-1 rounded-md border w-fit m-4 p-2 shadow-xl'>
        <LiaCatSolid size={24} />
        <p>Techon!</p>
      </header>
    </div>
    <section className=" flex flex-col items-center gap-2 w-full ">
      <h1 className="font-bold text-4xl">{authMode === "entrar" ? "Entrar" : "Cadastrar-se"}</h1>
      <p className="text-black/60">Bem-vindo ao projeto para eng. de software</p>
    </section>
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 w-full ">
        <InputText Icon={AiOutlineMail} placeholder="Email" onChange={e => setUser({...user, email: e.target.value})} />
        <InputText type="password" placeholder="Senha" onChange={e => setUser({...user, password: e.target.value})} />
        {authMode === "cadastrar" && (
          <InputText type="password" placeholder="Confirmação de senha" onChange={e => setUser({...user, password_confirmation: e.target.value})} />
        )}
      </div>
      <button onClick={handleLogin} className="bg-[#262261] text-white rounded-md px-4 py-2 w-full">{authMode === "entrar" ? "Entrar" : "Cadastrar-se"}</button>  
    </section>
    <section className="flex items-center flex-col justify-center">
      <p className="text-black/60">
        {authMode === "entrar" ? "Não tem uma conta?" : "Já tem uma conta?"}
      </p>
      <Link className="text-[#262261] font-bold" href={authMode === "entrar" ? "/auth/cadastrar" : "/auth/entrar"}>
        {authMode === "entrar" ? "Cadastrar-se" : "Entrar"}
      </Link>
    </section>
  </main>
)}
