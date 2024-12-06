import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'

const Stacks = () => {

  const icons = [
    faHtml5,
    faCss3,
    faJs,
    faBootstrap,
    faReact,
    faNodeJs,
    faPython,
    faGit,
    faCoffee,
    faNpm
  ];

  return (
    <div className='flex flex-col items-center gap-2 text-gray-100 my-5' id='stacks'>
      <h1 className='text-3xl font-medium my-10'>Tools & <span className='text-yellow-300 font-semibold'>Technologies</span></h1>
      <hr className='' />
      <div className='scroll-container'>
        <div className='scroll-content'>
        <FontAwesomeIcon className='w-10 h-10 px-7 cursor-pointer hover:text-yellow-300 flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' icon={faHtml5} />
        {[...icons, ...icons, ...icons ].map((icon, index) => (
          <FontAwesomeIcon key={index}
           className='w-10 h-10 px-7 pt-5 cursor-pointer hover:text-yellow-300 flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
           icon={icon}
           />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Stacks
