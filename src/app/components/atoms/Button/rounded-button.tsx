import React from 'react'

interface RoundedButtonProps {
  children: React.ReactNode,
  classes?: string,
  type?: 'submit' | 'button' | 'reset',
  disabled?: boolean,
  action?: () => void
}

export default function RoundedButton({ children, classes, type = 'button', disabled = false, action }: RoundedButtonProps) {
  return (
    <button onClick={action} type={type} className={`
        px-8 py-4 bg-green-primary rounded-full
        justify-center items-center inline-flex cursor-pointer hover:opacity-90
        text-lg font-semibold text-white ${classes} disabled:opacity-50 disabled:cursor-not-allowed ${disabled ? 'disabled' : ''}
      `}
      disabled={disabled}>
      {children}
    </button>
  )
}
