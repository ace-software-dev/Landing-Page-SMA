import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

interface ContactInformationProps {
}

export default function ContactInformation({}: ContactInformationProps) {
  return (
    <div className="flex flex-col p-6 items-start rounded-2xl bg-contact-info bg-center bg-no-repeat xs:bg-cover gap-6">
      <div className="flex flex-col items-start gap-2">
        <div className="text-xl font-bold">Información de Contacto</div>
        <div className="">¡Hablemos de tu próxima inversión!</div>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faPhone} className='w-5 h-5 text-white text-lg' />
          <div>+52 1 442 716 9906</div>
        </div>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 text-white text-lg' />
          <div>miguel@saavedra.mx</div>
        </div>
      </div>
    </div>
  )
}
