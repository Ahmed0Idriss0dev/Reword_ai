import Image from 'next/image'
import React from 'react'

const notfound = () => {
  return (
  <div className='layout bg-Reword-brand-color-100 h-dvh w-full'>
                  <Image src="/images/404.svg" width={400} height={400} alt='logo'/>

    </div>
  )
}

export default notfound