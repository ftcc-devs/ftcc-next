import React from 'react'
import pillars from '../data/PillarsData';
import { ObjectHTMLAttributes } from 'react';

interface Pillar {
  id: string;
  icon: ObjectHTMLAttributes<SVGElement>;
  title: string;
  blurb: string;
  description: string;
}

function SectionPillars() {

  const pillarslist = 
    pillars.map((p:Pillar) => 
      <div key={p.id} className='grid grid-cols-4 pt-8 md:pt-12 pb-4 md:pb-8 px-4 md:px-6 bg-slate-100 rounded-lg gap-2 md:gap-4'>
        <div className='flex flex-row justify-center sm:justify-start'>
          {p.icon}
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