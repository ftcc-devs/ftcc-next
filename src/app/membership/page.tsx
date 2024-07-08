import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";

import BackToTopButton from '../parts/BackToTopButton';
import SectionJoin from '../parts/SectionJoin';
import SectionMembershipPay from '../parts/SectionMembershipPay';

export const metadata: Metadata = {
  title: 'Membership'
}

export default function MembershipPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PageHeader title='Membership' />

      <SectionJoin />

      <div className='flex flex-row w-full py-16'></div>

      <BackToTopButton />
      <Footer />

    </main>
  )
}
