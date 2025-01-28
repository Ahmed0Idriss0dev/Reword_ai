"use client"
import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'
const Auth = () => {
  return (
    <div className='w-[360px] relative flex flex-col z-10 justify-center gap-2 h-[40%] border rounded-lg p-4 text-Reword-brand-color-950 text-center bg-white '>
        <Image alt='logo google ' className='absolute -top-52 z-[1] ' src='/images/Auth.svg'width={300} height={300} />

        <div className="text-center">
            <h1 className='text-2xl font-extrabold space-x-1 '>welcome to Reword ai</h1>
            <p>Fast and Secure: Skip the hassle of remembering passwords.</p>
        </div>
        <button onClick={()=> signIn('google',{callbackUrl:'/re', redirect:true})} className='w-full border text-black h-14 bg-white rounded-lg flex justify-center items-center gap-2'>
            <Image alt='logo google ' src='/images/google.png'width={44} height={44} />
            <span>Start with Google</span>
        </button>
    </div>
  )
}

export default Auth