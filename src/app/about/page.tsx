import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";

import BackToTopButton from '../parts/BackToTopButton';
import SectionAbout from '../parts/SectionAbout';
import SectionGallery from '../parts/SectionGallery';

export const metadata: Metadata = {
  title: 'About Us'
}

export default function AboutUsPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='About Us' />

      <SectionAbout />

      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg'>
        <SectionGallery />
      </div>

      <BackToTopButton />
      <Footer />

    </main>
  )
}
