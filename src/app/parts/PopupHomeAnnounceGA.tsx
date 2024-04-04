'use client'

import Image from 'next/image'
import popupImage from '../../../public/assets/images/popup-image-inaugural-ga-02-x2.jpg'
import menuclose from '../../../public/assets/ui/x-regular-36.png';
import { useState } from 'react';
import UIButton from '../components/UIButtons';

function PopupHomeAnnounceGA() {

  const [closePopup, setClosePopup] = useState(false);

  return (
    <div className={`fixed top-0 left-0 z-30 w-full h-screen text-sm md:text-lg justify-center items-center bg-slate-900/90 p-8 ${closePopup ? 'hidden' : 'flex'}`}>
      
      <div className='relative z-50 w-[1000px] h-[640px] flex flex-col md:flex-row border-0 border-white rounded-xl bg-indigo-50 shadow-lg overflow-hidden'>
        <div className='flex flex-col justify-between px-8 md:px-12 pt-10 md:pt-20 pb-6'>
          <div>
            <div className='mb-2 mt-4 md:mt-12'>03 May 2024 | AWS Canberra</div>
            <h2 className='text-3xl lg:text-5xl pr-0 font-bold'>FTCC Inaugural General Assembly</h2>
            <p className='mt-4 md:mt-8 font-bold mb-2 md:mb-4'>Inviting all FTCC members!</p>
            <p className=''>After having formally registered as an incorporated association in the ACT this year, FTCC is holding its first ever General Assembly meeting.</p>
          </div>
          <UIButton href='/rsvp' version='secondary'>RSVP to Event</UIButton>
        </div>
        <div className='w-full md:w-1/2 flex-shrink-0 object-cover overflow-hidden'>
          <div className='object-cover w-full h-full overflow-hidden'>
            <Image
              src={popupImage}
              alt='Inaugural General Assembly'
              sizes='(max-width: 1200px) 60vw,d
                      (max-width: 800px) 80vw,
                      50vw'
              quality={80}
              className='w-full h-full object-cover max-w-full overflow-hidden'
            />
          </div>
        </div>

        <div>
          <Image
            src={menuclose}
            alt='close'
            width={36}
            height={36}
            className='absolute top-6 right-6 bg-slate-600/30 hover:bg-slate-300/30 rounded-lg transition duration-300'
            onClick={() => { setClosePopup(true)}}
          />
        </div>

      </div>

    </div>
  )
}

export default PopupHomeAnnounceGA