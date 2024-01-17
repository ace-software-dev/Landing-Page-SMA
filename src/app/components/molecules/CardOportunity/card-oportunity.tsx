import Image from "next/image"
import Text from "../../atoms/Text/text";

interface CardProps {
  src: string,
  alt: string,
  text: string,
}

export default function CardOportunity({ src, alt, text }: CardProps) {
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="flex flex-col h-full rounded-2xl justify-start items-center gap-6 w-64 md:w-72 xl:w-80 ">
        <Image className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" src={src} width={80} height={80} alt={alt} />
        <div className="flex flex-col gap-3">
          <Text classes="text-justify">{text}</Text>
        </div>
      </div>
    </div>
  )
}
