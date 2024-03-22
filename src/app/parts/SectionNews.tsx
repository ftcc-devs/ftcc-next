import React from 'react';
import Image from 'next/image';
import ftccevent01 from '../../../public/assets/images/gallery/ftcc-event-01.webp';
import guests from '../../../public/assets/images/gallery/guests-01.webp';
import michaelspeaking from '../../../public/assets/images/gallery/michael-speaking-01.webp';
import SectionMediaMentions from './SectionMediaMentions';

function SectionNews() {
  return (
    <div id='news' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg pb-20 md:pb-36'>

        <div className='flex flex-col items-start w-full pb-4 md:pb-8'>
          <h3 className='text-md font-semibold uppercase text-indigo-900 tracking-wider'>News and Updates</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>What&apos;s the latest?</h2>
        </div>

        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 mt-12'>

            <div className='grid grid-cols-1 bg-slate-100 rounded-lg gap-2 md:gap-4 overflow-hidden'>
              <div className='bg-slate-300 w-full aspect-video'>
                <Image
                  src={ftccevent01}
                  alt="FTCC event"
                  width={500}
                  height={500}
                />
              </div>
              <div className='gridflex flex-col px-6 pt-2 pb-6'>
                <p className="font-heading uppercase font-semibold text-xs my-2">March 25, 2024</p>
                <a href="" target='_blank'><h4 className='font-body text-indigo-800 text-xl leading-tight pt-0 font-medium mb-3'>All set for FTCC&apos;s Inaugural Assembly on May 3</h4></a>
              </div>
            </div>
            
            <div className='grid grid-cols-1 bg-slate-100 rounded-lg gap-2 md:gap-4 overflow-hidden'>
              <div className='bg-slate-300 w-full aspect-video'>
                <Image
                  src={guests}
                  alt="FTCC event"
                  width={500}
                  height={500}
                />
              </div>
              <div className='gridflex flex-col px-6 pt-2 pb-6'>
                <p className="font-heading uppercase font-semibold text-xs my-2">March 25, 2024</p>
                <a href="" target='_blank'><h4 className='font-body text-indigo-800 text-xl leading-tight pt-0 font-medium mb-3'>All set for FTCC&apos;s Inaugural Assembly on May 3</h4></a>
              </div>
            </div>
            
            <div className='grid grid-cols-1 bg-slate-100 rounded-lg gap-2 md:gap-4 overflow-hidden'>
              <div className='bg-slate-300 w-full aspect-video'>
                <Image
                  src={michaelspeaking}
                  alt="FTCC event"
                  width={500}
                  height={500}
                />
              </div>
              <div className='gridflex flex-col px-6 pt-2 pb-6'>
                <p className="font-heading uppercase font-semibold text-xs my-2">March 25, 2024</p>
                <a href="" target='_blank'><h4 className='font-body text-indigo-800 text-xl leading-tight pt-0 font-medium mb-3'>All set for FTCC&apos;s Inaugural Assembly on May 3</h4></a>
              </div>
            </div>
          </div>
        </div>

        <SectionMediaMentions />

      </div>
    </div>
  );
}

export default SectionNews;