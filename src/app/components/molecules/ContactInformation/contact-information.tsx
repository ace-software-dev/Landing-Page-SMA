import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

interface ContactInformationProps {
}

export default function ContactInformation({}: ContactInformationProps) {
  return (
    <div className="flex flex-1 flex-col p-6 md:p-8 items-start rounded-2xl bg-contact-info bg-center bg-no-repeat xs:bg-cover sm:bg-right-bottom gap-6 text-almost-white">
      <div className="flex flex-col items-start gap-2">
        <div className="text-xl font-bold md:text-2xl">Información de Contacto</div>
        <div className="md:text-xl">¡Hablemos de tu próxima inversión!</div>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faPhone} className='w-5 h-5 md:w-6 md:h-6 text-white text-lg' />
          <div className='md:text-xl'>+52 442 716 9906</div>
        </div>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 md:w-6 md:h-6 text-white text-lg' />
          <div className='md:text-xl'>miguel@saavedra.mx</div>
        </div>
      </div>
    </div>
  )
}
