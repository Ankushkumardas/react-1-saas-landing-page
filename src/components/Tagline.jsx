import React from 'react'

function Tagline({children}) {
  return (
    <div className='items-center mt-3 text-3xl font-semibold text-center text-indigo-500 capitalize'>
      {children}
    </div>
  )
}

export default Tagline
