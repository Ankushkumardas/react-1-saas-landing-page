import React, { useState } from 'react'
import { useScroll, useMotionValueEvent } from "framer-motion"
import Mobilemenu from './Mobilemenu'

function Navbar() {
  const { scrollY } = useScroll()
  const [scroll, setscroll] = useState(false)
  // console.log("Page scroll: ", scrollY)
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
    if (latest > 0 && !scroll) {
      setscroll(true)
    } else if (latest === 0 && scroll) {
      setscroll(false)
    }
  });

  const defaultClasses = 'transition-all absolute inset-0 -z-1';

  let navBarClasses = scroll ? `${defaultClasses} border/10 bg-white/15 backdrop-blur-md` : `${defaultClasses} bg-transparent`;

  return (
    <div className='sticky inset-x-0 top-0 z-30 w-full '>
      <div className={navBarClasses}></div>
      <div className='relative w-full px-4 mx-auto max-w-screen-2xl lg:px-24'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <img src="https://cdn.dribbble.com/userupload/12413855/file/original-00f4ec9f7476703af7472dd2ca439595.png?resize=1024x768" alt="" className='w-auto h-20 text-xl bg-white bg-contain cursor-pointer' />
          </div>
          <nav className='hidden md:block '>
            <ul className='flex flex-row p-2 pt-1 space-x-4'>
              <li>
                <a href="#AboutUs" className='font-semibold text-gray-600'>AboutUs</a>
              </li>
              <li>
                <a href="#features" className='font-semibold text-gray-600'>Features</a>
              </li>
              <li>
                <a href="#pricing" className='font-semibold text-gray-600'>Pricing</a>
              </li>
            </ul>
          </nav>
          <div className='hidden space-x-4 md:block'>
            <a href="" className='items-center px-3 py-1.5 text-white bg-black rounded-md cursor:pointer'>Login</a>
            <a href="" className='items-center px-3 py-1.5 text-white bg-black rounded-md cursor:pointer'>Sign Up</a>
          </div>
          <Mobilemenu/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
