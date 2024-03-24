import React from 'react'
import AccordionItem from './AccordionItem';

function SectionJoin() {
  return (
    <div id='join' className='flex flex-col justify-start md:justify-center items-center w-full px-6 bg-transparent'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-36'>

        <div className='flex flex-col items-start w-full pb-8 md:pb-16'>
          <h3 className='text-md font-semibold uppercase text-indigo-900 tracking-wider'>Membership</h3>
          <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>Join our community</h2>
        </div>
        <p className=''>Community building isn&apos;t easy, especially when you are operating without funding.</p>
        
        <div className='flex flex-col my-8 border-2 rounded-xl *:border-b-2 last-of-type:border-b-0 overflow-hidden'>
          <AccordionItem 
            title="Eligibility"
            content="Community building isn&apos;t easy, especially when you are operating without funding and are relying on volunteer time. But hearing the feedback like the above makes us think our efforts are worth it, knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community."
          />
          <AccordionItem 
            title="Membership Process"
            content="Knowing that we can have a positive impact on others and even inspire them to think of ways on how to help others as well. Regardless of your age, status, gender, or background, you can find a way to pay it forward and help people in our community."
          />
        </div>

        <a href="#about" className='flex flex-row justify-between items-center gap-8 w-[16rem] hover:w-[20rem] font-heading text-sm font-semibold uppercase my-12 px-4 md:px-8 py-4 bg-indigo-700 hover:bg-indigo-900 border-2 border-indigo-700 hover:border-indigo-900 hover:shadow-glow text-indigo-100 hover:text-white rounded-lg tracking-wider transition-all duration-300'>
          <span>Signup form</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
          </span>
          </a>

      </div>


    </div>
  );
}

export default SectionJoin;