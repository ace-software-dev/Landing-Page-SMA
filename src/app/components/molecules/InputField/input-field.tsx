import { ChangeEvent } from 'react'

interface InputFieldProps {
  type: 'text' | 'number' | 'email' | 'password'
  label?: string
  value: string | number
  name: string
  placeholder?: string
  error?: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="font-bold text-green-subtitle font-satoshi">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={name}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className="w-full rounded-lg border-0 p-3 text-almost-black
            placeholder:text-placeholder
            focus:ring-1 focus:ring-green-subtitle focus-visible:outline-none
            disabled:bg-slate-50 disabled:text-slate-300 disabled:ring-1 disabled:ring-slate-200"
        />
      </div>
    </div>
  )
}
