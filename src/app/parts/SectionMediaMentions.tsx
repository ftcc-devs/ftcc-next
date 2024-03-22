import React from 'react';
import Image from 'next/image';
import ftccevent01 from '../../../public/assets/images/gallery/ftcc-event-01.webp';
import guests from '../../../public/assets/images/gallery/guests-01.webp';
import michaelspeaking from '../../../public/assets/images/gallery/michael-speaking-01.webp';

function SectionMediaMentions() {
  return (
    <div id='mediamentions'>

      <div className='py-12'>
        <h3 className='uppercase mt-8 md:mt-8 mb-4 text-sm font-bold tracking-widest text-center'>Media Mentions</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className='w-full h-full col-span-1'></div>
        <div className="col-span-1 md:col-span-2 flex flex-col justify-start items-start gap-6">

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-16 pb-8 border-b-2 border-b-slate-400 border-dotted relative">
            <p className='relative lg:absolute top-0 left-0 mb-0 lg:-translate-x-[140%] translate-x-0'>June 2023</p>
            <a href="#"><h4 className='text-2xl font-semibold leading-7'>Connect to remain competitive: Filipino Tech Community Canberra supports ICT professionals in the ACT</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-16 pb-8 border-b-2 border-b-slate-400 border-dotted relative">
            <p className='relative lg:absolute top-0 left-0 mb-0 lg:-translate-x-[140%] translate-x-0'>June 2023</p>
            <a href="#"><h4 className='text-2xl font-semibold leading-7'>FTCC hosted the Tech Bytes in partnership with the ACS Canberra and Tutorials Dojo</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-16 pb-8 border-b-2 border-b-slate-400 border-dotted relative">
            <p className='relative lg:absolute top-0 left-0 mb-0 lg:-translate-x-[140%] translate-x-0'>June 2023</p>
            <a href="#"><h4 className='text-2xl font-semibold leading-7'>Consul General Aian Caringal joins the Filipino Tech Community Canberra (FTCC) IT experts event</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-16 pb-8 border-b-2 border-b-slate-400 border-dotted relative">
            <p className='relative lg:absolute top-0 left-0 mb-0 lg:-translate-x-[140%] translate-x-0'>June 2023</p>
            <a href="#"><h4 className='text-2xl font-semibold leading-7'>PH Ambassador meets Filipino Tech Community Canberra</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SectionMediaMentions;