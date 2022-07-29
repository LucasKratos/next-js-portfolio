import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TravelImg from '../public/assets/projects/agencia.jpg'
import SimonImg from '../public/assets/projects/simon.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import Portfolio from '../public/assets/projects/portfolio.jpg'
import ExpenseTracker from '../public/assets/projects/presupuesto1.jpg'
import cryptoImg from '../public/assets/projects/cryto.jpg'
import Fotografy from '../public/assets/projects/fotografia.jpg'
import ProjectItem from './ProjectItem';
import Food from '../public/assets/projects/fast-food.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full font-bold'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Travel Agency'
            backgroundImg={TravelImg}
            projectUrl='/travel'
            tech='Javascript - MySQL - Heroku'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS - Firebase'

          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={Portfolio}
            projectUrl='/portfolio'
            tech='React JS'

          />
          <ProjectItem
            title='Expense Tracker'
            backgroundImg={ExpenseTracker}
            projectUrl='/expenseTracker'
            tech='Javascript - CSS - HTML'

          />
           <ProjectItem
            title='Photography '
            backgroundImg={Fotografy}
            projectUrl='/photography'
            tech='Next JS'

          />
           <ProjectItem
            title='Simon Says Game'
            backgroundImg={SimonImg}
            projectUrl='/simons'
            tech='Javascript'

          />
            <ProjectItem
            title='Fast Food'
            backgroundImg={Food}
            projectUrl='/food'
            tech='React - Tailwind - ArrayMethods'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;