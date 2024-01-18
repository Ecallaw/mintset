import Section from '@/components/ui/Section'
import { H1 } from '@/components/ui/Typography'
import { SectionName } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

export default function StandardHero({sectionName, bg} : {sectionName:SectionName, bg?: string}) {
  return (
    <Section anchor={sectionName} bg={bg}>
      <div className='flex flex-1 '>
        <H1>STANDARD HERO</H1>
        <Image
          className='cursor-pointer object-contain h-[48px] w-max dark:hidden'
          src={'/blackandwhite.png'}
          alt="background"
          width={100}
          height={40}
          priority
        />
      </div>
    </Section>
  )
}
