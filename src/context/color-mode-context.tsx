'use client'

import useLocalStorage from '@/lib/hooks/useLocaleStorage';
import { ColorModeValue } from '@/lib/types';
import React, { createContext, useContext, useEffect, useState } from 'react'


type ColorModeContextProviderProps = {
  children : React.ReactNode;
}

type ColorModeContextType = {
  colorMode: ColorModeValue;
  setColorMode : React.Dispatch<React.SetStateAction<ColorModeValue>>
}

export const ColorModeContext = createContext<ColorModeContextType | null>(null)

export default function ColorModeContextProvider({children}: ColorModeContextProviderProps) {
  const [color, setColor] = useLocalStorage("color-theme", "light");
  const [colorMode, setColorMode] = useState<ColorModeValue>(color)

  useEffect(() => {
    const bodyClass = window.document.body.classList;

    if(colorMode === 'dark') {
      bodyClass.add('dark')
      bodyClass.remove('light')
    }else{
      bodyClass.add('light')
      bodyClass.remove('dark')
    }
    setColor(colorMode)
  }, [colorMode]);


  return <ColorModeContext.Provider
    value={{
      colorMode,
      setColorMode,
    }}>
    {children}
  </ColorModeContext.Provider>
}

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext)

  if(context === null ){
    throw new Error(
      "useColorModeContext must be used within a ColorModeContextProvider"
    );
  }

  return context;
}


