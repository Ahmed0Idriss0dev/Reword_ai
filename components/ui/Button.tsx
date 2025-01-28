"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
interface ButtonType {
    icon: React.ReactNode ,
    label:string ,
    Href:string
}
const Button = ({icon , Href, label}:ButtonType) => {
  const route = usePathname()
  return (
    <Link href={Href} className={`w-full h-12 duration-200  ${route === Href ? ' bg-Reword-brand-color-500 text-white border-t  font-extrabold':'border bg-transparent text-neutral-900'}   flex justify-start px-5 items-center gap-3 rounded-lg '>`} >
        {icon}
        <span>{label} </span>
    </Link>

  )
}

export default Button