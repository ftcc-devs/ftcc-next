import React from 'react'
import SectionPillars from './SectionPillars';
import HeadingSection from './HeadingSection';
import AccordionItem from './AccordionItem';
import { UISVGArrowDown } from '../ui/UISVGelements';
import Link from 'next/link';
import UIAccordion from '../ui/UIAccordion';
import UIAccordionItem from '../ui/UIAccordionItem';

function SectionAbout() {
  return (
    <div id='about' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg pt-20 md:pt-40 pb-10'>

        <HeadingSection 
          subtitle='About us'
          title='Who we are'
        />

        <p>We are a community of Filipino tech professionals, students and enthusiasts in Canberra with a shared mission to provide a warm and nurturing space where each member can grow and thrive.</p>

        <UIAccordion className='flex flex-col my-3 md:my-8 border border-slate-300 dark:border-slate-500 rounded-xl overflow-hidden *:border-b-slate-300 *:dark:border-b-slate-500'>
          <UIAccordionItem title='Our Vision and Mission' className=''>
            <p>FTCC&apos;s mission is to connect, support, and upskill Filipino ICT professionals in Australia and to represent Filipino professionals as highly-skilled and globally competitive talents contributing to Australia&apos;s goal of becoming a top digital economy by 2030.</p>
            <p>To represent Filipino professionals as highly-skilled and globally competitive talents contributing to Australia&apos;s goal of becoming a top digital economy by 2030.</p>
          </UIAccordionItem>
          <UIAccordionItem title='Our Objectives'>
            <p>Our objectives include:</p>
            <ul className='list-square pl-10 *:mb-4'>
              <li>providing a platform to network with peers, share experiences and ideas, and collaborate within the Filipino Tech Community in the ACT,</li>
              <li>enabling and upskilling Filipino professionals/advocates/students to broaden/deepen their tech knowledge and skills, advance their careers, and remain relevant with the fast-pace developments in the ICT industry, and</li>
              <li>supporting Filipino migrants and ACT residents wanting to start a career in ICT.</li>
            </ul>
          </UIAccordionItem>
        </UIAccordion>


        <div id='pillars' className='mb-8'>
          <div>
            <h4 className='uppercase font-bold mt-8 md:mt-12 mb-8 tracking-wider pb-0'>Pillars of Identity</h4>
            <p>We are a community who share the same dreams and aspirations about ourselves. These are our common bonds, the shared pillars of who we are:</p>
          </div>

          <div id="pillars" className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12'>
            
            <SectionPillars />

          </div>
        </div>

        <div className='flex justify-center items-center mt-8 md:mt-20'>
          <Link href='/#services'>
            <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default SectionAbout;