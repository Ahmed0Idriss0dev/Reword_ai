import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-start items-center gap-1'>
          <Image src='/images/smallLogo.svg' alt='min logo ' width={40} height={40}/> 
          <h1 className='text-Reword-brand-color-600 text-2xl font-extrabold font-Jua'>Reword.ai</h1>

    </div>

  )
}

export default Logo