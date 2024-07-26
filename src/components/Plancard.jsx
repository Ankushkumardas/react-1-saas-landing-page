import React from 'react'
import { pricing } from './data/pricing'
import { FaCheck } from "react-icons/fa";
function Plancard({ price, description, features, ispopular, title }) {
  return (
    <div className='flex flex-col justify-between rounded bg-white/20 hover:shadow-lg'>
      {
        ispopular && (
          <div className='font-medium'>
            <button className='px-4 py-2 text-xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text'>Popular</button>
          </div>
        )
      }
      <div className='p-4 shadow-xl rounded-xl'>
        <div className='inline-flex items-end mx-auto'>
          <h1 className='text-3xl font-extrabold'>{price}</h1>
          <span className='ml-3 text-gray-500 align-bottom'>/month</span>
        </div>
        <h2 className='my-2 text-xl font-bold'>{title}</h2>
        <p>{description}</p>
        {/* <div className='flex-grow my-3 border border-gray-600 opacity-25'></div> */}
        {/* 1 51 49 */}
        <ul>
          {
            features.map((e, i) => (

              <li key={i} className='flex flex-row items-center gap-2 my-2 text-gray-700'>
                <div className='flex items-center justify-center w-4 h-4 bg-indigo-500 rounded-full'>
                  <FaCheck className='items-center inline-block w-2 h-2 text-white' />
                </div>
                <p>{e}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <button className='w-full h-8 mt-3 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400'>Select Plan</button>
    </div>
  )
}

export default Plancard
