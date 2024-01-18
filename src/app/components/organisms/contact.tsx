import React from 'react';
import ContactForm from '../molecules/ContactForm/contact-form';
import ContactInformation from '../molecules/ContactInformation/contact-information';

export default function Contact() {
    return (
    <section id="contact" className='w-full bg-header flex justify-center p-6 sm:p-10 md:p-14'>
      <div className="w-full flex flex-col gap-6 sm:gap-6 md:gap-8 sm:flex-row max-w-[68rem]">
        <ContactInformation />
        <ContactForm />
      </div>
    </section>
  )
}
