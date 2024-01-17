export interface TimelineItemProps {
  date: string,
  description: string,
  reverse?: boolean,
}

export default function TimelineItem({date, description, reverse}: TimelineItemProps) {
  const textAlignment = reverse ? 'text-right' : 'text-left';

  function directionClasses() {
    if(reverse) {
      return 'flex-row-reverse sm:flex-col-reverse'
    } else {
      return 'flex-row sm:flex-col'
    }
  }

  return (
    <div className={`flex ${directionClasses()} justify-center items-center gap-3`}>
      <div className="text-center text-md sm:text-lg text-green-primary font-bold font-satoshi">{date}</div>
      <div className={`flex ${directionClasses()} items-center`}>
        <div className='border-2 rounded-full border-green-primary bg-green-pastel p-[2px] w-5 h-5'>
          <div className="rounded-full w-3 h-full bg-green-primary"></div>
        </div>
        <div className="h-[2px] w-10 sm:w-[2px] sm:h-16 bg-green-primary"></div>
        <div className="rounded-full w-[6px] h-[6px] bg-green-primary"></div>
      </div>
      <div className={`font-satoshi text-xs sm:text-sm text-green-primary max-w-32 w-20 ${textAlignment} sm:text-center flex-1`}>{description}</div>
    </div>
  );
}
