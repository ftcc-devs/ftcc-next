import React from 'react'
import SectionUpComing from './SectionUpComing';
import SectionGallery from './SectionGallery';
import HeadingSection from './HeadingSection';

function SectionServices() {
  return (
    <div id='services' className='flex flex-col justify-start md:justify-center items-center w-full px-6 relative'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg pb-10 md:pb-20'>

        <HeadingSection 
          subtitle='Services'
          title='What we do'
        />

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 text-md w-full max-w-screen-lg py-0 md:py-8'>

          <div className="col-span-2 md:col-span-2 flex flex-col gap-4">
            <div className=''>
            <h3 className='uppercase font-bold mt-8 md:mt-0 mb-4 md:mb-8 tracking-wider pb-4'>Serving the tech community</h3>
              <p className='mb-6 pr-0 md:pr-12'>Community building isn&apos;t easy, especially when you are operating without funding and are relying on volunteer time. But hearing the feedback like the above makes us think our efforts are worth it, knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community.</p>
            </div>
          </div>

          <div  className='mb-8 col-span-2 md:col-span-1'>
            <h3 className='uppercase font-bold mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Programs</h3>
            <ul className="flex flex-col gap-3 font-heading leading-tight *:border-b *:border-slate-300 *:pb-3 *:font-medium">
              <li>Leadership Program</li>
              <li>Skills Development Workshops</li>
              <li>Resume Writing Classes</li>
              <li>Fireside Chats</li>
              <li>FTCC Volunteer Devs Program</li>
              <li>Annual FTCC Hackathon</li>
              <li>Monthly Socials</li>
            </ul>
          </div>
          
          <div  className='mb-8 col-span-2 md:col-span-1'>
            <h3 className='uppercase font-bold mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Services</h3>
            <ul className="flex flex-col gap-4 font-heading leading-tight *:border-b *:border-slate-300 *:pb-3 *:font-medium">
              <li>Resume Review</li>
              <li>Mock Interviews</li>
              <li>Job Boards</li>
              <li>Internship Reference</li>
            </ul>
          </div>

        </div>

        <SectionUpComing />
        <SectionGallery />
      </div>

      {/* <div className="bg-connections w-full h-full absolute z-0 bg-slate-200 -bottom-20 left-0"></div> */}

    </div>
  );
}

export default SectionServices;