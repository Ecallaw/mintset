'use client'

import clsx from 'clsx';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Links, SectionName } from '@/lib/types';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/active-section-context';

import DarkModeButton from '../ui/DarkModeButton';

export default function DesktopNav({ links, logoUrl ='/logo/LOGO_DARK.svg' , logoDarkUrl = '/logo/LOGO_LIGHT.svg', isTransparent = false }: { links: Links[], logoUrl?: string, logoDarkUrl?: string, isTransparent?: boolean }) {
  const { activeSection : currentActiveSection , setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  // const currentActiveSection = "desktop-" + activeSection;

  return (
    <header className={clsx('flex flex-1 fixed inset-0 h-toolbarHeight px-6 lg:px-8 xl:px-24 2xl:px-32 z-[999]', { 'bg-neutralBg': !isTransparent })}>
      <div className="text-onNeutralBg flex flex-1 items-center w-full justify-between z-50 ">
        <div className="relative flex-1 ">
          <Link onClick={() => {setTimeOfLastClick(Date.now()); setActiveSection(links[0].name as SectionName);}} href={links[0].hash}>
            <Image
              className={clsx('block cursor-pointer object-contain h-[48px] w-min dark:hidden', { 'hover:drop-shadow-xl': isTransparent })}
              src={logoUrl}
              alt="Logo-light"
              width={120}
              height={40}
              priority
              onClick={() => {setTimeOfLastClick(Date.now());setActiveSection(links[0].name as SectionName) }}
            />
            <Image
              className={clsx('hidden cursor-pointer object-contain h-[48px] w-min dark:block drop-shadow-lg', { 'hover:drop-shadow-xl': isTransparent })}
              src={logoDarkUrl}
              alt="Logo-dark"
              width={120}
              height={40}
              priority 
              onClick={() => {setTimeOfLastClick(Date.now());setActiveSection(links[0].name as SectionName)}}
            />
          </Link>
        </div>
        <nav className='relative flex-1 px-2 py-2'>
          <span className='bg-neutralBg absolute inset-0 -z-10 opacity-[0.95]  rounded-full' />

          <ul className='flex sm:gap-0 md:gap-4 lg:gap-8'>
            {links.map((link) => {
              return (
                <Fragment key={link.hash + '-desktop'} >
                  <li className='relative w-fit px-3 py-1 sm:text-sm md:text-base 2xl:text-lg'>
                    <Link className={clsx("hover:text-primary", {
                      "text-onNeutralBg": currentActiveSection === link.name,
                    })} href={link.hash} onClick={() => {setTimeOfLastClick(Date.now()); setActiveSection(link.name as SectionName) }}>{link.name}
                      {link.name === currentActiveSection &&
                        <motion.span
                          className='bg-surfaceBg rounded-full absolute inset-0 -z-10'
                          layoutId="currentActiveSection"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }} />
                      }
                    </Link>
                  </li>
                </Fragment>
              )
            })}
          </ul>
        </nav>
        <div className="flex text-xl justify-end ml-6 md:flex-1">
          <DarkModeButton modifier={'desktop'} />
        </div>
      </div>
    </header>
  )
}
