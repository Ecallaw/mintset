import { CONTENT_DS_SECTION_NAME, CONTENT_WEBSITE_SECTION_NAME } from "@/content/navContent";

export const modes = [
  'light',
  'dark',
] as const

export type Links = {
  name: string;
  hash: string;
}


export type ColorModeValue = (typeof modes)[number]

export type SectionName= (typeof CONTENT_DS_SECTION_NAME | typeof CONTENT_WEBSITE_SECTION_NAME)[number];