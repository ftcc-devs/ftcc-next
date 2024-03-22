import React from 'react'
import Image from 'next/image';
import michaelprofile from '../../../public/assets/images/michael-profile-01.webp'

function SectionTestimonial() {
  return (
    <div className='flex flex-row justify-start md:justify-center items-center w-full px-6 bg-gradient-to-br from-indigo-950 from-60% via-indigo-900 via-80% to-indigo-500 text-slate-50'>
      <div className='flex flex-col justify-center items-center w-full max-w-screen-lg py-20 md:py-36'>
        <div className='flex flex-col gap-8 text-center w-5/5 md:w-4/5 mt-6'>
          <p className='text-xl lg:text-2xl tracking-tight'>“The community aims to connect people who are passionate about technology, from senior execs to early career professionals and university students who are in tech degrees.”</p>
          
          <div className='flex flex-row justify-center items-center gap-3 sm:gap-6'>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
              <Image
                src={michaelprofile}
                alt="FTCC event"
                width={500}
                height={500}
              />
            </div>
            <div className='flex flex-col justify-start items-start'>
              <p className='font-heading font-bold tracking-wider text-slate-200 text-base mb-0'>Michael Dailisan Calizo</p>
              <p className='font-heading uppercase tracking-wider text-slate-200 text-sm mb-0'>FTCC, Co-founder</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SectionTestimonial;