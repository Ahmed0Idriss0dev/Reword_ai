import Image from 'next/image'
import React from 'react'
import NavLinks from '../helper'
import Link from 'next/link'
import Logo from '../ui/Logo'

const Nav = () => {
  return (
    <nav className='layout p-1 '>
      <div className="Nav bg-white rounded-lg absolute top-9  h-20">
         <Logo/>
        <ul className='hidden sm:flex h-full justify-center items-center gap-4'>
          {
            NavLinks.map(({label , src}, index)=>(
              <li className='opacity-80 duration-200 hover:opacity-100'>
                <a href={src}>{label} </a>
              </li>
            ))
          }
        </ul>
         <Link href='/auth' className='w-24 sm:w-36 h-12 border text-Reword-brand-color-800 border-Reword-brand-color-600 flex justify-center items-center rounded-lg '>Join us</Link>
      </div>
    </nav>

  )
}

export default Nav