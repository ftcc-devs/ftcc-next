import PageFooter from '@/app/parts/PageFooter';
import PageHeader from '@/app/parts/PageHeader';
import React, { FC } from 'react';
import galleryphotos from '@/app/data/GalleryImages';
import Image from 'next/image';

interface ImageDetailPageProps {
  params: {
    id: string;
  }
}

const ImageDetailPage: FC<ImageDetailPageProps> = ({ params }) => {

  const photo:any = galleryphotos.find(p => p.id === params.id );

  return (
    <main className={`font-body text-base md:text-lg xl:text-base leading-relaxed flex flex-col items-center w-full text-slate-900 relative`}>
      <PageHeader />

      <div className='flex flex-col justify-start md:justify-center items-center w-full px-6 bg-transparent'>
        <div className='flex flex-col justify-start items:start w-full max-w-screen-lg py-20 md:py-36'>

          <div className='grid grid-cols-3 gap-8'>
            <div className='col-span-3 md:col-span-2 border-4 border-slate-900'>
              <Image
                src={photo.src}
                alt={photo.title}
                width={840}
                height={600}
                sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='col-span-3 md:col-span-1 *:border-b-2 *:md:pb-6 *:pb-3'>
              <p>Title: {photo.title}</p>
              <p>Event: {photo.date}</p>
              <p>Album: {photo.album}</p>
              <p>Link: {photo.link}</p>
            </div>
          </div>
        </div>
      </div>


      <PageFooter />
    </main>
  )
}

export default ImageDetailPage