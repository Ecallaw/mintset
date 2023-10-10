'use client'

import useOpenMenu from '@/lib/hooks/useOpenMenu';
import { Links, SectionName } from '@/lib/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import {motion} from 'framer-motion'
import { MdMenu } from 'react-icons/md';
import { useActiveSectionContext } from '@/context/active-section-context';
import DarkModeButton from '../ui/DarkModeButton';

export default function MobileNav({links, logoUrl ='/logo/LOGO_DARK.svg' , logoDarkUrl = '/logo/LOGO_LIGHT.svg', isTransparent=false } : {links: Links[], logoUrl?: string, logoDarkUrl?: string, isTransparent?:boolean}) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const [openMenu, setOpenMenu] = useOpenMenu()

  return (
    <div className={clsx('flex flex-1 fixed inset-0 h-toolbarHeight px-6 lg:px-8 xl:px-24 2xl:px-32 z-[999] ',{'bg-neutralBg' : !isTransparent} )}>
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
          <div className="relative flex-1 my-4">
            <Link onClick={() => {setOpenMenu(!openMenu); setTimeOfLastClick(Date.now()); setActiveSection(links[0].name as SectionName  )}} href={links[0].hash}>
              <Image
                className='cursor-pointer object-contain h-[48px] w-max dark:hidden'
                src={logoUrl}
                alt="Logo-light"
                width={120}
                height={40}
                priority
                onClick={() => {setTimeOfLastClick(Date.now());setActiveSection(links[0].name as SectionName)}}
              />
              <Image
                className='hidden cursor-pointer object-contain h-[48px] w-max dark:block'
                src={logoDarkUrl}
                alt="Logo-dark"
                width={120}
                height={40}
                priority
                onClick={() => {setTimeOfLastClick(Date.now()); setActiveSection(links[0].name as SectionName)} }
              />
            </Link>
          </div>
          <div className='flex flex-col h-[calc(100vh-(84px+1.5rem))]'>
            <nav>
              <ul className='flex flex-col mt-20'>
                {links.map((link) => {
                  return (
                    <Fragment key={link.hash + '-mobile'} >
                      <li className='relative w-fit px-2 py-1 my-1 lg:mx-8'>
                        <Link className={clsx("hover:text-onNeutralBg", {
                          "text-onNeutralBg": activeSection === link.name, 
                        })} onClick={() => {setTimeOfLastClick(Date.now());setActiveSection(link.name as SectionName)}} href={link.hash}>{link.name}
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
              <DarkModeButton modifier={'mobile'}/>
            </div>
          </div>
        </div>
      </div>
      <div className={(openMenu ? "w-screen h-screen bg-onNeutralBg opacity-[.3]" : "w-fit h-screen bg-onNeutralBg opacity-[0]") + "  absolute top-0 left-0 z-40 transition-all duration-300"} onClick={() => setOpenMenu(!openMenu)}/>
    </div>
  )
}
