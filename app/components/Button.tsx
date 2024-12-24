import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    className?: string
}

function Button({children, className}: ButtonProps) {
  return (
    <button className={`flex rounded-full w-fit py-4 px-8 border-2 border-white ${className}`}>
        {children}
    </button>
  )
}

export default Button