import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";

import BackToTopButton from '../parts/BackToTopButton';
import UIDivider from '../ui/UIDivider';
import SectionServices from '../parts/SectionServices';

export const metadata: Metadata = {
  title: 'Services'
}

export default function ServicesPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='Services' />

      <SectionServices />

      <BackToTopButton />
      <Footer />

    </main>
  )
}
