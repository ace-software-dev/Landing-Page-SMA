import Image, { StaticImageData } from "next/image"
import SectionSubtitle from "../atoms/Section-Subtitle/section-subtitle";

interface CardProps {
  src: StaticImageData,
  alt: string,
  text: string,
}

export default function CardOportunity({ src, alt, text }: CardProps) {
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="flex flex-col h-full rounded-2xl justify-start items-center gap-6 w-64 md:w-72 xl:w-80 ">
        <Image className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" src={src} width={80} height={80} alt={alt} />
        <div className="flex flex-col gap-3">
          <SectionSubtitle classes="text-justify">{text}</SectionSubtitle>
        </div>
      </div>
    </div>
  )
}
