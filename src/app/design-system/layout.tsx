'use-client'

import ResponsiveNav from "@/components/nav/ResponsiveNav";
import { CONTENT_DS_LINKS } from "@/content/navContent";

export default function DesignSystemLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex flex-col w-screen  ">
      <ResponsiveNav links={CONTENT_DS_LINKS} />
      {children}
    </main>
  )
}