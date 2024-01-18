import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  classes?: string,
  type?: 'submit' | 'button' | 'reset',
  disabled?: boolean,
  active?: boolean,
  action: React.Dispatch<React.SetStateAction<number>>
  index: number
}

export default function RectangleButton({ children, classes, type = 'button', disabled = false, active =true, action, index}: ButtonProps) {


function isActive() {
 if(active) {
   return 'bg-green-primary text-almost-white'
 } else {
   return 'bg-transparent text-green-primary'
 }
}
  return (
    <button type={type} className={`
        py-3 ${isActive()} rounded-lg border-2 border-green-primary font-satoshi font-medium
        justify-center items-center inline-flex cursor-pointer hover:opacity-80 ${classes} 
        disabled:opacity-50 disabled:cursor-not-allowed max-h-14 max-w-40 whitespace-nowrap overflow-hidden ${disabled ? 'disabled' : ''}
      `}
      disabled={disabled} onClick={ () => action(index)}>
      {children}
    </button>
  )
}
