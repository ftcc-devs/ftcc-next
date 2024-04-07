import React from 'react'
import AccordionItem from './AccordionItem';
import HeadingSection from './HeadingSection';
import UIButton from '../components/UIButtons';
import Link from 'next/link';
import { UISVGArrowDown } from '../ui/UISVGelements';
import UIAccordion from '../ui/UIAccordion';
import UIAccordionItem from '../ui/UIAccordionItem';

function SectionJoin() {
  return (
    <div id='join' className='flex flex-col justify-start md:justify-center items-center w-full px-6 bg-transparent'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-28'>

        <HeadingSection 
          subtitle='Membership'
          title='Join our community'
        />

        <p>Keen to join our community? Joining is quite simple really. Here are some information regarding membership and application process.</p>
        
        <UIAccordion className='flex flex-col my-3 md:my-8 border border-slate-300 dark:border-slate-500 rounded-xl overflow-hidden *:border-b-slate-300 *:dark:border-b-slate-500'>
          <UIAccordionItem title='Membership Benefits' className=''>
            <p>Members get to enjoy the benefits of being in a nurturing, inspiring and collaborative community. Member-only programs provide career-building tools, networking potentials and mentorship opportunities.</p>
          </UIAccordionItem>
          <UIAccordionItem title='Eligibility'>
            <p>Must have the following these credentials:</p>
            <ul className='list-square pl-10 *:mb-4'>
              <li>firstly, an applicant needs to be Filipino or of Filipino decent;</li>
              <li>secondly, applicant has to be one of these: tech professiona, ICT student, or tech enthuasiast.</li>
            </ul>
          </UIAccordionItem>
          <UIAccordionItem title='Membership Process'>
            <p>Membership form is provided for applicants and a yearly membership fee of $1 or $2 is required.</p>
          </UIAccordionItem>
        </UIAccordion>

        <UIButton href='/' version='primary'>Membership form</UIButton>

      </div>

      <div className='flex justify-center items-center mb-8 md:mb-20'>
          <Link href='/#news'>
          <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
          </Link>
        </div>


    </div>
  );
}

export default SectionJoin;