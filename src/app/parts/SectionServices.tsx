import React from 'react'
import SectionUpComing from './SectionUpComing';
import SectionGallery from './SectionGallery';
import HeadingSection from './HeadingSection';
import checkedbox from '../../../public/assets/ui/checkbox-checked-regular-36.png';
import checkbox from '../../../public/assets/ui/checkbox-regular-36.png';
import Image from 'next/image';
import Link from 'next/link';
import { UISVGArrowDown } from '../ui/UISVGelements';

const bullet = <Image
  src={checkbox}
  alt='checkbox'
  width='24'
  height='24'
  className='h-fit'
/>;

const bulletchecked = <Image
  src={checkedbox}
  alt='checkbox'
  width='24'
  height='24'
  className='h-fit'
/>;

function SectionServices() {
  return (
    <div id='services' className='flex flex-col justify-start md:justify-center items-center w-full px-6 relative'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-10 md:py-20'>

        <HeadingSection 
          subtitle='Services'
          title='What we do'
        />

        <div className='grid grid-cols-2 md:grid-cols-7 gap-4 lg:gap-8 text-md w-full max-w-screen-lg py-0 md:py-8'>

          <div className="col-span-2 md:col-span-3 flex flex-col gap-4">
            <div className=''>
            <h4 className='uppercase font-bold mt-8 md:mt-0 mb-4 md:mb-8 tracking-wider pb-4'>Service Orientation</h4>
              <p className='mb-6 pr-0 md:pr-12'>We are 100% in the service of each and every Filipino ICT professional, ICT student and tech enthusiast in Canberra.</p>
              <p className='mb-6 pr-0 md:pr-12'>We provide programs and services that bring members to an inspiring and nurturing space where each one can grow as individuals and at the same time be productive collaborators working as teams.</p>
            </div>
          </div>

          <div  className='mb-8 col-span-2 md:col-span-2'>
            <h4 className='uppercase font-bold mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Programs</h4>
            <ul className="flex flex-col gap-5 font-heading leading-tight *:flex *:gap-2 *:border-b *:border-slate-200 *:dark:border-slate-700 *:pb-5 *:font-medium">
              <li>{bulletchecked}Leadership Program</li>
              <li>{bulletchecked}Fireside Chats</li>
              <li>{bulletchecked}FTCC Volunteer Devs Program</li>
              <li>{bulletchecked}Monthly Socials</li>
              <li>{bullet}Skills Development Workshops</li>
              <li>{bullet}Resume Writing Classes</li>
              <li>{bullet}Annual FTCC Hackathon</li>
            </ul>
          </div>
          
          <div  className='mb-8 col-span-2 md:col-span-2'>
            <h4 className='uppercase font-bold mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Services</h4>
            <ul className="flex flex-col gap-5 font-heading leading-tight *:flex *:gap-2 *:border-b *:border-slate-200 *:dark:border-slate-700 *:pb-5 *:font-medium">
              <li>{bulletchecked}Resume Review</li>
              <li>{bullet}Mock Interviews</li>
              <li>{bullet}Job Boards</li>
              <li>{bullet}Internship Reference</li>
            </ul>
          </div>

        </div>

        <SectionUpComing />
        <SectionGallery />
      </div>

      <div className='flex justify-center items-center mb-8 md:mb-20'>
          <Link href='/#testimonials'>
          <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
          </Link>
        </div>

      {/* <div className="bg-connections w-full h-full absolute z-0 bg-slate-200 -bottom-20 left-0"></div> */}

    </div>
  );
}

export default SectionServices;