import Footer from '@/app/parts/Footer';
import PageHeader from '@/app/parts/PageHeader';
import React, { FC } from 'react';
import galleryphotos from '@/app/data/GalleryImages';
import Image from 'next/image';
import UIPageNav from '@/app/ui/UIPageNav';

import { Metadata } from "next";
import UIDivider from '@/app/ui/UIDivider';
import { UISVGOpenNewWindow } from '@/app/ui/UISVGelements';

export const metadata: Metadata = {
  title: 'Photo Details',
}

interface ImageDetailPageProps {
  params: {
    id: string;
  }
}

const ImageDetailPage: FC<ImageDetailPageProps> = ({ params }) => {

  const photo:any = galleryphotos.find(p => p.id === params.id );

  const photoDate = () => {
    const date = new Date(photo.date)
    return <span>{`${ date }`}</span>
  }

  return (
    <main className={`font-body text-base md:text-lg xl:text-base leading-relaxed flex flex-col items-center w-full relative`}>
      
      <PageHeader title={photo.title} />

      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg px-6 pb-20 md:pb-28'>

      <div className='flex flex-row w-full mt-10 md:mt-24 mb-10 bg-slate-500/10 rounded-lg overflow-hidden'>
          <UIPageNav />
        </div>

        <div className='grid grid-cols-3 gap-8 w-full'>
          <div className='col-span-3 md:col-span-3 overflow-hidden w-full'>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1200}
              height={800}
              sizes='
                (max-width: 700px) 100vw,
                (max-width: 1200px) 60vw,
                60vw
              '
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className='col-span-3 md:col-span-3 *:border-b *:border-b-slate-400/20 *:md:pb-4 *:pb-2 *:flex *:flex-row *:gap-2'>
            <p>Title: &quot;{photo.title}&quot;</p>
            <p>Date: {photoDate()}</p>
            <p>Album: {photo.album} <a href={photo.link} target='_blank'><UISVGOpenNewWindow /></a></p>
            
          </div>
        </div>
      </div>

      <UIDivider />

      <Footer />
    </main>
  )
}

export default ImageDetailPage