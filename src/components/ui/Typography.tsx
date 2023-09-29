import React from 'react'


export function H1(props: {className?: string, children: React.ReactNode}) {
  return (
    <h1 className={'text-3xl md:text-4xl lg:text-5xl ' + props.className}>{props.children}</h1>
  )
}

export function H2(props: {className?: string, children: React.ReactNode}) {
  return (
    <h2 className={'text-2xl  md:text-3xl lg:text-4xl '  + props.className}>{props.children}</h2>
  )
}

export function H3(props: {className?: string, children: React.ReactNode}) {
  return (
    <h3 className={'text-xl  md:text-2xl lg:text-3xl '  + props.className}>{props.children}</h3>
  )
}

export function H4(props: {className?: string, children: React.ReactNode}) {
  return (
    <h4 className={'text-lg  md:text-xl lg:text-2xl  ' + props.className} >{props.children}</h4>
  )
}

export function P1(props: {className?: string, children: React.ReactNode}) {
  return (
    <p className={'text-base  md:text-lg lg:text-xl lg:max-w-[60%] xl:max-w-[40%] ' + props.className}>{props.children}</p>
  )
}

export function P2(props: {className?: string, children: React.ReactNode}) {
  return (
    <p className={'text-sm md:text-base lg:text-lg lg:max-w-[60%] xl:max-w-[40%] ' + props.className}>{props.children}</p>
  )
}

