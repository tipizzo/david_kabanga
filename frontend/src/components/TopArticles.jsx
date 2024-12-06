import React from 'react'

const TopArticles = () => {
  return (
    <div className='flex flex-col items-center gap-2 text-gray-100' id='stacks'>
      <h1 className='text-3xl font-medium my-10'>Last <span className='text-yellow-300 font-semibold'>Blog</span></h1>
      <p className='text-sm cursor-pointer hover:text-gray-400 hover:translate-y-[-1.5px] transition-all duration-500'>Easy way to start coding...</p>
      <p className='text-sm cursor-pointer hover:text-gray-400 hover:translate-y-[-1.5px] transition-all duration-500'>Why choose Firebase...</p>
      <p className='text-sm cursor-pointer hover:text-gray-400 hover:translate-y-[-1.5px] transition-all duration-500'>Don't make these errors...</p>
      <p className='text-sm cursor-pointer hover:text-gray-400 hover:translate-y-[-1.5px] transition-all duration-500'>Chakra UI vs Material UI...</p>
    </div>
  )
}

export default TopArticles
