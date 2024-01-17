export interface TimelineItemProps {
  date: string,
  description: string,
  reverse?: boolean,
}

export default function TimelineItem({date, description, reverse}: TimelineItemProps) {
  const direction = reverse ? '-reverse' : '';
  const textAlignment = reverse ? 'text-right' : 'text-left';

  return (
    <div className={`flex ${"flex-row"+direction} ${"sm:flex-col"+direction} justify-center items-center gap-3`}>
      <div className="text-center text-xl text-green-primary font-bold font-satoshi">{date}</div>
      <div className={`flex ${"flex-row"+direction} ${"sm:flex-col"+direction} items-center`}>
        <div className='border-2 rounded-full border-green-primary bg-green-pastel p-[2px] w-5 h-5'>
          <div className="rounded-full w-full h-full bg-green-primary"></div>
        </div>
        <div className="h-[2px] w-16 sm:w-[2px] sm:h-16 bg-green-primary"></div>
        <div className="rounded-full w-[6px] h-[6px] bg-green-primary"></div>
      </div>
      <div className={`font-satoshi text-sm text-green-primary max-w-32 ${textAlignment} sm:text-center`}>{description}</div>
    </div>
  );
}
