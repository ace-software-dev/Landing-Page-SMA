import Image, { StaticImageData } from 'next/image'

interface ImageOperationsProps {
  src: string | StaticImageData;
  alt: string;
}

export default function ImageOperations({src, alt}: ImageOperationsProps) {
  return (
    <Image 
        src={src}
        alt={alt}
        layout="fixed"
        className="w-full h-44 md:h-96 lg:96 object-cover"
    />
  )
}