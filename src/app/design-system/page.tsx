'use client'

import Color from '@/components/ds/Color'
import Component from '@/components/ds/Component'
import Home from '@/components/ds/Home'
import Typography from '@/components/ds/Typography'
import { CONTENT_DS_LINKS } from '@/content/navContent'
import { SectionName } from '@/lib/types'



export default function DesignSystem() {
  

  return (
    <div className="flex flex-1 flex-col">
      <Home sectionName={CONTENT_DS_LINKS[0].name as SectionName} bg='bg-surfaceBg'/>
      <Color sectionName={CONTENT_DS_LINKS[1].name as SectionName} bg='bg-surfaceBg'/>
      <Typography sectionName={CONTENT_DS_LINKS[2].name as SectionName} bg='bg-surfaceBg'/>
      <Component sectionName={CONTENT_DS_LINKS[3].name as SectionName} bg='bg-surfaceBg'/>
      {/* <section id='Home' className='flex min-h-[calc(100vh-(84px+48px))] w-[calc(100vw-48px)] justify-center items-center'>
      </section> */}
      {/* <section id='Colors' className='h-max bg-blue-200 flex justify-center items-center'>COLORS </section>
      <section id='CONTENT_DS_LINKS[2].name' className='h-screen flex flex-col justify-center items-center'>
        <H2 className='pb-4'>Typhographie</H2>
        <H1>h1 - headline h1</H1>
        <H2>h2 - headline h2</H2>
        <H3>h3 - headline h3</H3>
        <H4>h4 - headline h4</H4>
        <P1>p1 - paragraph p1</P1>
        <P2>p2 - paragraph p2</P2>
      </section>
      <section id='Components' className='h-screen bg-blue-200 flex justify-center items-center'>COMPONENT</section>
       */}


      
    </div>
  )
}
