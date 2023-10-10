import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { Links } from '@/lib/types'

export default function ResponsiveNav({links, logoUrl ='/logo/LOGO_LIGHT.svg' , logoDarkUrl = '/logo/LOGO_DARK.svg', isTransparent=false} : {links: Links[], logoUrl?: string, logoDarkUrl?: string, isTransparent?:boolean}) {
  return (
    <>
      <div className='flex lg:hidden'>
        <MobileNav links={links} logoUrl={logoUrl} logoDarkUrl={logoDarkUrl} isTransparent={isTransparent}/> 
      </div>
      <div className='hidden lg:block'>
        <DesktopNav links={links} logoUrl={logoUrl} logoDarkUrl={logoDarkUrl} isTransparent={isTransparent}/> 
      </div>
    </>
  )
}
