// src/stories/Modal.stories.tsx
import React from 'react';
import Modal from './modal';
import type { Meta, StoryObj,} from '@storybook/react';
import PrivacyNotice from '../../molecules/ContactForm/privacynotice';


const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

const text = `Aviso de Privacidad

Fecha de entrada en vigor: 30/01/2024

Recopilación y Uso de Información Personal

Por medio de esta landing page, recopilamos la siguiente información personal con el propósito exclusivo de contactarte en relación con tu interés en nuestro proyecto inmobiliario:

Nombre
Correo electrónico
Número de teléfono
Ciudad de residencia

Esta información será utilizada únicamente para responder a tu solicitud y proporcionarte información adicional sobre nuestro proyecto inmobiliario.

Consentimiento

Al proporcionar tus datos personales a través de esta landing page, aceptas explícitamente los términos de este aviso de privacidad.

Destinatario de la Información

La información recopilada será enviada al correo electrónico: glampingsma@gmail.com. No compartiremos tu información personal con terceros sin tu consentimiento explícito.

Uso de Cookies

Queremos informarte que no utilizamos cookies ni otras tecnologías de seguimiento en esta landing page.

Enlaces a Sitios Externos

Los enlaces a sitios externos presentes en esta página son ajenos a nosotros. No nos hacemos responsables de las prácticas de privacidad o el contenido de estos sitios.

Derechos del Titular de los Datos

Tienes el derecho de acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercer estos derechos o para cualquier pregunta relacionada con la privacidad, por favor, ponte en contacto con nosotros a través de glampingsma@gmail.com

Cambios en la Política de Privacidad

Nos reservamos el derecho de realizar cambios en este aviso de privacidad. Cualquier modificación se reflejará en esta página y será efectiva a partir de la fecha de actualización.

Para preguntas adicionales o para ejercer tus derechos de privacidad, contáctanos a través de glampingsma@gmail.com

`

export default meta;
export const Default: StoryObj = {
  args: {
    children: text
  },
};