"use client"
import React, { createContext, useState, ReactNode, useEffect } from "react"


interface AuthContextInterface {
  
}

export const AuthContext = createContext<AuthContextInterface>({
  login: () => Promise.resolve({ email: "", password: "" }),
  currentUser: { email: "", password: "" },
  logout: () => {},
  getCurrentUser: () => Promise.resolve({}),
  register: () => Promise.resolve(),
})

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [currentUser, setCurrentUser] = useState({})

  async function login(email: string, password: string) {
    console.log(email, password);
  }

  async function getCurrentUser() {
    console.log("get current user");
  }

  async function logout() {
    console.log("logout");
  }

  async function register(email: string, password: string) {
   console.log(email, password);
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
