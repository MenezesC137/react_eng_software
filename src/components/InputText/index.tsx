"use client"
import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi"

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: (props: IconBaseProps) => JSX.Element
  label?: string
  type?: string
}

export default function InputText({
  Icon,
  label,
  type,
  ...props
}: InputTextProps) {

  const [showPassword, setShowPassword] = useState(false)
  const Eye = showPassword ? FiEye : FiEyeOff

  return (
    <div className={`flex w-full items-center h-11 rounded-lg gap-2 border-gray-200 py-1 focus:border-blue-700 border px-2`}> 
      {Icon && type !== "password" && (
        <Icon
          size={20}
          color={ "gray"}
          className="ml-3"
        />
      )}
      {type === "password" && (
        <FiLock
          size={20}
          color={"gray"}
          className="ml-3"
        />
      )}
      <input 
        className="w-full border-none !outline-none placeholder:text-gray-600/40 focus:ring-0" 
        type={showPassword ? "text" : type}
        placeholder={label} {...props} 
        />
      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <Eye size={20} color="gray" className="m-1" />
        </button>
      )}
    </div>
  )
}
