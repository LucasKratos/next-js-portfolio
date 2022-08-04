import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center font-bold'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET´S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I´m <span className='text-[#5651e5]'>Lucas</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I´m a front-end developer specializing in building and occasionally designing digital experiences. Currently, i´m focused on building responsive front-end web aplications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        
                    <a
                    href='https://www.linkedin.com/in/lucas-agustin-spagnoli-berzobohaty-537637208/'
                    target='_blank'
                    rel='noreferrer'
                    ><FaLinkedinIn />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a
                    href='https://github.com/lucasKratos'
                    target='_blank'
                    rel='noreferrer'
                    > <FaGithub />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a
                    href='mailto:lucas.spagnoli@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    > <AiOutlineMail />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a
                        href='/Lucas-Spagnoli-English-CV(2).pdf'
                        target='_blank'
                        rel='noreferrer'
                        ><BsFillPersonLinesFill />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main