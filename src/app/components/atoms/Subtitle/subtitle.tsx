interface SubtitleProps {
  children: React.ReactNode,
  classes?: string,
  size?: string,
}

export default function Subtitle({children, classes, size = 'text-4xl'}: SubtitleProps) {
  return (
    <div className='flex flex-col'>
      <div className={`text-green-subtitle ${size} font-regular font-satoshi ${classes}`}>
        {children}
      </div>
    </div>
  );
}