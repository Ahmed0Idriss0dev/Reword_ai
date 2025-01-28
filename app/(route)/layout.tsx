import UserBotton from '@/components/ui/userBotton'
import NavBar from '@/components/usersInterFace/NavBar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-[100vh] grid grid-cols-[250px,1fr] '> 
        <NavBar/>
        <div className="w-full h-full bg-Reword-brand-color-50">
         <UserBotton/>
        { children} 

        </div>
        

        
        </div>
  )
}

export default layout