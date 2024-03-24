import React, { useRef } from 'react'
import Image from 'next/image';
import galleryphotos from '../data/GalleryImages';
import GalleryItem from './GalleryItem';

function SectionGallery() {
  
  const galleryItems =
    galleryphotos.map((photo: GalleryImage) => 
      <GalleryItem
        key={photo.id}
        id={photo.id}
        src={photo.src}
        title={photo.title}
      />
    )

  return (
    <div id='upcoming' className='col-span-2 mb-24 z-20'>
      <h3 className='uppercase font-bold mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Photo Gallery</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryItems}
      </div>
    </div>
  )
}

export default SectionGallery;