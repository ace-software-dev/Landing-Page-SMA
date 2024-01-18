import Image from "next/image";

interface ImageCardProps {
  children?: React.ReactNode,
  classes?: string,
  src: string,
}

export default function ImageCard({ children, classes, src = " " }: ImageCardProps) {
  return (
    <div className='flex flex-col'>
      <Image
        className={`${classes} rounded-md w-full h-auto`}
        src={src}
        width={1152}
        height={648}
        alt="Picture of the author"
        loading="eager"
      />
      {children}
    </div>

  );
}

