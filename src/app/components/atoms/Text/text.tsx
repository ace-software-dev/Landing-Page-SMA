interface TextProps {
    children: React.ReactNode,
    classes?: string,
    size?: string,
  }
  
  export default function Text({children, classes, size = 'text-base sm:text-lg md:text-xl'}: TextProps) {
    return (
      <div className='flex flex-col w-full'>
        <div className={`text-general ${size} text-center font-normal font-satoshi ${classes}`}>
          {children}
        </div>
      </div>
    );
  }
  