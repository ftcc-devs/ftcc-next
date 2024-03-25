'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { bool } from 'sharp';
import Link from 'next/link';

interface GalleryImage {
  id: number;
  src: string;
  link?: string;
  title: string;
  album?: string;
  date?: string;
}

function GalleryItem({photo:GalleryImage}) {

  return (
    <Link href="/photo/[id]" key={props.id} className='rounded-xl overflow-hidden hover:shadow-glow hover:border-4 hover:border-indigo-600 transition duration-300 relative aspect-video'>
      <Image 
        src={props.src}
        alt={props.title}
        width='800'
        height='600'
        className='hover:scale-[1.1] transition duration-300 object-cover'
      />
    </Link>
  )
}

export default GalleryItem;