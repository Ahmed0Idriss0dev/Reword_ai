import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <header className='layout p-3 h-dvh'>
      <div className="layout w-full  overflow-clip rounded-lg h-full bg-Reword-brand-color-100">

        <div className="w-full  sm:w-[60%] h-[60%] space-y-4 text-center">
            <div className="text-center space-y-2">
                <small className='w-max p-1 text-Reword-brand-color-700  border border-Reword-brand-color-500 rounded-lg'>Unleash Your Creativity with AI Generate Ideas.</small>
            <h2 className='sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-tr font-Jua font-bold from-Reword-brand-color-500 to-Reword-brand-color-700'> Rewrite Scripts. Create Effortlessly.</h2>
            <p className='text-sm opacity-80'>Transform your content creation process with an AI assistant that helps you brainstorm, <br /> refine, and craft compelling scripts—all in one place.</p>
            </div>
            <button className='w-40 h-12 bg-Reword-brand-color-600 text-white rounded-lg '>Get started</button>
            <Image className='mx-auto   bottom-0' src="/images/Rewo.svg" width={400} height={400} alt='logo'/>
        </div>
      </div>
    </header>
  )
}

export default Hero