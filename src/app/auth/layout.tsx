"use client"
import React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <aside className="flex w-screen h-screen">
      {children}
    </aside>
  )
}
