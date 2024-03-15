import React from 'react'

function SectionAbout() {
  return (
    <div id='about' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg pt-8 md:pt-20'>

        <div className='flex flex-col items-start w-full py-8 md:py-16'>
          <h3 className='text-md font-semibold uppercase text-indigo-900 tracking-wider'>About us</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>Who are we?</h2>
        </div>
        <p>Community building isn&apos;t easy, especially when you are operating without funding and are relying on volunteer time. But hearing the feedback like the above makes us think our efforts are worth it, knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community.</p>
        <p>You can break the mold and take that first step to reach those sectors of our community that need a leg-up.</p>
        <p>Come join us and be part of our mission!</p>

      </div>
    </div>
  );
}

export default SectionAbout;