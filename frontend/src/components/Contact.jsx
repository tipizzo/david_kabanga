import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <div className='flex flex-col items-center gap-2 text-gray-100 my-5' id='contact'>
            <h1 className='text-3xl font-medium my-10'>Contact <span className='text-yellow-300 font-semibold'>Me</span></h1>
            <div className='flex flex-col items-center gap-5'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <input type='text' placeholder='Enter your name' className='border rounded text-white font-semibold w-[300px] md:w-[250px] h-[40px] p-2 bg-gray-700 border-yellow-300' />
                    <input type='email' placeholder='Enter your email' className='border rounded text-white font-semibold w-[300px] md:w-[250px] h-[40px] p-2 bg-gray-700 border-yellow-300' />
                </div>
                <textarea className='border rounded w-[300px] md:w-[510px] h-[130px] md:h-[200px] text-white font-semibold bg-gray-700 border-yellow-300 p-2' placeholder='e.g: Can we collaborate ?'></textarea>
                <button className='border rounded-full h-[40px] w-[300px] md:w-[510px] bg-yellow-300 text-black font-bold cursor-pointer hover:bg-yellow-200 transition-all duration-500'>Send</button>
            </div>
        </div>
    )
}

export default Contact
