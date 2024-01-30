// components/PrivacyNotice.tsx
import React from 'react';

const PrivacyNotice: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4 mt-6">Aviso de Privacidad</h2>

      <p className="mb-4">
        <strong>Fecha de entrada en vigor:</strong> 30/01/2024
      </p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">Recopilación y Uso de Información Personal</h3>

      <p className="mb-4">
        Por medio de esta landing page, recopilamos la siguiente información personal con el propósito exclusivo de
        contactarte en relación con tu interés en nuestro proyecto inmobiliario:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li>Nombre</li>
        <li>Correo electrónico</li>
        <li>Número de teléfono</li>
        <li>Ciudad de residencia</li>
      </ul>

      <p className="mb-4">
        Esta información será utilizada únicamente para responder a tu solicitud y proporcionarte información adicional
        sobre nuestro proyecto inmobiliario.
      </p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">Consentimiento</h3>

      <p className="mb-4">
        Al proporcionar tus datos personales a través de esta landing page, aceptas explícitamente los términos de este
        aviso de privacidad.
      </p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">Destinatario de la Información</h3>

      <p className="mb-4">
        La información recopilada será enviada al correo electrónico: glampingsma@gmail.com. No compartiremos tu
        información personal con terceros sin tu consentimiento explícito.
      </p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">Uso de Cookies</h3>

      <p className="mb-4">Queremos informarte que no utilizamos cookies ni otras tecnologías de seguimiento en esta landing page.</p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">Enlaces a Sitios Externos</h3>

      <p className="mb-4">
        Los enlaces a sitios externos presentes en esta página son ajenos a nosotros. No nos hacemos responsables de
        las prácticas de privacidad o el contenido de estos sitios.
      </p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">Derechos del Titular de los Datos</h3>

      <p className="mb-4">
        Tienes el derecho de acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para
        ejercer estos derechos o para cualquier pregunta relacionada con la privacidad, por favor, ponte en contacto
        con nosotros a través de glampingsma@gmail.com.
      </p>

      <h3 className="text-2xl font-semibold mb-2 mt-4">Cambios en la Política de Privacidad</h3>

      <p className="mb-4">
        Nos reservamos el derecho de realizar cambios en este aviso de privacidad. Cualquier modificación se reflejará
        en esta página y será efectiva a partir de la fecha de actualización.
      </p>

      <p className="mb-4 mt-4">
        Para preguntas adicionales o para ejercer tus derechos de privacidad, contáctanos a través de
        glampingsma@gmail.com.
      </p>
    </>
  );
};

export default PrivacyNotice;
