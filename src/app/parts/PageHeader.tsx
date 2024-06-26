'use client'

import React from 'react';
import NavBarMain from './NavBarMain';
import UIPageNav from '../ui/UIPageNav';

interface PageHeaderProps {
  title: string
}

function Header({ title } : PageHeaderProps) {

  return (
    <div className='flex flex-col w-full items-center relative overflow-hidden'>
      
      <NavBarMain />

      <div className='flex flex-col w-full items-center bg-indigo-700'>
        <div className='flex flex-col justify-start md:justify-center items-center w-full bg-transparent z-10 text-slate-50 mt-28 md:mt-40'>
          <div className='flex flex-col justify-start items:start md:items-start px-6 lg:px-0 py-4 md:py-8 w-full max-w-screen-lg'>
            <h1 className='font-heading text-2xl md:text-4xl xl:text-6xl text-left tracking-tight font-bold w-full md:w-2/3 mt-12 md:mt-16 mb-4 md:mb-8'>{title}</h1>
          </div>
        </div>
      </div>

      {/* image background */}
      <div className='w-full h-full absolute top-0 left-0 bg-masthead-git-pattern'></div>

    </div>
  )
}

export default Header;