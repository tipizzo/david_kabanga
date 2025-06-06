import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className=' flex flex-col justify-center my-10'>
            <hr className=' h-1 bg-yellow-300 w-5/5 rounded-full mb-6' />
            <p onClick={() => {navigate('/'); scrollTo(0,0)}} className='text-1xl text-center text-gray-200 text font-light mt-6'><span className='font-bold hover:text-yellow-200 cursor-pointer transition-all duration-500'>Kabanga David</span> &copy; 2024, Proudly made with <span className=''>❤️</span> & React <FontAwesomeIcon className='rounded-full animate-turn' icon={faReact} /></p>
        </div>
    )
}

export default Footer
