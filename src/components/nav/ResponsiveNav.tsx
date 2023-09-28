import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { Links } from '@/lib/types'

export default function ResponsiveNav({links, logoUrl ='/mintsetLogoBlack.svg' , logoDarkUrl = '/mintsetLogoWhite.svg', isTransparent=false} : {links: Links[], logoUrl?: string, logoDarkUrl?: string, isTransparent?:boolean}) {
  return (
    <>
      <div className='hidden lg:block'>
        <DesktopNav links={links} logoUrl={logoUrl} logoDarkUrl={logoDarkUrl} isTransparent={isTransparent}/> 
      </div>
      <div className='flex lg:hidden'>
        <MobileNav links={links} logoUrl={logoUrl} logoDarkUrl={logoDarkUrl} isTransparent={isTransparent}/> 
      </div>
    </>
  )
}
