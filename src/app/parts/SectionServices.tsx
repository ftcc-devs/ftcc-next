import React from 'react'
import SectionUpComing from './SectionUpComing';
import SectionGallery from './SectionGallery';

function SectionServices() {
  return (
    <div id='services' className='flex flex-col justify-start md:justify-center items-center w-full px-6 relative'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-36'>

        <div className='flex flex-col items-start w-full pb-8 md:pb-16'>
          <h3 className='text-md font-semibold uppercase text-indigo-900 tracking-wider'>Services</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>What do we do?</h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 text-md w-full max-w-screen-lg py-0 md:py-8'>

          <div className="col-span-2 md:col-span-2 flex flex-col gap-4">
            <div className=''>
              <p className='mb-6 pr-12'>Community building isn&apos;t easy, especially when you are operating without funding and are relying on volunteer time. But hearing the feedback like the above makes us think our efforts are worth it, knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community.</p>
            </div>
          </div>

          <div  className='mb-8 col-span-1'>
            <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-6 tracking-wider'>Programs</h3>
            <ul className="flex flex-col gap-4 font-heading leading-tight list-square pl-6">
              <li>Leadership Program</li>
              <li>Skills Development Workshops</li>
              <li>Resume Writing Classes</li>
              <li>Fireside Chats</li>
              <li>FTCC Volunteer Devs Program</li>
              <li>Annual FTCC Hackathon</li>
              <li>Monthly Socials</li>
            </ul>
          </div>
          
          <div  className='mb-8 col-span-1'>
            <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-6 tracking-wider'>Services</h3>
            <ul className="flex flex-col gap-4 font-heading leading-tight list-square pl-6">
              <li>Resume Review</li>
              <li>Mock Interviews</li>
              <li>Job Boards</li>
              <li>Internship Reference</li>
            </ul>
          </div>

        </div>

        {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8 text-md w-full max-w-screen-lg py-0 md:py-8'>


        </div> */}
        <SectionUpComing />
        <SectionGallery />
      </div>

      <div className="bg-connections w-full max-h-full h-full absolute -z-10 bg-slate-200 -bottom-24"></div>

    </div>
  );
}

export default SectionServices;