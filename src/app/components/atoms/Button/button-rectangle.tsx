import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  classes?: string,
  type?: 'submit' | 'button' | 'reset',
  disabled?: boolean,
  active?: boolean,
}

export default function RectangleButton({ children, classes, type = 'button', disabled = false, active =true}: ButtonProps) {

function isActive() {
 if(active) {
   return 'bg-green-primary text-almost-white'
 } else {
   return 'bg-transparent text-green-primary'
 }
}

//check fixed size
//check font family
  return (
    <button type={type} className={`
        px-6 py-3 ${isActive()} rounded-lg border-2 border-green-primary font-satoshi font-medium text-xl
        justify-center items-center inline-flex cursor-pointer hover:opacity-80 ${classes} 
        disabled:opacity-50 disabled:cursor-not-allowed ${disabled ? 'disabled' : ''}
      `}
      disabled={disabled}>
      {children}
    </button>
  )
}
