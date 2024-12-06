import React from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:justify-evenly text-gray-100 mb-10 pt-20">
            {/* ---- About me text ---- */}
            <div className="flex flex-col gap-2 w-full md:w-1/2 items-start">
                <p className="text-2xl font-semibold relative overflow-hidden whitespace-nowrap animate-typing">
                    Hello, I am David Kabanga! 😎
                </p>
                <p className="text-sm font-light">
                    I am a <span className='text-yellow-300 font-semibold cursor-pointer hover:text-yellow-200 transition-all duration-500'>passionate</span> and <span className='text-yellow-300 font-semibold cursor-pointer hover:text-yellow-200'>results-driven</span> software developer with expertise in the <span className='text-yellow-300 font-semibold cursor-pointer hover:text-yellow-200 transition-all duration-500'>MERN</span> stack (MongoDB, Express.js, React.js, and Node.js).
                </p>
                <p className="text-sm font-light">
                    I specialize in building robust, scalable, and efficient web applications that deliver seamless user experiences.
                </p>
                <p className="text-sm font-light">
                    I thrive on solving complex problems, learning emerging technologies, and collaborating with teams to deliver innovative solutions. My projects showcase my ability to create cutting-edge applications that balance functionality with a great user experience. 🚀
                </p>
                <div className="flex flex-row py-4 gap-5">
                    <FontAwesomeIcon
                        className="w-5 md:w-6 h-5 md:h-6 cursor-pointer hover:text-yellow-300 flex-shrink-0 hover:translate-y-[-3px] transition-all duration-500 "
                        icon={faGithub}
                    />
                    <FontAwesomeIcon
                        className="w-5 md:w-6 h-5 md:h-6 cursor-pointer hover:text-yellow-300 flex-shrink-0 hover:translate-y-[-3px] transition-all duration-500"
                        icon={faLinkedin}
                    />
                    <FontAwesomeIcon
                        className="w-5 md:w-6 h-5 md:h-6 cursor-pointer hover:text-yellow-300 flex-shrink-0 hover:translate-y-[-3px] transition-all duration-500"
                        icon={faX}
                    />
                </div>
            </div>
            {/* ---- Image of me ---- */}
            <div className="">
                <img
                    className="hidden md:block w-[250px] rounded-full border-4 border-yellow-300"
                    src={assets.profile}
                    alt="David Kabanga"
                />
            </div>
        </motion.div>
    );
};

export default Hero;
