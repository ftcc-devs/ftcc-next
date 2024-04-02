import React from 'react'
import AccordionItem from './AccordionItem';
import HeadingSection from './HeadingSection';

function SectionJoin() {
  return (
    <div id='join' className='flex flex-col justify-start md:justify-center items-center w-full px-6 bg-transparent'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-36'>

        <HeadingSection 
          subtitle='Membership'
          title='Join our community'
        />

        <p>Keen to join our community? Joining is quite simple really. Here are some information regarding membership and application process.</p>
        
        <div className='flex flex-col my-3 md:my-8 border-2 rounded-xl overflow-hidden *:border-b-2'>
          <AccordionItem 
            title="Membership Benefits"
            content="Members get to enjoy the benefits of being in a nurturing, inspiring and collaborative community. Member-only programs provide career-building tools, networking potentials and mentorship opportunities."
          />
          <AccordionItem 
            title="Eligibility"
            content="Must have the following two (2) credentials: firstly, an applicant needs to be Filipino or of Filipino decent; secondly, applicant has to be either a) tech professional (in IT or non-IT field), b) ICT student, or c) tech enthuasiast."
          />
          <AccordionItem 
            title="Membership Process"
            content="Membership form is provided for applicants and a yearly membership fee of $1 or $2 is required."
          />
        </div>

        <a href="#about" className='flex flex-row justify-between items-center gap-8 w-[20rem] hover:w-[22rem] font-heading text-sm font-semibold uppercase my-8 px-6 md:px-8 py-4 bg-indigo-700 hover:bg-indigo-900 border-2 border-indigo-700 hover:border-indigo-900 hover:shadow-glow text-indigo-100 hover:text-white rounded-lg tracking-wider transition-all duration-300'>
          <span>Link to Google Form</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
          </span>
        </a>

      </div>


    </div>
  );
}

export default SectionJoin;