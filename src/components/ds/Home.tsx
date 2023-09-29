import React from 'react'
import { H1 } from '../ui/Typography'
import Section from '../ui/Section'
import { SectionName } from '@/lib/types'

export default function Home({sectionName, bg} : {sectionName:SectionName, bg?: string}) {
  return (
    <Section anchor={sectionName} bg={bg}>
      <H1>Mintset Design system</H1>
    </Section>
  )
}
