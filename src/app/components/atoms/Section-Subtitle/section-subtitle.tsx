interface SubtitleProps {
    children: React.ReactNode,
    classes?: string,
    size?: string,
  }
  
  export default function SectionSubtitle({children, classes, size = 'text-base md:text-xl'}: SubtitleProps) {
    return (
      <div className='flex flex-col w-full'>
        <div className={`text-subtitle ${size} text-center font-normal font-satoshi ${classes}`}>
          {children}
        </div>
      </div>
    );
  }
  