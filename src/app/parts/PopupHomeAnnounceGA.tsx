'use client'

import Image from 'next/image'
import popupImage from '../../../public/assets/images/popup-image-inaugural-ga-02-x2.jpg'
import menuclose from '../../../public/assets/ui/x-regular-36.png';
import { useState } from 'react';
import UIButton from '../components/UIButtons';
import eventlogo from '../../../public/assets/images/event-logo-01.png'

function PopupHomeAnnounceGA() {

  const [closePopup, setClosePopup] = useState(false);

  return (
    <div className={`fixed top-0 left-0 z-50 w-full h-screen text-sm md:text-lg justify-center items-center bg-slate-900/90 dark:bg-slate-900/90 p-8 ${closePopup ? 'hidden' : 'flex'}`}>
      
      <div className='relative z-50 w-fit max-w-[1000px] h-fit max-h-[640px] grid grid-rows-3 sm:grid-cols-2 border-0 border-white rounded-xl bg-indigo-50 dark:bg-indigo-950 shadow-lg overflow-hidden'>
        <div className='row-span-2 sm:row-span-3 h-full sm:col-span-1 flex flex-col justify-between px-8 md:px-12 pt-10 md:pt-20 pb-6'>
          <div>
            <div className='mb-2 mt-4 md:mt-12'>03 May 2024 | AWS Canberra</div>
            <h2 className='text-3xl lg:text-5xl pr-0 font-bold'>FTCC Inaugural General Assembly</h2>
            <p className='mt-4 md:mt-8 font-bold mb-2 md:mb-4'>🎉 Join Us for the Filipino Tech Community in Canberra&apos;s Inaugural General Assembly! </p>
            <p className=''>🤩 We&apos;re excited to invite you to an important gathering dedicated to shaping the future of FTCC.</p>
          </div>
          <UIButton href='https://www.facebook.com/events/7301289616591606' target='_blank' version='secondary'>RSVP to Event</UIButton>
        </div>
        <div className='row-span-1 sm:row-span-3 h-full sm:col-span-1 object-cover overflow-hidden relative'>
          <div className='w-2/3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <Image
              src={eventlogo}
              alt='Inaugural General Assembly'
              width={939}
              height={433}
              className=''
            />
          </div>
          <div className='object-cover w-full h-full overflow-hidden'>
            <Image
              src={popupImage}
              alt='Inaugural General Assembly'
              width={500}
              height={640}
              priority={true}
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