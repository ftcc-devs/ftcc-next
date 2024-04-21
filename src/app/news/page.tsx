import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";

import BackToTopButton from '../parts/BackToTopButton';
import SectionUpComing from '../parts/SectionUpComing';
import HeadingSection from '../parts/HeadingSection';
import SectionMediaMentions from '../parts/SectionMediaMentions';

export const metadata: Metadata = {
  title: 'News'
}

export default function NewsPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='News' />

      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg px-6 md:px-0 pt-20 md:pt-40 relative'>

        <HeadingSection 
          subtitle='News and Updates'
          title='What&apos;s the Latest'
        />

        <SectionUpComing />
        <SectionMediaMentions />

        {/* connections background */}
        <div className="bg-connections w-full h-full absolute -z-10 bg-slate-200 -bottom-28 md:-bottom-40 left-0"></div>

      </div>

      <BackToTopButton />
      <Footer />

    </main>
  )
}
