import React from 'react'
import Image from 'next/image';
import ftccevent01 from '../../../public/assets/images/gallery/ftcc-event-01.webp';
import guests from '../../../public/assets/images/gallery/guests-01.webp';
import michaelspeaking from '../../../public/assets/images/gallery/michael-speaking-01.webp';

function SectionGallery() {
  return (
    <div id='upcoming' className='col-span-2 mb-24 z-20'>
      <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Photo Gallery</h3>
      
      <div id="services-gallery" className="grid grid-cols-2 md:grid-cols-3 gap-2">
        
        <a href='https://www.flickr.com/photos/ryanmacalandag/5903505691/' className='col-span-1 photo overflow-hidden hover:shadow-glow'>
          <Image
            src={ftccevent01}
            alt="FTCC event"
            width={500}
            height={500}
          />
        </a>
        <div className='col-span-1 photo overflow-hidden hover:shadow-glow'>
          <Image
            src={guests}
            alt="FTCC event"
            width={500}
            height={500}
          />
        </div>
        <div className='col-span-1 photo overflow-hidden hover:shadow-glow'>
          <Image
            src={michaelspeaking}
            alt="FTCC event"
            width={500}
            height={500}
          />
        </div>
        <div className='col-span-1 photo overflow-hidden hover:shadow-glow'>
          <Image
            src={ftccevent01}
            alt="FTCC event"
            width={500}
            height={500}
          />
        </div>
        <div className='col-span-1 photo overflow-hidden hover:shadow-glow'>
          <Image
            src={guests}
            alt="FTCC event"
            width={500}
            height={500}
          />
        </div>
        <div className='col-span-1 photo overflow-hidden hover:shadow-glow'>
          <Image
            src={michaelspeaking}
            alt="FTCC event"
            width={500}
            height={500}
          />
        </div>

      </div>
    </div>
  )
}

export default SectionGallery;