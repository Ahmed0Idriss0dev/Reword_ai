import Image from 'next/image'
import React from 'react'

const Subscription = () => {
  return (
    <div className='bg-transparent bg-contain group relative bg-no-repeat  text-Reword-brand-color-950 w-full h-[40%] rounded-lg p-3 flex justify-center items-center'>
        <div className="text-center  px-5 absolute z-10 space-y-2 w-full">
            <div className="mx-auto   h-full  w-full">
            <h1 className='text-2xl font-extrabold'>Pro featuer</h1>
            <p className='text-sm'>Upgrade your account for more!</p>

            </div>
            <button className='w-full  h-12 backdrop:blur-[100px] duration-150 group-hover:bg-Reword-brand-color-500 group-hover:text-Reword-brand-color-50 bg-[#ffffffa3] text-black rounded-lg'>Subscribe</button>
        </div>
       <Image src="/images/bg.svg" className='absolute z-0 duration-200 group-hover:opacity-40 rounded-lg' width={300} height={500} alt='logo bg' />
    </div>
  )
}

export default Subscription