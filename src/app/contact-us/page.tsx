import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";

import BackToTopButton from '../parts/BackToTopButton';
import SectionContact from '../parts/SectionContact';

export const metadata: Metadata = {
  title: 'Contact Us'
}

export default function ContactUsPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='Contact Us' />

      <SectionContact />

      <BackToTopButton />
      <Footer />

    </main>
  )
}
