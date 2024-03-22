import React from 'react'

function SectionTestimonial() {
  return (
    <div className='flex flex-row justify-start md:justify-center items-center w-full px-6 bg-gradient-to-br from-indigo-950 from-60% via-indigo-900 via-80% to-indigo-500 text-slate-50'>
      <div className='flex flex-col justify-center items-center w-full max-w-screen-lg py-20 md:py-36'>
        <div className='text-center w-4/5 md:w-4/5'>
          <p className='text-xl lg:text-2xl tracking-tight'>“The community aims to connect people who are passionate about technology, from senior execs to early career professionals and university students who are in tech degrees.”</p>
          <p className='font-heading font-bold uppercase tracking-wider text-sky-200 text-sm mt-6 md:mt-12 mb-0'>Michael Dailisan Calizo</p>
          <p className='font-heading uppercase tracking-wider text-sky-200 text-sm mb-0'>FTCC, Co-founder</p>
        </div>
      </div>
    </div>
  )
}

export default SectionTestimonial;