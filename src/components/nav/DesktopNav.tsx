'use client'

import useColorMode from '@/lib/hooks/useColorMode';
import useOpenMenu from '@/lib/hooks/useOpenMenu';
import { Links } from '@/lib/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import {motion} from 'framer-motion'
import { MdBrightness2, MdSunny } from 'react-icons/md';

export default function DesktopNav({links, logoUrl ='/mintsetLogoBlack.svg' , logoDarkUrl = '/mintsetLogoWhite.svg', isTransparent=false} : {links: Links[], logoUrl?: string, logoDarkUrl?: string, isTransparent?: boolean}) {
  const [openMenu, setOpenMenu] = useOpenMenu()
  const [activeSection, setActiveSection] = useState(links[0].name)
  const [colorMode, setColorMode] = useColorMode() 

  console.log("isTransparent", isTransparent)

  return (
    <div className={clsx('flex flex-1 fixed inset-0 h-toolbarHeight px-6 lg:px-8 xl:px-24 2xl:px-32 ',{'bg-neutralBg': !isTransparent})}>
      <div className="text-onNeutralBg flex flex-1 items-center w-full justify-between z-50 ">
        <div className="relative flex-1 ">
          <Link  onClick={() => {setOpenMenu(!openMenu); setActiveSection(links[0].name)}} href={links[0].hash}>
            <Image
              className={clsx('block cursor-pointer object-contain max-h-20 w-min dark:hidden',{'hover:drop-shadow-xl': isTransparent})}
              src={logoUrl}
              alt="Logo"
              width={120}
              height={40}
              loading="lazy"
              onClick={() => setActiveSection(links[0].name) }
            />
            <Image
              className={clsx('hidden cursor-pointer object-contain max-h-20 w-min dark:block drop-shadow-lg',{'hoverdrop-shadow-xl': isTransparent})}
              src={logoDarkUrl}
              alt="Logo"
              width={120}
              height={40}
              loading="lazy"
              onClick={() => setActiveSection(links[0].name) }
            />
          </Link>
        </div>
        <nav className='relative flex-1 px-2 py-2'>
          <span className='bg-neutralBg absolute inset-0 -z-10 opacity-[0.95]  rounded-full'/>

          <ul className='flex sm:gap-0 md:gap-4 lg:gap-8'>
            {links.map((link) => {
              return (
                <Fragment key={link.hash} >
                  <li className='relative w-fit px-3 py-1 sm:text-sm md:text-base 2xl:text-lg'>
                    <Link className={clsx("hover:text-primary", {
                      "text-onNeutralBg": activeSection === link.name, 
                    })} href={link.hash} onClick={() => {setOpenMenu(!openMenu); setActiveSection(link.name)}}>{link.name}   
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
        <div className="flex text-xl justify-end ml-6 md:flex-1">
          <svg width="0" height="0">
            <linearGradient id="sun" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#fb923c" offset="0%" opacity={0.5}/>
              <stop stopColor="#ef4444" offset="100%" opacity={0.5}/>
            </linearGradient>
            <linearGradient id="moon" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#3b82f6" offset="0%" opacity={0.5}/>
              <stop stopColor="#8b5cf6" offset="100%" opacity={0.5}/>
            </linearGradient>
          </svg>
          <button className="text-base p-2 rounded-lg bg-surfaceBg hover:drop-shadow-lg transition-all duration-200" onClick={() => setColorMode(colorMode === 'light' ? 'dark' :'light')}>
            {colorMode === 'dark' ? <MdSunny style={{ fill: "url(#sun)" }}/> : <MdBrightness2 style={{ fill: "url(#moon)" }}/>}
          </button>

        </div>
      </div>
    </div>
  )
}
