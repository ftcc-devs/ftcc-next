'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { bool } from 'sharp';

function GalleryItem(props:GalleryImage) {

  return (
    <div key={props.id} className='rounded-xl overflow-hidden hover:shadow-glow hover:border-4 hover:border-indigo-600 transition duration-300 relative aspect-video'>
      <Image 
        src={props.src}
        alt={props.title}
        width='800'
        height='600'
        className='hover:scale-[1.1] transition duration-300 object-cover'
      />
    </div>
  )
}

export default GalleryItem;