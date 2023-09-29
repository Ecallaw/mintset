import React from 'react'
import { H1 } from '../ui/Typography'
import { SectionName } from '@/lib/types'
import Section from '../ui/Section'

export default function Component({sectionName, bg} : {sectionName:SectionName, bg?: string}) {
  return (
    <Section anchor={sectionName} bg={bg}>
      <H1>Components</H1>
    </Section>
  )
}
