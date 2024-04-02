import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import galleryphotos from '@/app/data/GalleryImages';

function SectionGallery() {

  return (
    <div id='upcoming' className='col-span-2 mb-24 z-10'>
      <h3 className='uppercase font-bold mt-8 md:mt-0 mb-8 tracking-wider pb-4'>FTCC Members in-action</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        
        {galleryphotos.map((photo) => (
          <Link href={`../photos/${photo.id}`} key={photo.id} className='rounded-xl overflow-hidden hover:shadow-glow hover:border-4 hover:border-indigo-600 transition duration-300 relative aspect-video'>
            <Image
              src={photo.src}
              alt={photo.title}
              width={800}
              height={600}
              sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default SectionGallery;