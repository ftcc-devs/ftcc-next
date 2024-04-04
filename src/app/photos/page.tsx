import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import React, { FC } from 'react';
import galleryphotos from '@/app/data/GalleryImages';
import Image from 'next/image';
import Link from 'next/link';
import HeadingSection from '../parts/HeadingSection';
import UIDivider from '../ui/UIDivider'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Photo Gallery'
}

function PhotosPage() {

  return (
    <main className={`font-body text-base md:text-lg xl:text-base leading-relaxed flex flex-col items-center w-full text-slate-900 relative`}>
      
      <PageHeader title='Photo Gallery' />

      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg px-6 py-20 md:py-28'>

        <HeadingSection 
          subtitle='Photo Gallery'
          title='Two years of FTCC'
        />

        <div className='flex flex-col justify-start md:justify-center items-center w-full bg-transparent'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"> 
            {galleryphotos.map((photo) => (
              <Link href={`../photos/${photo.id}`} key={photo.id} className='rounded transition duration-300 relative aspect-video overflow-hidden'>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={800}
                  height={600}
                  sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  className='hover:scale-[1.1] transition duration-300'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <UIDivider />

      <Footer />
    </main>
  )
}

export default PhotosPage;