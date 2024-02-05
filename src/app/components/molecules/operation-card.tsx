import { StaticImageData } from "next/image";
import ImageAtom from "../atoms/ImageOperations/image-operations";
import TextAtom from "../atoms/TextOperations/text-operations";

interface OperationCardProps {
  src: string | StaticImageData;
  alt: string;
  text: string;
}

export default function OperationCard({ src, alt, text }: OperationCardProps) {
  return (
    <div className="flex-1 hover:basis-1/4 transition-all duration-500 ease-in-out">
      <div className="relative w-full">
        <ImageAtom src={src} alt={alt} />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <TextAtom text={text} />
      </div>
    </div>
  );
}