import Image from "next/image";

interface ImageCardProps {
    children?: React.ReactNode,
    classes?: string,
    src: string,
}

export default function ImageCard({children, classes, src = " "}: ImageCardProps) {
    return (
    <div className='flex flex-col'>
        <Image
        className={`${classes} rounded-md`}
        src={src}
        width={1920}
        height={1080}
        alt="Picture of the author"
        />
        {children}
    </div>

);
}

