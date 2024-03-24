import React from 'react'
import Image from 'next/image';
import michaelprofile from '../../../public/assets/images/michael-profile-01.webp'
import testimonials from '../data/TestimonialsData';
import HeadingSectionReverse from './HeadingSectionReverse';

function SectionTestimonial() {

  const testimonialslist =
    testimonials.map((t: Testimonial) => 
      <div key={t.id} className='col-span-6 md:col-span-3 flex flex-col gap-2 md:gap-4 text-left mt-6'>
        
        <div className='flex flex-row justify-start items-center gap-3 sm:gap-6 relative z-10'>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
            <Image
              src={michaelprofile}
              alt={t.name}
              width={500}
              height={500}
            />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <p className='font-heading font-bold tracking-wider text-slate-200 text-base mb-0'>{t.name}</p>
            <p className='font-heading uppercase tracking-wider text-slate-200 text-sm mb-0'>{t.ftccdesignation}</p>
          </div>
        </div>
        
        <p className='text-base text-indigo-200 pl-[4.7rem] md:pl-[5.35rem] lg:text-lg leading-relaxed lg:leading-loose relative z-10 pr-12 md:pr-0'>
          {t.blurb}
        </p>
        
        
      </div>
    )

  return (
    <div className='flex flex-row justify-start md:justify-center items-center w-full px-6 bg-gradient-to-br from-indigo-950 from-60% via-indigo-900 via-80% to-indigo-500 text-slate-100 relative'>
      <div className='flex flex-col justify-center items-center w-full max-w-screen-lg py-28     md:py-36 relative'>

        <svg className='fill-indigo-900/40 absolute top-[-5rem] right-0 stroke-indigo-600/40 stroke-[.25] scale-75 md:scale-100' width="220" height="220 " viewBox="0 0 24 24"><path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"></path></svg>
        
        <HeadingSectionReverse 
          subtitle='Testimonials'
          title='From the founders'
        />

        <div className="grid grid-cols-6 gap-4 md:gap-32">
          {testimonialslist}
        </div>

      </div>

      <div className="bg-connections w-full h-full absolute z-0 bg-slate-200 -bottom-28 left-0"></div>

    </div>
  )
}

export default SectionTestimonial;