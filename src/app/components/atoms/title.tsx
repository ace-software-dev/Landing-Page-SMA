interface TitleProps {
    children: React.ReactNode,
    classes?: string,
    size?: string,
  }
  
  export default function Title({children, classes, size}: TitleProps) {
    if (size === undefined){
      size = "text-xl md:text-3xl"
    }
    return (
      <div className='flex flex-col justify-center items-center'>
        <div className={`
          text-center font-bold text-green-800 font-rufina
          ${size} ${classes}
        `}>
          {children}
        </div>
      </div>
    )
  }
  