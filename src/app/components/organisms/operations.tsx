import OperationCard from '../molecules/operation-card';
import ImageEvents from '../../../../public/images/events.png'
import ImageSpa from '../../../../public/images/spa.png'
import ImageFire from '../../../../public/images/fire.png'
import ImageRestaurant from '../../../../public/images/restaurant.png'
import Title from '../atoms/Title/title';

export default function Operations() {
  const imagesData = [
    { src: ImageEvents, alt: 'Eventos & Bodas', text: 'Eventos & Bodas' },
    { src: ImageSpa, alt: 'Spa & Temazcal', text: 'Spa & Temazcal' },
    { src: ImageFire, alt: 'Retiros', text: 'Retiros' },
    { src: ImageRestaurant, alt: 'Restaurante', text: 'Restaurante' },
  ];
  return (
    <section className='w-full sm:max-w-md md:max-w-screen-2xl'>
      <Title>Exclusividad de giros</Title>
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
    </section>
  )
}
