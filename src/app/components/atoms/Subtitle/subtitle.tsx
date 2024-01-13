interface SubtitleProps {
  children: React.ReactNode,
  classes?: string,
  size?: string,
}

export default function Subtitle({children, classes, size = 'text-4xl'}: SubtitleProps) {
  return (
    <div className='flex flex-col'>
      <div className={`text-green-subtitle ${size} text-center text-base md:text-xl font-normal font-satoshi ${classes}`}>
        {children}
      </div>
    </div>
  );
}
