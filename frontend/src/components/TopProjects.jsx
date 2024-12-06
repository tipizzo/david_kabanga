import React from 'react'
import { assets } from '../assets/assets'

const TopProjects = () => {
  return (
    <div className='flex flex-col items-center gap-2 py-4 text-gray-100' id='stacks'>
      <h1 className='text-3xl font-medium my-10'>Discover <span className='text-yellow-300 font-semibold'>SyntroGIS</span></h1>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 mx-5'>
        <div>
          <img className='w-[400px] h-[150px]' src={assets.netflix} alt='' />
          <p>A Netflix-inspired application built with React, featuring a sleek UI, dynamic video display, and organized content categories. Designed to closely resemble the look and feel of Netflix for an immersive browsing experience.</p>
          <div className='flex justify-start w-auto'>
            <span>#ReactJs</span>
            <span>#Firebase</span>
            <span>#ContextAPI</span>
            <span>#TailwindCss</span>
            <span>#npm</span>
          </div>
        </div>
        <div>
          <img className='w-[400px] h-[150px]' src={assets.netflix} alt='' />
          <p>A Netflix-inspired application built with React, featuring a sleek UI, dynamic video display, and organized content categories. Designed to closely resemble the look and feel of Netflix for an immersive browsing experience.</p>
        </div>
        <div>
          <img className='w-[400px] h-[150px]' src={assets.netflix} alt='' />
          <p>A Netflix-inspired application built with React, featuring a sleek UI, dynamic video display, and organized content categories. Designed to closely resemble the look and feel of Netflix for an immersive browsing experience.</p>
        </div>
        <div>
          <img className='w-[400px] h-[150px]' src={assets.netflix} alt='' />
          <p>A Netflix-inspired application built with React, featuring a sleek UI, dynamic video display, and organized content categories. Designed to closely resemble the look and feel of Netflix for an immersive browsing experience.</p>
        </div>
        <div>
          <img className='w-[400px] h-[150px]' src={assets.netflix} alt='' />
          <p>A Netflix-inspired application built with React, featuring a sleek UI, dynamic video display, and organized content categories. Designed to closely resemble the look and feel of Netflix for an immersive browsing experience.</p>
        </div>
        <div>
          <img className='w-[400px] h-[150px]' src={assets.netflix} alt='' />
          <p>A Netflix-inspired application built with React, featuring a sleek UI, dynamic video display, and organized content categories. Designed to closely resemble the look and feel of Netflix for an immersive browsing experience.</p>
        </div>
      </div>
    </div>
  )
}

export default TopProjects
