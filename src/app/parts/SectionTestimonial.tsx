import React from 'react'
import Image from 'next/image';
import michaelprofile from '../../../public/assets/images/michael-profile-01.webp'
import testimonials from '../data/TestimonialsData';

function SectionTestimonial() {

  const testimonialslist =
    testimonials.map((t: Testimonial) => 
      <div key={t.id} className='col-span-3 flex flex-col gap-8 text-left mt-6'>
        <p className='text-xl lg:text-xl tracking-loose'>{t.blurb}</p>
        
        <div className='flex flex-row justify-start items-center gap-3 sm:gap-6'>
          <div className='w-16 h-16 rounded-full overflow-hidden'>
            <Image
              src={michaelprofile}
              alt={t.name}
              width={300}
              height={300}
            />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='font-heading font-bold tracking-wider text-slate-200 text-base mb-0'>{t.name}</p>
            <p className='font-heading uppercase tracking-wider text-slate-200 text-sm mb-0'>{t.ftccdesignation}</p>
          </div>
        </div>
      </div>
    )

  return (
    <div className='flex flex-row justify-start md:justify-center items-center w-full px-6 bg-gradient-to-br from-indigo-950 from-60% via-indigo-900 via-80% to-indigo-500 text-slate-50'>
      <div className='flex flex-col justify-center items-center w-full max-w-screen-lg py-20 md:py-36'>
        
        <div className='flex flex-col items-start w-full pb-4 mb-8 border-b-2 border-b-slate-500 border-dotted'>
          <h3 className='text-md font-semibold uppercase text-indigo-300 tracking-wider'>Testimonials</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>Words from FTCC founders</h2>
        </div>

        <div className="grid grid-cols-6 gap-16">
          {testimonialslist}
        </div>

      </div>
    </div>
  )
}

export default SectionTestimonial;