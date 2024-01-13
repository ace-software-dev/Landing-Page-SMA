import Title from "../atoms/Title/title"
import SectionSubtitle from "../atoms/Section-Subtitle/section-subtitle"

interface SectionTitleProps {
  subtitle: string,
  title: string,
}

export default function SectionTitle({subtitle, title}: SectionTitleProps) {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <Title>{title}</Title>
      <SectionSubtitle>{subtitle}</SectionSubtitle>
    </div>
  )
}
