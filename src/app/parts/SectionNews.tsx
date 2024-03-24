import React from 'react';
import Image from 'next/image';
import ftccevent01 from '../../../public/assets/images/gallery/ftcc-event-01.webp';
import guests from '../../../public/assets/images/gallery/guests-01.webp';
import michaelspeaking from '../../../public/assets/images/gallery/michael-speaking-01.webp';
import SectionMediaMentions from './SectionMediaMentions';
import HeadingSection from './HeadingSection';

function SectionNews() {
  return (
    <div id='news' className='flex flex-col justify-start md:justify-center items-center w-full px-6 relative'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg'>

        <HeadingSection 
          subtitle='News and Updates'
          title='What&apos;s the latest?'
        />

        <div className='relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 mt-12'>

            <div className='grid grid-cols-1 bg-slate-100 rounded-lg gap-2 md:gap-4 overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-glow'>
              <div className='bg-slate-300 w-full aspect-video'>
                <Image
                  src={ftccevent01}
                  alt="FTCC event"
                  width={500}
                  height={500}
                  className='hover:scale-[1.1] transition duration-300'
                />
              </div>
              <div className='gridflex flex-col px-6 pt-2 pb-6'>
                <p className="font-heading uppercase font-semibold text-xs my-2">March 25, 2024</p>
                <a href="" target='_blank'><h4 className='font-body text-indigo-800 hover:text-indigo-600 text-xl leading-tight pt-0 font-medium mb-3 transition duration-300'>All set for FTCC&apos;s Inaugural Assembly on May 3</h4></a>
              </div>
            </div>
            
            <div className='grid grid-cols-1 bg-slate-100 rounded-lg gap-2 md:gap-4 overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-glow'>
              <div className='bg-slate-300 w-full aspect-video'>
                <Image
                  src={guests}
                  alt="FTCC event"
                  width={500}
                  height={500}
                  className='hover:scale-[1.1] transition duration-300'
                />
              </div>
              <div className='gridflex flex-col px-6 pt-2 pb-6'>
                <p className="font-heading uppercase font-semibold text-xs my-2">March 25, 2024</p>
                <a href="" target='_blank'><h4 className='font-body text-indigo-800 hover:text-indigo-600 text-xl leading-tight pt-0 font-medium mb-3 transition duration-300'>All set for FTCC&apos;s Inaugural Assembly on May 3</h4></a>
              </div>
            </div>
            
            <div className='grid grid-cols-1 bg-slate-100 rounded-lg gap-2 md:gap-4 overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-glow'>
              <div className='bg-slate-300 w-full aspect-video'>
                <Image
                  src={michaelspeaking}
                  alt="FTCC event"
                  width={500}
                  height={500}
                  className='hover:scale-[1.1] transition duration-300'
                />
              </div>
              <div className='gridflex flex-col px-6 pt-2 pb-6'>
                <p className="font-heading uppercase font-semibold text-xs my-2">March 25, 2024</p>
                <a href="" target='_blank'><h4 className='font-body text-indigo-800 hover:text-indigo-600 text-xl leading-tight pt-0 font-medium mb-3 transition duration-300'>All set for FTCC&apos;s Inaugural Assembly on May 3</h4></a>
              </div>
            </div>
          </div>
        </div>

        <SectionMediaMentions />

      </div>
      <div className="bg-connections w-full h-full absolute -z-10 bg-slate-200 -bottom-28 md:-bottom-40 left-0"></div>
    </div>
  );
}

export default SectionNews;