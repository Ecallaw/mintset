import Section from '@/components/ui/Section'
import { H1 } from '@/components/ui/Typography'
import { SectionName } from '@/lib/types'
import React from 'react'

export default function StandardAbout({sectionName, bg} : {sectionName:SectionName, bg?: string}) {
  return (
    <Section anchor={sectionName} bg={bg}>
      <div className='flex flex-1'>
        <H1>STANDARD ABOUT</H1>
      </div>
    </Section>
  )
}
