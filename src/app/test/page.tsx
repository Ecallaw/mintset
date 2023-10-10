'use client'

import React from 'react'
import StandardFooter from '@/components/footer/StandardFooter'
import StandardAbout from '@/components/layout/about/StandardAbout'
import StandardContact from '@/components/layout/contact/StandardContact'
import StandardHero from '@/components/layout/hero/StandardHero'
import StandardService from '@/components/layout/services/StandardService'
import { CONTENT_WEBSITE_LINKS } from '@/content/navContent'
import { SectionName } from '@/lib/types'

export default function page() {
  return (
    <>

      <StandardHero sectionName={CONTENT_WEBSITE_LINKS[0].name as SectionName} bg='bg-hero-pattern'/>
      <StandardAbout sectionName={CONTENT_WEBSITE_LINKS[1].name as SectionName}/>
      <StandardService sectionName={CONTENT_WEBSITE_LINKS[2].name as SectionName}/>
      <StandardContact sectionName={CONTENT_WEBSITE_LINKS[3].name as SectionName}/>
      <StandardFooter bg='bg-footer-texture'/>
    </>
  )
}
