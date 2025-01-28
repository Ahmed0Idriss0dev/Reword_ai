import React from 'react'
import Logo from '../ui/Logo'
import { BarLinks } from '../helper'
import Button from '../ui/Button'
import Subscription from '../ui/subscripte'

const NavBar = () => {
  return (
    <div className="w-full space-y-2 p-2 h-full border-r">
      <Logo/>
      <div className="w-full py-4 flex flex-col justify-normal items-center gap-1 border-t   h-max ">
       {
        BarLinks.map(({icon , label , src} , index)=>(
           <Button key={index} Href={src} icon={icon} label={label} />
        ))
       }
      </div>
      <Subscription/>
      <div className="w-full  h-[20%] ">

</div>
    </div>
)
}

export default NavBar