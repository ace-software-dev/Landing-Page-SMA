interface SubtitleProps {
  children: React.ReactNode,
  classes?: string,
  size?: string,
}

export default function Subtitle({children, classes, size = 'text-4xl md:text-4xl'}: SubtitleProps) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className={`text-green-subtitle ${size} font-medium ${classes}`}>
        {children}
      </div>
    </div>
  );
}
