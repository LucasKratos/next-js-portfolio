import React from 'react'
import Image from 'next/image'
import HTML from '../public/assets/skills/html.png'
import CSS from '../public/assets/skills/css.png' 
import JS from '../public/assets/skills/javascript.png'  
import ReactJS from '../public/assets/skills/react.png' 
import Tail from '../public/assets/skills/tailwind.png'
import Git from '../public/assets/skills/github1.png'
import NodeJS from '../public/assets/skills/node.png'
import MySql from '../public/assets/skills/mysql.png'

export const Skills = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2 font-bold'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 

                                src={HTML}    
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={CSS}    
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={JS}  
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={ReactJS}  
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Tail}    
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={Git}
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GitHub</h3>
                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={NodeJS}
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node</h3>
                        </div>

                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={MySql}     
                                width='64px' 
                                height='64px' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    </div>
  )
}
