import React from 'react';
import NavBarMain from './NavBarMain';

interface PageHeaderProps {
  title: string
}

function Header({ title } : PageHeaderProps) {

  console.log(title)

  return (
    <div className='flex flex-col w-full items-center relative overflow-hidden bg-indigo-700'>

      <NavBarMain />
      
      <div className='flex flex-col justify-start md:justify-center items-center w-full bg-transparent z-10 text-slate-50'>
        <div className='flex flex-col justify-start items:start md:items-start px-6 lg:px-7 py-4 md:py-8 w-full max-w-screen-lg'>
          <h1 className='font-heading text-3xl md:text-4xl xl:text-5xl text-left tracking-tight font-bold w-full md:w-1/2 mt-6 md:mt-10 mb-4 md:mb-8'>{title}</h1>
        </div>
      </div>


    </div>
  )
}

export default Header;