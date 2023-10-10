'use-client'

import ResponsiveNav from "@/components/nav/ResponsiveNav";
import { CONTENT_DS_LINKS } from "@/content/navContent";

export default function DesignSystemLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex flex-col w-full  ">
      <ResponsiveNav links={CONTENT_DS_LINKS} logoUrl ='/mintsetLogoBlack.svg' logoDarkUrl='/mintsetLogoWhite.svg'/>
      {children}
    </main>
  )
}