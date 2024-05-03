import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";

import BackToTopButton from '../parts/BackToTopButton';
import HeadingSection from '../parts/HeadingSection';
import Image, { StaticImageData } from 'next/image';

import blankProfile from '../../../public/assets/images/profile.png'

import leadership2024 from '../data/Leadership2024';
import SectionLeaders from '../parts/SectionLeaders';
import SectionCommittees from '../parts/SectionCommittees';

export const metadata: Metadata = {
  title: 'Awards and Recognition'
}

export default function LeadershipPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='Leadership' />

      <div id='about' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
        <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-40 pb-10'>

          <HeadingSection 
            subtitle='Leadership'
            title='Get to know the leads'
          />

          {/* Executive Leadership */}
          <div id='executiveleads'>
            <div>
              <h4 className='uppercase font-bold mt-8 md:mt-12 mb-8 tracking-wider pb-0'>Executive Leadership 2024</h4>
              <p>This year, the new leadership team has been appointed by the founders Mike and Arvi to pass on the helm of building, leading and working towards a more sustainable and impactful FTCC.</p>
            <p>Here are the appointed leaders for 2024-2025:</p>
            </div>

            <div className='grid grid-cols-12 gap-8 mb-12 py-8 md:py-12 px-4 md:px-0'>
              <SectionLeaders />
            </div>
          </div>

          {/* Committee Leadership */}
          <div id='committeeleads'>
            <div>
              <h4 className='uppercase font-bold mt-8 md:mt-12 mb-8 tracking-wider pb-0'>Committee Leaderships 2024</h4>
              <p>Committees work on the principal works of the organisation. Special committees may also be added to lead/support special projects.</p>
            </div>

            <div className='grid grid-cols-12 gap-8 mb-12 py-8 md:py-12 px-4 md:px-0'>
              <SectionCommittees />
            </div>
          </div>

        </div>

      </div>

      <BackToTopButton />
      <Footer />

    </main>
  )
}
