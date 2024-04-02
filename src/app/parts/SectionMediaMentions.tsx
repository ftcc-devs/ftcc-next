import React from 'react';
import Image from 'next/image';
import ftccevent01 from '../../../public/assets/images/gallery/ftcc-event-01.webp';
import guests from '../../../public/assets/images/gallery/guests-01.webp';
import michaelspeaking from '../../../public/assets/images/gallery/michael-speaking-01.webp';

function SectionMediaMentions() {
  return (
    <div id='mediamentions'>

      <div className='pt-12 md:pt-20 pb-'>
        <h4 className='uppercase font-bold mt-8 md:mt-6 mb-8 tracking-wider pb-10'>Latest Media Mentions</h4>
      </div>

      <div className="grid grid-cols-10">
        <div className='w-full h-full col-span-1 md:col-span-1'></div>
        <div className="col-span-9 md:col-span-7 flex flex-col justify-start items-start gap-6 border-l-2 border-indigo-600/40 pb-20 md:pb-48">

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>June 2023</p>
            <a target="_blank" href="https://www.sbs.com.au/language/filipino/en/article/filipino-tech-community-canberra-supporting-filipino-ict-professionals-in-the-act/ldga1mgpm"><h5 className='hover:text-indigo-700 text-xl md:text-2xl font-semibold leading-tight md:leading-7'>Connect to remain competitive: Filipino Tech Community Canberra supports ICT professionals in the ACT</h5></a>
            <p className='uppercase text-indigo-900 hover:underline text-sm font-bold tracking-wider m-0'><a target="_blank" href="https://www.sbs.com.au/language/filipino/en">Source: SBS Filipino</a></p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>June 2023</p>
            <a target="_blank" href="https://www.linkedin.com/posts/carievito_community-tech-networking-activity-7043021446960345088-K-gA/"><h5 className='hover:text-indigo-700 text-xl md:text-2xl font-semibold leading-7'>FTCC hosted the Tech Bytes in partnership with the ACS Canberra and Tutorials Dojo</h5></a>
            <p className='uppercase text-indigo-900 hover:underline text-sm font-bold tracking-wider m-0'>Source: Carie Vito</p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>December 2023</p>
            <a target="_blank" href="https://philembassy.org.au/latest/news/consul-general-aian-caringal-joins-the-filipino-tech-community-canberra-ftcc-it-experts-event"><h5 className='hover:text-indigo-700 text-xl md:text-2xl font-semibold leading-7'>Consul General Aian Caringal joins the Filipino Tech Community Canberra (FTCC) IT experts event</h5></a>
            <p className='uppercase text-indigo-900 hover:underline text-sm font-bold tracking-wider m-0'>Source: Philippine Embassy Canberra</p>
          </div>

          <div className="flex flex-col gap-4 pl-2 ml-8 pt-0 pr-4 pb-8 relative">
            <p className='mb-0'>June 2023</p>
            <a target="_blank" href="https://philembassy.org.au/latest/news/ph-ambassador-meets-filipino-tech-community-canberra"><h5 className='hover:text-indigo-700 text-xl md:text-2xl font-semibold leading-7'>PH Ambassador meets Filipino Tech Community Canberra</h5></a>
            <p className='uppercase text-indigo-900 hover:underline text-sm font-bold tracking-wider m-0'>Source: Philippine Embassy Canberra</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SectionMediaMentions;