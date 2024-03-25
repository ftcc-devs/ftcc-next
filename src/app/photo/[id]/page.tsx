import PageFooter from '@/app/parts/PageFooter';
import PageHeader from '@/app/parts/PageHeader';
import React, { FC } from 'react';
import galleryphotos from '@/app/data/GalleryImages';
import ImageDetails from '@/app/components/ImageDetails';
import { GalleryImage } from '@/app/types/imagegallery';
import Image from 'next/image';

interface ImageDetailPageProps {
  params: {
    id: string;
  }
}

const ImageDetailPage: FC<ImageDetailPageProps> = ({ params }) => {

  const photo = galleryphotos[Number(params.id)-1]

  return (
    <div>
      <PageHeader />

      <div id='join' className='flex flex-col justify-start md:justify-center items-center w-full px-6 bg-transparent'>
        <div className='flex flex-col justify-start items:start w-full max-w-screen-xl py-20 md:py-36'>

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
            <div className='col-span-3 md:col-span-1 *:border-b-2 *:pb-6'>
              <p>Title: {photo.title}</p>
              <p>Event: {photo.date}</p>
              <p>Album: {photo.album}</p>
              <p>Link: {photo.link}</p>
            </div>
          </div>
        </div>
      </div>


      <PageFooter />
    </div>
  )
}

export default ImageDetailPage