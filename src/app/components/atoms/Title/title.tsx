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
    <div className='flex flex-col justify-center items-center text-center'>
      <div className={`
        font-bold text-green-primary font-rufina
        ${size} ${classes}
      `}>
        {children}
      </div>
    </div>
  )
}
  