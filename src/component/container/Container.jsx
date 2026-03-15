import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='w-full h-full flex items-center justify-center p-4'>
      {children}
    </div>
  )
}

export default Container
