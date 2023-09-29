import React, { Fragment } from 'react'
import { H1, H2, P1 } from '../ui/Typography'
import DarkModeButton from '../ui/DarkModeButton'
import { SectionName } from '@/lib/types'
import Section from '../ui/Section'

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


export default function Color({sectionName, bg} : {sectionName:SectionName, bg?: string}) {
  return (
    <Section anchor={sectionName} bg={bg}>
      <H1 className='pb-2 w-30'>Colors</H1>
      <P1 className='pb-8'>
        Présentation des differentes couleur variabiliser sur le ccs global et le fichier de congif de tailwind. Gestion du theme principal ainsi que le theme light et dark.
      </P1>

      <H2 className="text-2xl font-800 ">Neutral color</H2>
      <div className='flex flex-wrap mb-4'>
        {colorList.neutral.map(color => {
          return (
            <Fragment key={color.name}>
              <div className='flex flex-col w-fit items-center p-4 z-10'>
                <div className= {"w-14 h-14 rounded-xl drop-shadow-lg mb-2 " + color.value}/>            
                <span className='text-sm max-w-[100px] text-center'>{color.name}</span>
              </div>
            </Fragment>
          )
        })}
      </div>
      <H2 className="text-2xl font-800">Theme color</H2>
      <div className='flex flex-wrap mb-4'>
        {colorList.theme.map(color => {
          return (
            <Fragment key={color.name}>
              <div className='flex flex-col w-fit items-center p-4 z-10'>
                <div className= {"w-14 h-14 rounded-xl drop-shadow-lg mb-2 " + color.value}/>            
                <span className='text-sm max-w-[100px] text-center'>{color.name}</span>
              </div>
            </Fragment>
          )
        })}
      </div>
      <H2 className="text-2xl font-800">Color Mode - light or dark</H2>
      <div className='flex flex-wrap'>
        <div className='flex justify-start -mt-6 mx-6'>
          <DarkModeButton modifier='page' isLarge/>
        </div>
        {colorList.mode.map(color => {
          return (
            <Fragment key={color.name}>
              <div className='theme-light flex flex-col w-fit items-center p-4 z-10 '>
                <div className= {"w-14 h-14 rounded-xl drop-shadow-lg mb-2 " + color.value}/>            
                <span className='text-sm max-w-[100px] text-center'>{color.name}</span>
              </div>
            </Fragment>
          )
        })}
      </div>
    </Section>
  )
}
