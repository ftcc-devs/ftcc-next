'use client';

import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';

function BackToTopButton() {

  const [isTopArea, setIsTopArea] = useState(true);

  const currentScroll = () => {
    let topAreaMax = 600;
    const scrollHeight = window.scrollY;
  
    if (scrollHeight < topAreaMax) {
      setIsTopArea(true);
    } else {
      setIsTopArea(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', currentScroll);
    return () => {
      window.removeEventListener('scroll', currentScroll);
    } 
  },);

  return (
      <Link
        id="back-to-top"
        href="#top"
        className={`z-40 bottom-6 md:bottom-12 right-6 md:right-12 rounded-full hover:shadow-glow transition duration-300
          ${isTopArea ? 'hidden' : 'fixed'}
        `}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 stroke-slate-50 bg-indigo-900 hover:bg-indigo-700 rounded-full flex justify-center items-center p-3 transition duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" /></svg>
      </Link>
  )
}

export default BackToTopButton;