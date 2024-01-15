import OperationCard from '../molecules/operation-card';
import Title from '../molecules/section-title';
import ImageEvents from '../../../../public/images/events.png'
import ImageSpa from '../../../../public/images/spa.png'
import ImageFire from '../../../../public/images/fire.png'
import ImageRestaurant from '../../../../public/images/restaurant.png'

export default function Operations() {
  const imagesData = [
    { src: ImageEvents, alt: 'Eventos & Bodas', text: 'Eventos & Bodas' },
    { src: ImageSpa, alt: 'Spa & Temazcal', text: 'Spa & Temazcal' },
    { src: ImageFire, alt: 'Retiros', text: 'Retiros' },
    { src: ImageRestaurant, alt: 'Restaurante', text: 'Restaurante' },
  ];
  return (
    <div className='w-full sm:max-w-md md:max-w-7xl'>
      <Title title="Exclusividad de giros" subtitle=""/>
      <div className="flex flex-col md:flex-row py-5 md:py-9">
        {imagesData.map((image, index) => (
            <OperationCard
            key={index}
            src={image.src}
            alt={image.alt}
            text={image.text}
            />
        ))}
      </div>
    </div>
  )
}
