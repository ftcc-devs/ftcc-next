import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";

import BackToTopButton from '../parts/BackToTopButton';
import HeadingSection from '../parts/HeadingSection';
import UIAccordion from '../ui/UIAccordion';
import UIAccordionItem from '../ui/UIAccordionItem';
import Image from 'next/image';

import pasimunoTrophy from '../../../public/assets/images/pasimuno-award.png'
import techiesAward from '../../../public/assets/images/techie-awards.png'

export const metadata: Metadata = {
  title: 'Awards and Recognition'
}

export default function AwardsPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='Awards and Recognition' />

      <div id='about' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
        <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-40 pb-10'>

          <HeadingSection 
            subtitle='Awards and Recognition'
            title='Annual Awards 2024'
          />

          <p>This year, during our inaugural general assembly, one of our principal agendas is to make sure FTCC members who have done exemplary work are recognised.</p>
          <p>Here are this year&apos;s awards:</p>

          <UIAccordion className='flex flex-col my-3 md:my-8 border border-slate-300 dark:border-slate-500 rounded-xl overflow-hidden *:border-b-slate-300 *:dark:border-b-slate-500'>
            <UIAccordionItem title='Pasimuno Award' className=''>
              <div className='grid grid-cols-6 gap-10'>
                <div className='col-span-6 md:col-span-2'>
                  <Image
                    src={pasimunoTrophy}
                    alt='Pasimuno trophy'
                    width={500}
                    height={600}
                    className='px-16 py-8'
                  />
                </div>
                <div className='col-span-6 md:col-span-4'>
                  <p>This prestigious and exclusive award is presented to members with undeniable pioneering character and proven leadership skills.</p>
                  <p>This year, this award goes to the following members:</p>
                  <ul className='list-square pl-12 my-8'>
                    <li>Full name of recepient</li>
                    <li>Full name of recepient</li>
                    <li>Full name of recepient</li>
                  </ul>
                </div>
              </div>
            </UIAccordionItem>
            <UIAccordionItem title='Techie Awards'>
            <div className='grid grid-cols-6 gap-10'>
                <div className='col-span-6 md:col-span-2'>
                  <Image
                    src={techiesAward}
                    alt='Tech Excellence 2024'
                    width={500}
                    height={600}
                    className='px-4 py-4'
                  />
                </div>
                <div className='col-span-6 md:col-span-4'>
                  <p>This prestigious and exclusive award is presented to members with undeniable pioneering character and proven leadership skills.</p>
                  <p>This year, this award goes to the following members:</p>
                  <ul className='list-square pl-12 my-8'>
                    <li>Full name of recepient</li>
                    <li>Full name of recepient</li>
                    <li>Full name of recepient</li>
                  </ul>
                </div>
              </div>
            </UIAccordionItem>
          </UIAccordion>

        </div>
      </div>

      <BackToTopButton />
      <Footer />

    </main>
  )
}
