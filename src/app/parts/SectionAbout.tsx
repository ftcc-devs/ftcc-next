import React from 'react'
import SectionPillars from './SectionPillars';

function SectionAbout() {
  return (
    <div id='about' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-36'>

        <div className='flex flex-col items-start w-full pb-8 md:pb-16'>
          <h3 className='text-md font-semibold uppercase text-indigo-900 tracking-wider'>About us</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>Who we are</h2>
        </div>
        <p>Community building isn&apos;t easy, especially when you are operating without funding and are relying on volunteer time. But hearing the feedback like the above makes us think our efforts are worth it, knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community.</p>
        <p>You can break the mold and take that first step to reach those sectors of our community that need a leg-up.</p>
        <p>Come join us and be part of our mission!</p>

        <div>

          <div>
            <h3 className='uppercase mt-8 md:mt-8 mb-8 text-sm font-bold tracking-widest text-center'>Pillars of Service</h3>
          </div>

          <div id="pillars" className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12'>
            
            <SectionPillars />

          </div>
        </div>

      </div>
    </div>
  );
}

export default SectionAbout;