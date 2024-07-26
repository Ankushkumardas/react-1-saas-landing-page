import React from 'react'
import demourl from '../assets/demo.png'
import Tag from './Tag'
import { FaAngleRight } from "react-icons/fa";
function Herosection() {
    return (
        <section id='AboutUs' className='flex flex-col mt-32 text-center hero-section '>
            <Tag>
                <div className='flex items-center w-full pb-1 pl-1 mx-auto mt-1 px4 hover:cursor-pointer'>
                    <span className='font-medium text-black'>Upsun </span>
                    <FaAngleRight className='w-6 h-4 text-indigo-600'/>    
                </div>
            </Tag>
            <h1 className='text-4xl font-bold sm:text-6xl'>
                Launch Your Saas
                <br />
                <span className='text-transparent bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text'>In Minutes Not Days</span>
                </h1>
                <h2 className='mt-5 font-medium text-gray-600 sm:text-xl'>Upsun is an Open source tool for developers who want to launch their ideas faster.</h2>
                <div className='mx-auto mt-3 space-x-5 max-w-fit '>
                    <a href="#get-started" className='px-5 py-2 mx-auto text-sm font-medium text-black bg-white shadow-md outline-none rounded-xl max-w-fit hover:ring-gray-600 hover:ring-3'>Get Started</a>
                    <a href="#features" className='px-5 py-2 mx-auto text-sm font-medium text-black bg-white shadow-md outline-none rounded-xl max-w-fit hover:ring-gray-600 hover:ring-3'>Learn More</a>
                </div>
                <div className='items-center justify-center mt-5'>
                    <img src={demourl} alt="" className='mx-auto sm:h-[400px] h-[280px]'/>
                </div>
        </section>
    )
}

export default Herosection
