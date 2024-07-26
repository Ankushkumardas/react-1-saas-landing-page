import React from 'react'

const Tag = ({ children }) => {
  return (

    <div className='flex items-center px-3 py-1 mx-auto mb-3 text-sm font-medium leading-5 text-indigo-600 rounded-full bg-indigo-400/10 hover:bg-indigo-400/20 w-fit'>{children}</div>

  )
}

export default Tag
