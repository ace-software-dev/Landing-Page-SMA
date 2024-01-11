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

{/* <div className="w-36 h-12 px-4 py-3 bg-neutral-600 rounded-lg border border-neutral-600 justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-gray-200 text-xl font-medium font-['Satoshi']">Glamping</div>
</div> */}
<div className="w-36 h-12 px-4 py-3 rounded-lg border-2 border-neutral-600 justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-neutral-600 text-xl font-medium font-['Satoshi']">Cabaña</div>
</div>
  return (
    <button type={type} className={`
        px-6 py-3 ${isActive()} rounded-lg border-2 border-green-primary font-satoshi font-medium text-xl
        justify-center items-center inline-flex cursor-pointer hover:opacity-80 w-[9rem] ${classes} 
        disabled:opacity-50 disabled:cursor-not-allowed ${disabled ? 'disabled' : ''}
      `}
      disabled={disabled}>
      {children}
    </button>
  )
}
