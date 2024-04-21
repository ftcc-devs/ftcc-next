import React from 'react'
import UIHeaderNote from '../ui/UIHeaderNote';

function HeroHome01() {
  return (

    <div className='flex flex-col w-full items-center relative text-slate-50'>
      <div id='hero01' className='flex flex-col justify-start md:justify-center items-center w-full bg-transparent z-10 px-6 lg:px-12 pt-28 lg:pt-40 pb-8 lg:pb-20'>
        <div className='flex flex-col justify-start items:start md:items-center py-4 md:py-8 w-full max-w-screen-lg'>

          <h1 className='font-heading text-white text-4xl md:text-5xl xl:text-7xl text-left md:text-center tracking-tight font-semibold w-4/5 md:w-3/5 xl:w-10/12 mt-12 md:mt-20 mb-4 md:mb-8'>Empowering Filipino IT professionals in Canberra</h1>
          <p className='text-left md:text-center font-light w-full md:w-3/5 '>FTCC&apos;s mission is to connect, support, and upskill Filipino ICT professionals in Australia and to represent Filipino professionals as highly-skilled and globally competitive talents contributing to Australia&apos;s goal of becoming a top digital economy by 2030.</p>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 my-8 md:my-12 w-full">
            <a href="#about" className='font-heading text-sm font-semibold uppercase w-full md:w-fit px-4 md:px-8 py-4 bg-indigo-500 hover:bg-indigo-900 border border-indigo-500 hover:border-indigo-300 text-white rounded-lg tracking-wider hover:-translate-y-1 transition duration-300'>Get to know us</a>
            <a href="#join" className='font-heading text-sm font-semibold uppercase w-full md:w-fit px-4 md:px-8 py-4 bg-transparent border border-indigo-400 hover:border-indigo-300 text-white rounded-lg tracking-wider hover:-translate-y-1 transition duration-300'>Join our community</a>
          </div>

          <UIHeaderNote />

        </div>
      </div>

      {/* solid background */}
      {/* <div className='-skew-y-2 w-full h-full absolute top-0 left-0 bg-indigo-800 dark:bg-indigo-900'></div> */}

      {/* image background */}
      <div className='w-full h-full absolute top-0 left-0 bg-masthead-git-pattern'></div>

      {/* connections element */}
      {/* <div className="bg-connections w-full h-full absolute z-0 bg-slate-200 -bottom-40 left-0"></div> */}

    </div>
  )
}

export default HeroHome01;