interface TimelineItemProps {
  date: string,
  description: string,
}

export default function TimelineItem({date, description}: TimelineItemProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-center text-xl text-green-primary font-bold font-satoshi">{date}</div>
      <div className="flex flex-col items-center">
        <div className='border-2 rounded-full border-green-primary'>
            <div className="rounded-full w-4 h-4 bg-green-primary m-1">
            </div>
        </div>
        <div className="w-[2px] h-16 bg-green-primary"></div>
        <div className="rounded-full w-[0.35rem] h-[0.35rem] bg-green-primary relative -top-1"></div>
      </div>
      <div className="font-satoshi text-sm text-green-primary w-32 text-center">{description}</div>
    </div>
  );
}
