import React from 'react'
import { H1, H2, H3, H4, P1, P2 } from '../ui/Typography'
import { SectionName } from '@/lib/types'
import Section from '../ui/Section'

export default function Typography({sectionName, bg} : {sectionName:SectionName, bg?: string}) {
  return (
    <Section anchor={sectionName} bg={bg}>
    
      <H1 className='pb-2'>Typhography</H1>
      <P1 className='pb-6 '>
        Présentation des differents éléments de typographie. Tous les éléments présent ici sont réutilisable est responsive.
      </P1>
      <H1 className='mb-2'>h1 - headline h1</H1>
      <H2 className='mb-2'>h2 - headline h2</H2>
      <H3 className='mb-2'>h3 - headline h3</H3>
      <H4 className='mb-2'>h4 - headline h4</H4>
      <P1 className='mb-2'>p1 - paragraph p1</P1>
      <P2 className='mb-2'>p2 - paragraph p2</P2>
    </Section>
  )
}
