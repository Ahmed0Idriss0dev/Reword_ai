import Image from 'next/image'
import React from 'react'

const Goles = () => {
  return (
    <div className='layout'>
        <div className="flex justify-center items-center flex-col space-y-2">
        <Image className='mx-auto   bottom-0' src="/images/Gol.svg" width={300} height={300} alt='logo'/>
        <div className="text-center">
            <h1 className='text-2xl text-Reword-brand-color-950 font-Jua'>Are you Ready for your Gols ? </h1>
            <p>Create your gols now </p>
        </div>
        <button className='w-40 h-12 bg-Reword-brand-color-600 text-white rounded-lg '>Greate</button>

        </div>
    </div>
  )
}

export default Goles