import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  classes?: string,
  type?: 'submit' | 'button' | 'reset',
  disabled?: boolean,
}

export default function Button({ children, classes, type = 'button', disabled = false }: ButtonProps) {
  return (
    <button type={type} className={`
        px-8 py-4 bg-green-primary rounded-full
        justify-center items-center inline-flex cursor-pointer hover:opacity-90
        text-lg font-semibold text-white ${classes} disabled:opacity-50 disabled:cursor-not-allowed ${disabled ? 'disabled' : ''}
      `}
      disabled={disabled}>
      {children}
    </button>
  )
}
