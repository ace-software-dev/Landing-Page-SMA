interface TextAtomProps {
  text: string;
}
  
export default function TextOperations({ text }: TextAtomProps) {
  return (
    <div className={`text-almost-white text-lg md:text-xl lg:text-2xl font-medium absolute bottom-3 left-3`}>
      {text}
    </div>
  )
} 