import React from 'react'

function Milestone({ title, description, lastitem }) {
  return (
    <div className='flex w-full'>
      <div className='relative flex flex-col items-center h-28'>
        <div className='relative z-20 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-b from-pink-500 to-indigo-500'>
          <div className='absolute z-10 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-b from-pink-500 to-indigo-500 blur-md'></div>
          
        </div>
        {
            !lastitem && <div className='absolute z-0 flex-grow w-1 h-full bg-gray-400 top-2'></div>
          }
      </div>
      <div className='ml-10'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='font-semibold text-gray-600'>{description}</p>
      </div>
      
      {!lastitem && <div className=''milestone-line></div>}
    </div>
  )
}

export default Milestone
