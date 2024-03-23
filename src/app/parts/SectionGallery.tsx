import React, { useRef } from 'react'
import Image from 'next/image';
import galleryphotos from '../data/GalleryImages';


function SectionGallery() {
  
  const galleryItems =
    galleryphotos.map((photo: GalleryImage) => 
      <a href={photo.link} key={photo.id} target='_blank' className='rounded-xl overflow-hidden hover:shadow-glow hover:border-4 hover:border-indigo-600 transition duration-300 relative aspect-video'>
        <Image 
          src={photo.src}
          alt={photo.title}
          width='800'
          height='600'
          className='hover:scale-[1.1] transition duration-300 object-cover'
        />
      </a>
    )

  return (
    <div id='upcoming' className='col-span-2 mb-24 z-20'>
      <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Photo Gallery</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {galleryItems}
      </div>
    </div>
  )
}

export default SectionGallery;