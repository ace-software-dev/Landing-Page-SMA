import Title from "../atoms/Title/title"
import Text from "../atoms/Text/text"

interface SectionTitleProps {
  subtitle: string,
  title: string,
}

export default function SectionTitle({subtitle, title}: SectionTitleProps) {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
    </div>
  )
}
