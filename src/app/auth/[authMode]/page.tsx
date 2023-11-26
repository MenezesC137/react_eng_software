"use client"
import React, { useEffect } from "react"

//next
import { useParams } from "next/navigation"
import router from "next/router"
import Link from "next/link"

//components
import InputText from "@/components/InputText"

//styles
import { AiOutlineMail } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function AuthPage() {
  const { authMode } = useParams()

  useEffect(() => {
    if (authMode !== "entrar" && authMode !== "cadastrar") {
      router.push("/auth/entrar")
    }
  }, [authMode])

  return (
  <main className="flex flex-col h-full w-full justify-center p-10 gap-10">
    <section className=" flex flex-col items-center gap-2 w-full ">
      <h1 className="font-bold text-4xl">{authMode === "entrar" ? "Entrar" : "Cadastrar-se"}</h1>
      <p className="text-black/60">Bem-vindo ao projeto para eng. de software</p>
    </section>
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 w-full ">
        {authMode === "cadastrar" && (
          <>
            <InputText Icon={FaRegUser} placeholder="Nome" />
            <InputText Icon={IoDocumentOutline} placeholder="CPF" />
          </>
        )}
        <InputText Icon={AiOutlineMail} placeholder="Email" />
        <InputText type="password" placeholder="Senha" />
        {authMode === "cadastrar" && (
          <InputText type="password" placeholder="Confirmação de senha" />
        )}
      </div>
      <button className="bg-[#262261] text-white rounded-md px-4 py-2 w-full">{authMode === "entrar" ? "Entrar" : "Cadastrar-se"}</button>  
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
