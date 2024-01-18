import React from 'react';
import ContactForm from '../molecules/ContactForm/contact-form';
import ContactInformation from '../molecules/ContactInformation/contact-information';

export default function Contact() {
    return (
    <section id="contact" className='w-full bg-header flex flex-col p-6 gap-6'>
      <ContactInformation />
      <ContactForm />
    </section>
  )
}
