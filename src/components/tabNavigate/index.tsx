"use client"
import React from "react"

//next
import Link from "next/link"
import { usePathname } from "next/navigation"

//assets
import { FiEdit } from "react-icons/fi"
import { FaRegUser, FaUser } from "react-icons/fa"
import { PiHouseLine, PiHouseLineFill } from "react-icons/pi";

export default function TabNavigation() {
  const pathname = usePathname()  

  const navigateOptions = [
    {
      icon: <PiHouseLine size={28} />,
      iconSelected: <PiHouseLineFill size={28} color="#262261" />,
      path: "/feed",
    },
    {
      icon: <FiEdit size={24}/>,
      path: "/restaurantes",
    },
    {
      icon: <FaRegUser size={24}/>,
      iconSelected: <FaUser size={24} color="#262261" />,
      path: "/perfil",
    },
  ]

  return (
    <nav className="fixed bottom-0 z-[51] flex w-full justify-between rounded-t-xl bg-background-main px-4 pt-2 text-typography-light md:hidden">
      {navigateOptions.map((option, index) => (
        <Link
          href={option.path}
          key={index}
          className="flex h-14 w-14 flex-col items-center"
        >
          {pathname === option.path ? option.iconSelected : option.icon}
        </Link>
      ))}
    </nav>  
  )
}
