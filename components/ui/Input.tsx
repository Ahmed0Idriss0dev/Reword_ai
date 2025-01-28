import { Send } from 'lucide-react'
import React from 'react'

const Input = () => {
  return (
    <header className='w-full h-full layout'>
        <div className="text-center space-y-2 w-[69%] ">
            <h1 className='text-2xl font-Jua text-Reword-brand-color-500'>Talk better , Go fast</h1>
            <p className='text-sm opacity-80'>"Talk better, go fast Enhance your communication and achieve more in less time with Reword AI."</p>
        <div className="w-full bg-white h-[200px] rounded-xl border ">
            <textarea className='w-full rounded-xl h-[70%] p-3 resize-none outline-none' placeholder='inter your script'></textarea>
            <div className="w-full  flex justify-end items-center px-2">
            <button className='w-12 flex justify-center items-center h-12 bg-Reword-brand-color-600 text-white rounded-lg '>
                <Send/>
            </button>

            </div>
        </div>
        </div>
    </header>
  )
}

export default Input