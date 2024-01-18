import React from 'react'
import { H1, H2, P1 } from '../ui/Typography'
import Section from '../ui/Section'
import { SectionName } from '@/lib/types'
import Link from 'next/link'

export default function Home({sectionName, bg} : {sectionName:SectionName, bg?: string}) {
  return (
    <Section anchor={sectionName} bg={bg}>
      <div className='flex flex-wrap'>
        <div className='block flex-1'>
          <H1>Mintset Design system</H1>
          <H2 className='pb-2 pt-6'>Improvement</H2>
          <P1>How to improve darkModeButton ? ... wait value from  locale storage</P1>
          <P1>How to prevent the blink effect if dark mode is saved ? </P1>
          <H2 className='pb-2 pt-6'>Todo</H2>
          <P1>Start Component</P1>
          <P1>Start Layout</P1>
        </div>
        <div className='flex justify-end'>
          <P1 className='py-2'>
            <Link href={'ui'}>
            `See some layout click here`
            </Link></P1>
        </div>
      </div>
    </Section>
  )
}
