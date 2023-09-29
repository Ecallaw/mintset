import { Links } from "@/lib/types";


//Formatted as link: Always start this array by {name : "Home", hash: "#Home"}: related to actiove-section-context.
export const CONTENT_WEBSITE_LINKS: Links[] = [
  {name : "Home", hash: "#Home"},
  {name : "About", hash: "#About"},
  {name : "Services", hash: "#Services"},
  {name : "Contact", hash: "#Contact"},
]

export const CONTENT_WEBSITE_SECTION_NAME = [
  'Home',
  'About',
  'Services',
  'Contact',
] as const


/*
FOR DESIGN SYSTEM PAGE
*/

export const CONTENT_DS_LINKS: Links[] = [
  {name : "Home", hash: "#Home"},
  {name : "Colors", hash: "#Colors"},
  {name : "Typography", hash: "#Typography"},
  {name : "Components", hash: "#Components"},
]

export const CONTENT_DS_SECTION_NAME = [
  'Home',
  'Colors',
  'Typography',
  'Components',
] as const

