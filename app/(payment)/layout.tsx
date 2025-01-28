import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div> 
        <h1>nav</h1>
        { children} 
        
        <h1>footer</h1>
        </div>
  )
}

export default layout