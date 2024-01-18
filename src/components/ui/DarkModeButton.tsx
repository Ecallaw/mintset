import { useColorModeContext } from '@/context/color-mode-context'
import { useLoaded } from '@/lib/hooks/useLoaded'
import React from 'react'
import { MdBrightness2, MdSunny } from 'react-icons/md'

export default function DarkModeButton({modifier, isLarge=false}: { modifier: string, isLarge?:boolean}){
  const {colorMode, setColorMode} = useColorModeContext() 
  const loaded = useLoaded()

  return (
    <>
      <div className="flex text-xl ml-6">
        <svg width="0" height="0">
          <linearGradient id={modifier + "-sun"} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#fb923c" offset="0%" opacity={0.5}/>
            <stop stopColor="#ef4444" offset="100%" opacity={0.5}/>
          </linearGradient>
          <linearGradient id={modifier + "-moon"} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#3b82f6" offset="0%" opacity={0.5}/>
            <stop stopColor="#8b5cf6" offset="100%" opacity={0.5}/>
          </linearGradient>
        </svg>
        {(colorMode && loaded) && <button className={isLarge ? "text-4xl": "text-base" + " p-2 rounded-lg bg-surfaceBg transition-all duration-200 hover:drop-shadow-lg"} onClick={() => setColorMode(colorMode === 'light' ? 'dark' :'light')}>
          {colorMode === 'dark' ? <MdSunny style={{ fill: `url(#${modifier}-sun)` }} /> : <MdBrightness2 style={{ fill: `url(#${modifier}-moon)` }}/>}
        </button>}
      </div>
    </>
  )
}
