import React from 'react'
import MastheadNoteBottom from './MastheadNoteBottom';

function HeroHome01() {
  return (
    <div id='hero01' className='flex flex-col justify-start md:justify-center items-center w-full bg-transparent z-10 px-6 lg:px-12 pt-4 pb-8 lg:pt-18 lg:pb-18'>
      <div className='flex flex-col justify-start items:start md:items-center py-4 md:py-8 w-full max-w-screen-xl'>

        <h1 className='font-heading text-4xl md:text-5xl xl:text-7xl text-left md:text-center tracking-tight font-bold w-4/5 md:w-3/5 xl:w-10/12 mt-6 md:mt-10 mb-4 md:mb-8'>Empowering Filipino IT professionals in Canberra</h1>
        <p className='text-left md:text-center font-light w-full md:w-3/5 '>FTCC&apos;s mission is to connect, support, and upskill Filipino ICT professionals in Australia and to represent Filipino professionals as highly-skilled and globally competitive talents contributing to Australia&apos;s goal of becoming a top digital economy by 2030.</p>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 my-8 md:my-12 w-full">
          <a href="#about" className='font-heading text-sm font-semibold uppercase w-full md:w-fit px-4 md:px-8 py-4 bg-indigo-700 hover:bg-indigo-900 border-2 border-indigo-700 hover:border-indigo-900 hover:shadow-glow text-indigo-100 hover:text-white rounded-lg tracking-wider transition duration-300'>Get to know us</a>
          <a href="#join" className='font-heading text-sm font-semibold uppercase w-full md:w-fit px-4 md:px-8 py-4 bg-slate-200/50 hover:shadow-glow border-2 border-indigo-700 text-indigo-700 rounded-lg tracking-wider transition duration-300'>Join our community</a>
        </div>
        
        <MastheadNoteBottom />

      </div>
    </div>
  )
}

export default HeroHome01;