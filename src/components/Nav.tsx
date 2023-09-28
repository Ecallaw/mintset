'use client'

import useColorMode from '@/lib/hooks/useColorMode'
import useOpenMenu from '@/lib/hooks/useOpenMenu'
import { Links } from '@/lib/types'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import {MdMenu} from 'react-icons/md/'
import Link from 'next/link'
import clsx from 'clsx'
import {motion} from 'framer-motion' 
import {MdSunny, MdBrightness2} from "react-icons/md"



export default function Nav({logoUrl, logoDarkUrl, links, isDrawer = false } : {logoUrl: string, logoDarkUrl?: string, links: Links[], isDrawer?:boolean}) {
  const [openMenu, setOpenMenu] = useOpenMenu()
  const [activeSection, setActiveSection] = useState(links[0].name)
  const [colorMode, setColorMode] = useColorMode() 


  return (
    <div className='flex flex-col fixed w-full'>
      <div className='flex items-center text-lg p-6 bg-neutralBg text-onNeutralBg w-full fixed  lg:hidden'>
        <div className='w-fit rounded-full hover:bg-gray-700 p-2' onClick={() => setOpenMenu(!openMenu)}>
          <MdMenu />
        </div>
        <div className='flex-1 text-center'>
          <span className='text-md md:text-xl'>{activeSection}</span>
        </div>
      </div>
      <div className="hidden bg-neutralBg text-onNeutralBg h-screen px-6 lg:flex lg:flex-row lg:items-center lg:h-20 lg:w-full z-50">
        {logoUrl && <div className="relative lg:flex-1 dark:invert">
          <Image
            className='cursor-pointer object-contain lg:max-h-20 lg:w-min'
            src={logoUrl}
            alt="Logo"
            width={120}
            height={40}
            loading="lazy"
            onClick={() => setActiveSection(links[0].name) }
          />
        </div>}
        <nav>
          <ul className='flex flex-col lg:flex-row gap-10'>
            {links.map((link) => {
              return (
                <Fragment key={link.hash} >
                  <li className='relative w-fit px-4 py-2'>
                    <Link className={clsx("hover:text-primary", {
                      "text-onNeutralBg": activeSection === link.name, 
                    })} href={link.hash} onClick={() => {setOpenMenu(!openMenu);setActiveSection(link.name)}}>{link.name}   
                      {link.name === activeSection &&
                      <motion.span 
                        className='bg-surfaceBg rounded-full absolute inset-0 -z-10'
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping:30,
                        }} />
                      }
                    </Link>
                  </li>
                </Fragment>
              )
            }) }
          </ul>
        </nav>
      </div>
      <div className='lg:hidden '>
        <div className={(openMenu ? "left-0 " : "-left-[20rem] ") + " absolute w-[20rem] z-50 bg-neutralBg text-onNeutralBg h-screen px-6 transition-all duration-300"}>
          {logoUrl && <div className="relative lg:flex-1 dark:invert">
            <Image
              className='cursor-pointer object-contain lg:max-h-20 lg:w-min'
              src={logoUrl}
              alt="Logo"
              width={120}
              height={40}
              loading="lazy"
              onClick={() => {setActiveSection(links[0].name);setOpenMenu(!openMenu)}}
            />
          </div>}
          <div className='flex flex-col h-[calc(100vh-1.5rem)]'>
            <nav className='bg-red-200'>
              <ul className='flex flex-col lg:flex-row'>
                {links.map((link) => {
                  return (
                    <Fragment key={link.hash} >
                      <li className='relative w-fit px-4 py-2 lg:mx-8'>
                        <Link className={clsx("hover:text-primary", {
                          "text-onNeutralBg": activeSection === link.name, 
                        })} onClick={() => {setOpenMenu(!openMenu);setActiveSection(link.name)}} href={link.hash}>{link.name}
                          {link.name === activeSection &&
                      <motion.span 
                        className='bg-surfaceBg rounded-full absolute inset-0 -z-10'
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping:30,
                        }} />
                          }
                        </Link>
                      </li>
                    </Fragment>
                  )
                }) }
              </ul>
            </nav>
            <button className="flex flex-1 p-3 text-lg" onClick={() => setColorMode(colorMode === 'light' ? 'dark' :'light')}>
              {colorMode === 'dark' ? <MdSunny /> : <MdBrightness2/>}
            </button>
          </div>
        </div>
        <div className={openMenu ? "w-screen h-screen bg-onNeutralBg opacity-[0.3]" : "w-fit h-screen bg-onNeutralBg" + " z-40 transition-all duration-300"} onClick={() => setOpenMenu(!openMenu)}/>
      </div>
    </div>
  )
}
