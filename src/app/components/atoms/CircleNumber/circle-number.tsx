interface CircleNumberProps {
  children?: React.ReactNode,
  classes?: string,
}

export default function CircleNumber({ children, classes }: CircleNumberProps) {
  return (
    <div className={`w-16 h-16 md:w-24 md:h-24 bg-green-primary rounded-full justify-center items-center inline-flex ${classes}`}>
      <div className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-medium font-satoshi">
        {children}
      </div>
    </div>
  );
}
