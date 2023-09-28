'use client'
import Section from '@/components/ui/Section'
import {H1, H2, H3, H4, P1, P2} from '@/components/ui/Typography'
import { CONTENT_DS_LINKS } from '@/content/navContent'
import { modes } from '@/lib/types'
import {Fragment, useState} from 'react'

const colorList = {
  neutral : [
    {name : "neutral-color 50", value : "bg-gray-50"},
    {name : "neutral-color 100", value : "bg-gray-100"},
    {name : "neutral-color 200", value : "bg-gray-200"},
    {name : "neutral-color 300", value : "bg-gray-300"},
    {name : "neutral-color 400", value : "bg-gray-400"},
    {name : "neutral-color 500", value : "bg-gray-500"},
    {name : "neutral-color 600", value : "bg-gray-600"},
    {name : "neutral-color 700", value : "bg-gray-700"},
    {name : "neutral-color 800", value : "bg-gray-800"},
    {name : "neutral-color 900", value : "bg-gray-900"},
  ],
  theme : [
    {name : "mintset-color 50", value : "bg-mintset-50"},
    {name : "mintset-color 100", value : "bg-mintset-100"},
    {name : "mintset-color 200", value : "bg-mintset-200"},
    {name : "mintset-color 300", value : "bg-mintset-300"},
  ],
  mode : [
    {name : "neutralBg", value : "bg-neutralBg"},
    {name : "onNeutralBg", value : "bg-onNeutralBg"},
    {name : "primaryBg", value : "bg-primaryBg"},
    {name : "onPrimaryBg", value : "bg-onPrimaryBg"},
    {name : "primary", value : "bg-primary"},
  ],
}

type ModeValue = (typeof modes)[number]

export default function DesignSystem() {
  const [mode, setMode] = useState<ModeValue>('dark')

  return (
    <div className="theme-mintset flex flex-1 flex-col">
      <Section key={CONTENT_DS_LINKS[0].hash} anchor={CONTENT_DS_LINKS[0].name} bg='bg-surfaceBg'>
        <H1 className=''>Mintset Design system</H1>
      </Section> 
      
      <Section key={CONTENT_DS_LINKS[1].hash} anchor={CONTENT_DS_LINKS[1].name} bg='bg-surfaceBg'>
        <H2 className='pb-4'>Typhographie</H2>
        <H1>h1 - headline h1</H1>
        <H2>h2 - headline h2</H2>
        <H3>h3 - headline h3</H3>
        <H4>h4 - headline h4</H4>
        <P1>p1 - paragraph p1</P1>
        <P2>p2 - paragraph p2</P2>
      </Section> 
      
      <Section key={CONTENT_DS_LINKS[2].hash} anchor={CONTENT_DS_LINKS[2].name} bg='bg-surfaceBg'>
        <H2 className='pb-4'>Typhographie</H2>
        <H1>h1 - headline h1</H1>
        <H2>h2 - headline h2</H2>
        <H3>h3 - headline h3</H3>
        <H4>h4 - headline h4</H4>
        <P1>p1 - paragraph p1</P1>
        <P2>p2 - paragraph p2</P2>
      </Section>
      
      <Section key={CONTENT_DS_LINKS[3].hash} anchor={CONTENT_DS_LINKS[3].name} bg='bg-surfaceBg'>
        <H2 className='pb-4'>Typhographie</H2>
        <H1>h1 - headline h1</H1>
        <H2>h2 - headline h2</H2>
        <H3>h3 - headline h3</H3>
        <H4>h4 - headline h4</H4>
        <P1>p1 - paragraph p1</P1>
        <P2>p2 - paragraph p2</P2>
      </Section>
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


      {/* <h1 className="text-2xl font-800 ">Neutral color</h1>
      <div className='flex py-4'>
        {colorList.neutral.map(color => {
          return (
            <Fragment key={color.name}>
              <div className='flex flex-col w-fit items-center p-4'>
                <div className= {"w-14 h-14 rounded-xl drop-shadow-lg mb-2 " + color.value}/>            
                <span className='text-sm max-w-[100px] text-center'>{color.name}</span>
              </div>
            </Fragment>
          )
        })}
      </div>
      <h1 className="text-2xl font-800">Theme color</h1>
      <div className='flex py-4'>
        {colorList.theme.map(color => {
          return (
            <Fragment key={color.name}>
              <div className='flex flex-col w-fit items-center p-4'>
                <div className= {"w-14 h-14 rounded-xl drop-shadow-lg mb-2 " + color.value}/>            
                <span className='text-sm max-w-[100px] text-center'>{color.name}</span>
              </div>
            </Fragment>
          )
        })}
      </div>
      <h1 className="text-2xl font-800">Light mode</h1>
      <div className='flex py-4'>
        {colorList.mode.map(color => {
          return (
            <Fragment key={color.name}>
              <div className='theme-light flex flex-col w-fit items-center p-4'>
                <div className= {"w-14 h-14 rounded-xl drop-shadow-lg mb-2 " + color.value}/>            
                <span className='text-sm max-w-[100px] text-center'>{color.name}</span>
              </div>
            </Fragment>
          )
        })}
      </div>
      <h1 className="text-2xl font-800">Dark mode</h1>
      <div className='flex py-4'>
        {colorList.mode.map(color => {
          return (
            <Fragment key={color.name}>
              <div className='theme-dark flex flex-col w-fit items-center p-4'>
                <div className= {"w-14 h-14 rounded-xl drop-shadow-lg mb-2 " + color.value}/>            
                <span className='text-sm max-w-[100px] text-center'>{color.name}</span>
              </div>
            </Fragment>
          )
        })}
      </div> */}
    </div>
  )
}
