import React from 'react'

export default function Button ({
    children, 
    type = 'button',
    className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    ...props
})  {
  return (
    
      <button type={type} className={className} {...props}>
        {children}
      </button>
  )
}

