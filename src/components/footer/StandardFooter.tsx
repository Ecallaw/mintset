import Section from '@/components/ui/Section'
import { H1 } from '@/components/ui/Typography'

export default function StandardFooter({ bg } : { bg?: string }) {
  return (
    <Section anchor={"footer"} bg={bg} >
      <div className='flex flex-1'>
        <H1>STANDARD FOOTER</H1>
      </div>
    </Section>
  )
}
