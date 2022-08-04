import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Lucas | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px] font-bold'>
        <h2 className='text-center'>Resume</h2>
        <h2 className='text-center text-blue-600 '><a href="/Lucas-Spagnoli-English-CV(2).pdf" download="Lucas-Spagnoli-English-CV(2).pdf">Download CV Here</a></h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Lucas Berzobohaty</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/lucas-agustin-spagnoli-berzobohaty-537637208/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/LucasKratos'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Front-End <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Design and Problem Solving
            </p>
          </div>
          
        </div>
        <p>
            I am a student of Bachelor of Computer Science 
            (University of Buenos Aires) and Web Programmer 
            who seeks to gain experience as an IT professional 
            and a new job challenge that allows me to continue 
            deepening these areas or other related ones.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>MySQL</span>
            <span className='px-2'>|</span>Python
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          
          <p className='py-1 italic'>Freelance Work (2020 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          <li>
          I am currently designing projects in react and tailwind while I gain knowledge of back end technologies.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            
          </ul>
        </div>
        {/* Experience */}
        
       
       
      </div>
    </>
  );
};

export default resume;