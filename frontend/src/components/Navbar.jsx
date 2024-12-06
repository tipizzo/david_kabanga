import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col sm:flex-row justify-between text-white my-10'>
        <h3 onClick={() => navigate('/')} className='text-4xl font-bold text-gray-100 cursor-pointer flex-shrink-0 hover:translate-y-[-5px] transition-all duration-500'>D <span>K</span><span><FontAwesomeIcon className='text-yellow-300' icon={faCode} /></span></h3>
        <ul className='hidden sm:flex items-start gap-6 font-medium text-gray-100'>
            <NavLink to='/'>
                <li className='py-1 font-semibold'>Home</li>
                <hr className='border-none outline-none h-1 bg-yellow-300 w-4/5 m-auto hidden rounder-full cursor-pointer' />
            </NavLink>
           {/* <NavLink to='/projects'>
                <li className='py-1 font-semibold'>SyntroGIS</li>
                <hr className='border-none outline-none h-1 bg-yellow-300 w-4/5 m-auto hidden rounder-full cursor-pointer' />
            </NavLink> */}
            <NavLink to='#contact'>
            <li className='py-1 font-semibold cursor-pointer'>Contact</li>    
            </NavLink>    
        </ul>
    </div>

  )
}

export default Navbar
