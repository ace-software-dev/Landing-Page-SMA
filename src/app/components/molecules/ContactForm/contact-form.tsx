'use client'

import { useState, ChangeEvent, useEffect } from "react"
import InputField from "../InputField/input-field"
import RoundedButton from "../../atoms/Button/rounded-button";
import Link from "next/link";
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Modal from "../../atoms/Modal/modal";
import PrivacyNotice from "./privacynotice";

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [counter, setCounter] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const investmentOptions = [
    { name: 'Proyecto Completo', code: 'completo' },
    { name: 'Glamping', code: 'glamping' },
    { name: 'Cabañas', code: 'cabin' },
  ];


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => { setPhone(e.target.value) }
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); setEmailError(''); }
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => { setCity(e.target.value) }


  function setFormData(data: any) {
    setName(data.nombre);
    setPhone(data.numero);
    setEmail(data.correo);
    setCity(data.ciudad);
    setInterest(data.interesado);

  }

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  useEffect(() => {
    setCounter(5);

    const timer = setTimeout(() => {
      setSubmissionStatus('');
    }, 5000);
    return () => clearTimeout(timer);

  }, [submissionStatus]);

  function validateEmail(email: string) {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  async function handleSubmit (e: any) {

    try {
      e.preventDefault();

      if (!validateEmail(email)) {
        setEmailError('Por favor, ingrese un correo electrónico válido.');
        return;
      }

      const formData = new FormData(e.target);
      const object = Object.fromEntries(formData);
      let selectedInterest = '';

      if (interest !== null && interest !== undefined) {
        if (Array.isArray(interest)) {
          if (interest !== null && interest !== undefined) {
            selectedInterest = (interest as any[]).map((item: any) => item.name).join(', ');
          }
        }
        object['Tipo de interesado'] = selectedInterest;
      }
      const json = JSON.stringify(object);
      

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });


      const result = await response.json();
      if (result.success) {
        setFormData({ nombre: '', correo: '', numero: '', ciudad: '', interesado: null});
        setSubmissionStatus("Su información ha sido enviada con éxito");
      } else {
        setSubmissionStatus("Ha ocurrido un error, ");

      }
    }
    catch (e) {
        setSubmissionStatus("Ha ocurrido un error de red, ");
    }
  }



  return (
    <div className="flex flex-1 flex-col justify-center items-center ">

    {submissionStatus === '' &&
    <form onSubmit={handleSubmit} className="w-full">
      <div className='flex flex-1 gap-3 py-4 bg-header'>
        <input type="hidden" name="apikey" value={process.env.NEXT_PUBLIC_FORM_API_KEY || ''} />
        <div className="flex flex-col gap-4 md:gap-6 flex-1 w-full">
          <InputField value={name} type='text' name='name' label='Nombre Completo *' placeholder="Juan Estrada" required={true} onChange={handleNameChange} />
          <InputField value={phone} type='text' name='phone' label='Teléfono *' placeholder="+52 442 716 9906" required={true} onChange={handlePhoneChange} />
          <InputField value={email} error={emailError} type='text' name='email' label='Email *' placeholder="juan@gmail.com" required={true} onChange={handleEmailChange} />
          <InputField value={city} type='text' name='city' label='Ciudad' placeholder="Querétaro" onChange={handleCityChange} />
          <div>
            <label htmlFor={name} className="font-bold text-green-subtitle font-satoshi">
              Tipo de interesado *
            </label>
            <MultiSelect value={interest} onChange={(e) => setInterest(e.value)} options={investmentOptions} optionLabel="name"
              placeholder="Seleccionar interés" maxSelectedLabels={3} className="mt-2 w-full font-satoshi placeholder:text-placeholder rounded-lg" />
          </div>
          <div className="flex items-center gap-3">
            <input
              id="aviso-privacidad"
              name="aviso-privacidad"
              required={true}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-green-primary focus:ring-green-primary"
            />
            <label htmlFor="aviso-privacidad" className="text-almost-black">Acepto <Link className="text-green-primary underline" href="/#contacto" onClick={openModal}>Aviso de Privacidad *</Link></label>
          </div>
          <RoundedButton type="submit"  classes="w-fit self-center">Estoy interesado</RoundedButton>
        </div>
      </div>
    </form>
    }
    {submissionStatus &&
      <div className="flex flex-col w-full justify-center items-center text-center">
        <label className=" text-green-text text-2xl font-medium"> {submissionStatus} </label>
        {/* add timeout counter */}
        <label  className="text-green-text text-2xl font-medium">
            {
              counter > 0  &&
              (submissionStatus == 'Ha ocurrido un error, '
                || submissionStatus == 'Ha ocurrido un error de red, '
              )&&
              `vuelve a intentar en ${counter} segundos...`}
        </label>
      </div>}
      {isModalOpen &&
      <Modal onClose={closeModal}>
        <PrivacyNotice />
      </Modal>
      }
    </div>

  )
}