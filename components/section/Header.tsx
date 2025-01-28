import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Header = () => {
  return (
    <header className='layout h-full  p-4 '>
      <div className="bg-Reword-brand-color-100 p-2 w-full h-[100vh] rounded-md ">
        <Nav/>
        <Hero/>
      </div>
    </header>
  )
}

export default Header