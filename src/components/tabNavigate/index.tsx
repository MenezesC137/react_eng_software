"use client"
import React, { useState } from "react"

//next
import Link from "next/link"
import { usePathname } from "next/navigation"

//assets
import { FiEdit } from "react-icons/fi"
import { FaRegUser, FaUser } from "react-icons/fa"
import { PiHouseLine, PiHouseLineFill } from "react-icons/pi";
import ModalPost from "../ModalPost"

export default function TabNavigation() {
  const pathname = usePathname()  
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <ModalPost show={showModal} setShow={setShowModal} />
      <nav className="fixed bottom-0 z-40 flex w-full justify-between rounded-t-xl bg-background-main px-4 pt-5 text-typography-light md:hidden bg-white border-t  shadow-xl">
        <Link
          href={"/feed"}
          className="flex h-14 w-14 flex-col items-center"
        >
          {pathname === "/feed" ? <PiHouseLineFill size={28} color="#262261" /> :  <PiHouseLine size={28} />}
        </Link>
        <button onClick={() => setShowModal(true)} className="flex h-14 w-14 flex-col items-center">
          <FiEdit size={24}/>
        </button>
        <Link
          href={"/perfil"}
          className="flex h-14 w-14 flex-col items-center"
        >
          {pathname === "/perfil" ? <FaUser size={28} color="#262261" /> :  <FaRegUser size={28} />}
        </Link>
      </nav> 
    </>

  )
}
