import React from 'react'

function SectionServices() {
  return (
    <div id='services' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg  pt-8 md:pt-16'>

        <div className='flex flex-col items-start w-full py-8 md:py-16'>
          <h3 className='text-md font-semibold uppercase text-indigo-900 tracking-wider'>Services</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>What do we do?</h2>
        </div>
        <p className='mb-6'>Community building isn&apos;t easy, especially when you are operating without funding and are relying on volunteer time. But hearing the feedback like the above makes us think our efforts are worth it, knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community.</p>

        <div>
          <h4 className='text-md uppercase font'>Pillars of Service</h4>
        </div>

      </div>
    </div>
  );
}

export default SectionServices;