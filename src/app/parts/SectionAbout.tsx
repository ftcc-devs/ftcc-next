import React from 'react'

function SectionAbout() {
  return (
    <div id='about' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-36'>

        <div className='flex flex-col items-start w-full pb-8 md:pb-16'>
          <h3 className='text-md font-semibold uppercase text-indigo-900 tracking-wider'>About us</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>Who are we?</h2>
        </div>
        <p>Community building isn&apos;t easy, especially when you are operating without funding and are relying on volunteer time. But hearing the feedback like the above makes us think our efforts are worth it, knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community.</p>
        <p>You can break the mold and take that first step to reach those sectors of our community that need a leg-up.</p>
        <p>Come join us and be part of our mission!</p>

        <div>

          <div>
            <h3 className='uppercase mt-8 md:mt-8 mb-8 text-sm font-bold tracking-widest text-center'>Pillars of Service</h3>
          </div>

          <div id="pillars" className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-12'>
            <div className='flex flex-col pt-8 md:pt-12 pb-4 md:pb-8 px-4 md:px-6 bg-slate-100 rounded-lg gap-2 md:gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-indigo-700 mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>
              <h4 className='text-base uppercase font-bold'>Professional Development</h4>
              <p className=''>You can break the mold and take that first step to reach those sectors</p>
            </div>
            <div className='flex flex-col pt-8 md:pt-12 pb-4 md:pb-8 px-4 md:px-6 bg-slate-100 rounded-lg gap-2 md:gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-indigo-700 mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>
              <h4 className='text-base uppercase font-bold'>Community Networking</h4>
              <p className=''>You can break the mold and take that first step to reach those sectors</p>
            </div>
            <div className='flex flex-col pt-8 md:pt-12 pb-4 md:pb-8 px-4 md:px-6 bg-slate-100 rounded-lg gap-2 md:gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-indigo-700 mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
              <h4 className='text-base uppercase font-bold'>Socials</h4>
              <p className=''>You can break the mold and take that first step to reach those sectors</p>
            </div>
            <div className='flex flex-col pt-8 md:pt-12 pb-4 md:pb-8 px-4 md:px-6 bg-slate-100 rounded-lg gap-2 md:gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-indigo-700 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" /></svg>
              <h4 className='text-base uppercase font-bold'>Volunteerism</h4>
              <p className=''>You can break the mold and take that first step to reach those sectors</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default SectionAbout;