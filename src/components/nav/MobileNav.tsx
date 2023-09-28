'use client'

import useColorMode from '@/lib/hooks/useColorMode';
import useOpenMenu from '@/lib/hooks/useOpenMenu';
import { Links } from '@/lib/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import {motion} from 'framer-motion'
import { MdBrightness2, MdMenu, MdSunny } from 'react-icons/md';

export default function MobileNav({links, logoUrl ='/mintsetLogoBlack.svg' , logoDarkUrl = '/mintsetLogoWhite.svg', isTransparent=false } : {links: Links[], logoUrl?: string, logoDarkUrl?: string, isTransparent?:boolean}) {

  const [openMenu, setOpenMenu] = useOpenMenu()
  const [colorMode, setColorMode] = useColorMode()
  const [activeSection, setActiveSection] = useState(links[0].name)

  return (
    <div className={clsx('flex flex-1 fixed inset-0 h-toolbarHeight px-6 lg:px-8 xl:px-24 2xl:px-32',{'bg-neutralBg' : !isTransparent} )}>
      <div className='flex items-center text-lg text-onNeutralBg w-full'>
        <div className='w-fit rounded-full cursor-pointer p-2 bg-neutralBg' onClick={() => setOpenMenu(!openMenu)}>
          <MdMenu />
        </div>
        <div className='flex-1 text-center'>
          <span className='text-base md:text-md px-4 py-2 bg-neutralBg rounded-lg'>{activeSection}</span>
        </div>
      </div>
      <div>
        <div className={(openMenu ? "left-0 " : "-left-[20rem] ") + " absolute w-[20rem] z-50 bg-neutralBg text-onNeutralBg h-screen px-6 transition-all duration-300"}>
          <div className="relative lg:flex-1">
            <Link onClick={() => {setOpenMenu(!openMenu); setActiveSection(links[0].name)}} href={links[0].hash}>
              <Image
                className='cursor-pointer object-contain lg:max-h-20 lg:w-min dark:hidden'
                src={logoUrl}
                alt="Logo"
                width={120}
                height={40}
                priority
                style={{position: 'relative'}}
                onClick={() => setActiveSection(links[0].name) }
              />
              <Image
                className='hidden cursor-pointer object-contain lg:max-h-20 lg:w-min dark:block'
                src={logoDarkUrl}
                alt="Logo"
                width={120}
                height={40}
                priority
                style={{position: 'relative'}}
                onClick={() => setActiveSection(links[0].name) }
              />
            </Link>
          </div>
          <div className='flex flex-col h-[calc(100vh-(84px+1.5rem))]'>
            <nav>
              <ul className='flex flex-col mt-20'>
                {links.map((link) => {
                  return (
                    <Fragment key={link.hash} >
                      <li className='relative w-fit px-2 py-1 my-1 lg:mx-8'>
                        <Link className={clsx("hover:text-onNeutralBg", {
                          "text-onNeutralBg": activeSection === link.name, 
                        })} onClick={() => {setOpenMenu(!openMenu);setActiveSection(link.name)}} href={link.hash}>{link.name}
                          {link.name === activeSection &&
                      <motion.span 
                        className='bg-surfaceBg rounded-md absolute inset-0 -z-10'
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
            <div className="flex flex-1 text-xl items-end">
              <svg width="0" height="0">
                <linearGradient id="sun-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop stopColor="#fb923c" offset="0%" opacity={0.5}/>
                  <stop stopColor="#ef4444" offset="100%" opacity={0.5}/>
                </linearGradient>
                <linearGradient id="moon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop stopColor="#3b82f6" offset="0%" opacity={0.5}/>
                  <stop stopColor="#8b5cf6" offset="100%" opacity={0.5}/>
                </linearGradient>
              </svg>
              <button className="text-xl p-3 rounded-lg bg-surfaceBg " onClick={() => setColorMode(colorMode === 'light' ? 'dark' :'light')}>
                {colorMode === 'dark' ? <MdSunny style={{ fill: "url(#sun-gradient)" }}/> : <MdBrightness2 style={{ fill: "url(#moon-gradient)" }}/>}
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className={(openMenu ? "w-screen h-screen bg-onNeutralBg opacity-[.3]" : "w-fit h-screen bg-onNeutralBg opacity-[0]") + "  absolute top-0 left-0 z-40 transition-all duration-300"} onClick={() => setOpenMenu(!openMenu)}/>
    </div>
  )
}
