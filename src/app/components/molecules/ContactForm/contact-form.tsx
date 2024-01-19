'use client'

import { useState, ChangeEvent } from "react"
import InputField from "../InputField/input-field"
import RoundedButton from "../../atoms/Button/rounded-button";

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => { setPhone(e.target.value) }
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }

  return (
    <div className='flex flex-1 gap-3 py-4 bg-header'>
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <InputField value={name} type='text' name='name' label='Nombre Completo *' placeholder="Juan Estrada" required={true} onChange={handleNameChange} />
        <InputField value={phone} type='text' name='phone' label='Teléfono *' placeholder="+52 442 716 9906" required={true} onChange={handlePhoneChange} />
        <InputField value={email} type='text' name='email' label='Email *' placeholder="juan@gmail.com" required={true} onChange={handleEmailChange} />
        <InputField value={city} type='text' name='city' label='Ciudad' placeholder="Querétaro" onChange={handleCityChange} />
        <div className="flex items-center gap-3">
          <input
            id="aviso-privacidad"
            name="aviso-privacidad"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-green-primary focus:ring-green-primary"
          />
          <label htmlFor="aviso-privacidad" className="text-almost-black">Acepto Aviso de Privacidad *</label>
        </div>
        <RoundedButton classes="w-fit self-center">Estoy interesado</RoundedButton>
      </div>
    </div>
  )
}