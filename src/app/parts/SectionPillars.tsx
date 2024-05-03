import React from 'react'
import pillars from '../data/PillarsData';
import Image from 'next/image';

function SectionPillars() {

  const pillarslist = 
    pillars.map((p) => 
      <div key={p.id} className='grid grid-cols-4 pt-8 md:pt-12 pb-4 md:pb-8 px-4 md:px-6 bg-slate-100 hover:bg-indigo-400/10 dark:bg-slate-800 hover:-translate-y-2 rounded-lg gap-2 md:gap-4 transition duration-300'>
        <div className='flex flex-row justify-center sm:justify-start'>
          <Image
            src={p.icon}
            alt={p.title}
            width={36}
            height={36}
            className='h-fit'
          />
        </div>
        <div className='col-span-3 sm:col-span-4'>
          <h4 className='text-base uppercase font-bold mb-4'>{p.title}</h4>
          <p className=''>{p.blurb}</p>
        </div>
      </div>
    )

  return (
    <>
      {pillarslist}
    </>
  )
}

export default SectionPillars;