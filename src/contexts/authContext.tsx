"use client"
import api_client from "@/config/api_client"
import React, { createContext, useState, ReactNode, useEffect } from "react"
import nookies, { parseCookies, setCookie } from "nookies"
import { useRouter } from "next/navigation"

interface AuthContextInterface {
  login: (email: string, password: string) => Promise<void>
  currentUser: { }
  logout: () => Promise<void>
  getCurrentUser: () => Promise<void>
  register: (email: string, password: string, password_confirmation: string) => Promise<void>
  
}

export const AuthContext = createContext<AuthContextInterface>({
  login: async (email: string, password: string) => {},
  currentUser: { },
  logout: async () => {},
  getCurrentUser: async () => {},
  register: async (email: string, password: string, password_confirmation: string) => {},
})

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const { push } = useRouter()
  const { token } = parseCookies()  
  const [currentUser, setCurrentUser] = useState(
    {
      "id": 0,
      "email": "",
      "provider": "",
      "allow_password_change": false,
      "name": "",
      "nickname": "",
      "image": "",
      "uid": "",
      "created_at": "",
      "updated_at": ""
    }
  )

  async function login(email: string, password: string) {
    api_client.post("/auth/sign_in", {
      "email": email,
      "password": password,
    }
    ).then(res => {
      setCookie(null, "token", res.headers.authorization, {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      })
      setCurrentUser(res.data.data)
    })
  }

  async function getCurrentUser() {    
    api_client.get("/auth/validate_token", {
      headers: {
        "Authorization": token
      }
    }
    ).then(res => {
      setCurrentUser(res.data.data)
    })
  }

  async function logout() {
    api_client.delete("/auth/sign_out").then(res => {
      nookies.destroy(null, "token")
    }
  )}

  async function register(email: string, password: string, password_confirmation: string) {
    api_client.post("/auth", {
      "email": email,
      "password": password,
      "password_confirmation": password_confirmation,
    }
    ).then(res => {      
      setCookie(null, "token", res.headers.authorization, {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      })
      setCurrentUser(res.data.data)
      push("/perfil")
    })
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        login,
        currentUser,
        logout,
        getCurrentUser,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
