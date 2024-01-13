import Title from "../atoms/Title/title"
import Subtitle from "../atoms/Subtitle/subtitle"

interface SectionTitleProps {
  subtitle: string,
  title: string,
}

export default function SectionTitle({subtitle, title}: SectionTitleProps) {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  )
}
