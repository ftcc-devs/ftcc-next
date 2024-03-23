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

      <div className="grid grid-cols-10">
        <div className='w-full h-full col-span-1 md:col-span-3'></div>
        <div className="col-span-9 md:col-span-7 flex flex-col justify-start items-start gap-6 border-l-2 border-indigo-600/40 pb-20 md:pb-48">

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>June 2023</p>
            <a href="#"><h4 className='text-xl md:text-2xl font-semibold leading-tight md:leading-7'>Connect to remain competitive: Filipino Tech Community Canberra supports ICT professionals in the ACT</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>June 2023</p>
            <a href="#"><h4 className='text-xl md:text-2xl font-semibold leading-7'>FTCC hosted the Tech Bytes in partnership with the ACS Canberra and Tutorials Dojo</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>June 2023</p>
            <a href="#"><h4 className='text-xl md:text-2xl font-semibold leading-7'>Consul General Aian Caringal joins the Filipino Tech Community Canberra (FTCC) IT experts event</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>June 2023</p>
            <a href="#"><h4 className='text-xl md:text-2xl font-semibold leading-7'>PH Ambassador meets Filipino Tech Community Canberra</h4></a>
            <p className='uppercase text-indigo-900 text-sm font-bold tracking-wider m-0'>Source: SBS Filipino </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SectionMediaMentions;