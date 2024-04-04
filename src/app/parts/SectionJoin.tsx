import React from 'react'
import AccordionItem from './AccordionItem';
import HeadingSection from './HeadingSection';
import UIButton from '../components/UIButtons';
import Link from 'next/link';
import { UISVGArrowDown } from '../ui/UISVGelements';

function SectionJoin() {
  return (
    <div id='join' className='flex flex-col justify-start md:justify-center items-center w-full px-6 bg-transparent'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-28'>

        <HeadingSection 
          subtitle='Membership'
          title='Join our community'
        />

        <p>Keen to join our community? Joining is quite simple really. Here are some information regarding membership and application process.</p>
        
        <div className='flex flex-col my-6 md:my-12  border rounded-xl overflow-hidden *:border-b'>
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

        <UIButton href='/' version='primary'>Membership form</UIButton>

      </div>

      <div className='flex justify-center items-center mb-8 md:mb-20'>
          <Link href='/#news'>
            <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700' />
          </Link>
        </div>


    </div>
  );
}

export default SectionJoin;