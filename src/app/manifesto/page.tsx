import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import { Metadata } from "next";
import Image from 'next/image';

import BackToTopButton from '../parts/BackToTopButton';
import HeadingSection from '../parts/HeadingSection';

import Link from 'next/link';
import { UISVGArrowDown } from '../ui/UISVGelements';

import logoReverse from '../../../public/assets/logos/ftcc logo symbol reverse.png'
import logoElement from '../../../public/assets/logos/logo-git-element@4x.png'
import elemementNetwork from '../../../public/assets/logos/element-network.png'
import elemementBranch from '../../../public/assets/logos/element-branch.png'
import elemementShare from '../../../public/assets/logos/element-share.png'
import logofullreverse from '../../../public/assets/images/ftcc lanscape logo reverse.svg'

import SectionTestimonial from '../parts/SectionTestimonial';

export const metadata: Metadata = {
  title: 'Manifesto'
}

export default function ManifestoPage() {
  return (
    <main className={`font-body text-base md:text-lg leading-relaxed flex flex-col w-full justify-center items-center relative snap-proximity snap-y scroll-m-0 scroll-pt-0 bg-indigo-900`}>

      {/* <PageHeader title='Manifesto' /> */}

      {/* Slide 01 */}
      <div id='slide-01' className='w-full min-h-[100dvh] h-full flex flex-col justify-center items-center bg-orange-50 relative p-12'>
            
        <div className='text-6xl md:text-8xl tracking-tighter italic dark:text-slate-800'>
          This is the way
        </div>

        <div className='absolute z-50 bottom-2 flex justify-center items-center mb-8 md:mb-20 bg-indigo-700 hover:bg-transparent hover:border-2 border-indigo-700 p-4 transition duration-300 rounded-full'>
          <Link href='#slide-02'>
          <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 hover:stroke-indigo-700 stroke-indigo-200 hover:scale-125 transition duration-300' />
          </Link>
        </div>

      </div>
      {/* Slide 02 */}
      <div id='slide-02' className='w-full h-full min-h-[100dvh] flex flex-col justify-center items-center bg-slate-800 relative p-12'>
            
          <div className="w-full h-full grid grid-cols-12 place-content-center gap-8">
            <Image
              src={logoReverse}
              alt='logo'
              width={300}
              height={600}
              className='col-span-12 md:col-span-12 mx-auto p-8'
            />
          </div>

        <div className='absolute z-50 bottom-2 flex justify-center items-center mb-8 md:mb-20 bg-indigo-800 p-4 rounded-full'>
          <Link href='#slide-03'>
          <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
          </Link>
        </div>
      </div>
      {/* Slide 03 */}
      <div id='slide-03' className='w-full h-full min-h-[100dvh] flex flex-col justify-center items-center bg-orange-50 relative'>
            
          <div className="w-full grid grid-cols-12 place-content-center gap-8 px-32">
            <Image
              src={logoElement}
              alt='logo'
              width={300}
              height={600}
              className='col-span-12 md:col-span-5 mx-auto p-20 md:p-6 rotate-[-40deg]'
            />
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className='text-4xl md:text-6xl xl:text-6xl'>The three-node icon is a familiar symbol in tech.</div>
            </div>
          </div>

        <div className='absolute z-50 bottom-2 flex justify-center items-center mb-8 md:mb-20 bg-indigo-800 p-4 rounded-full'>
          <Link href='#slide-04'>
          <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
          </Link>
        </div>
      </div>
      {/* Slide 04 */}
      <div id='slide-04' className='w-full min-h-[100dvh] flex flex-col justify-center items-center bg-orange-100 relative'>
            
          <div className="md:w-[4/5] h-full grid grid-cols-12 place-content-center gap-4 p-12">
            <div className='col-span-12 md:col-span-4 px-12 flex flex-col gap-4 md:gap-12 justify-center items-center'>
              <Image
                src={elemementNetwork}
                alt='logo'
                width={300}
                height={600}
                className='p-8'
              />
              <div className='flex flex-col justify-center text-center'>
                <p className='text-4xl md:text-5xl'>Networking</p>
                <p>getting together, building a community</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4 px-12 flex flex-col gap-4 md:gap-12 justify-center items-center'>
              <Image
                src={elemementBranch}
                alt='logo'
                width={300}
                height={600}
                className='p-8'
              />
              <div className='flex flex-col justify-center text-center'>
                <p className='text-4xl md:text-5xl'>Git Branch</p>
                <p>collaboration, innovation</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4 px-12 flex flex-col gap-4 md:gap-12 justify-center items-center'>
              <Image
                src={elemementShare}
                alt='logo'
                width={300}
                height={600}
                className='p-8'
              />
              <div className='flex flex-col justify-center text-center'>
                <p className='text-4xl md:text-5xl'>Share</p>
                <p>sharing of resources, skills and talents</p>
              </div>
            </div>
          </div>

        <div className='absolute z-50 bottom-2 flex justify-center items-center mb-8 md:mb-20 bg-indigo-800 p-4 rounded-full'>
          <Link href='#slide-05'> 
          <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
          </Link>
        </div>
      </div>
      {/* Slide 05 */}
      <div id='slide-05' className='w-full h-full min-h-[100dvh] flex flex-col justify-center items-center bg-indigo-900 relative'>
            
          <div className="w-full grid grid-cols-12 place-content-center gap-8 px-32">
            <Image
              src={logoReverse}
              alt='logo'
              width={300}
              height={600}
              className='col-span-12 md:col-span-5 mx-auto p-12 md:p-4 rotate-[-40deg]'
            />
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className='font-heading text-white text-2xl md:text-4xl mb-4'>In order to achieve our goals,</div>
              <div className='text-2xl md:text-5xl xl:text-6xl text-white'>our job is to build a community together through collaboration, innovation and sharing of skills, talents and time.</div>
            </div>
          </div>

        <div className='absolute z-50 bottom-2 flex justify-center items-center mb-8 md:mb-20 bg-indigo-800 p-4 rounded-full'>
          <Link href='#slide-06'>
            <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
          </Link>
        </div>
      </div>
      {/* Slide 06 */}
      <div id='slide-06' className='w-full min-h-[100dvh] h-full flex flex-col gap-20 justify-center items-center bg-indigo-700 relative p-12'>
            
        <Image
          src={logofullreverse}
          alt='logo'
          width={800}
          height={600}
          className='col-span-12 md:col-span-5 mx-auto p-12 md:p-4'
        />
        <div className='text-base tracking-tighter italic text-white'>
          This is the way
        </div>

      </div>

      <SectionTestimonial />

      {/* <BackToTopButton /> */}
      {/* <Footer /> */}

    </main>
  )
}
