'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import logomain from '../../../public/assets/ui/ftcc-landscape-logo.png';
import Image from 'next/image';
import menuburger from '../../../public/assets/ui/menu-regular-36.png';
import menuclose from '../../../public/assets/ui/x-regular-36.png';

function NavBarMain() {

  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <div id='navbar' className='flex flex-row justify-between items-center md:items-end w-full z-20 px-6 lg:px-12 pt-6 pb-5 lg:pt-18 lg:pb-18 bg-white'>

      <div id="logo" className='w-[140px] lg:w-[160px] -ml-1 md:ml-0'>
        <Link href="/">
          <Image 
            src={logomain}
            alt='FTCC logo'
            sizes='
              (min-width: 1300px) 440px,
              (min-width: 720px) 360px,
              300px
            '
          />
        </Link>
      </div>
      <div className={`flex font-heading text-sm font-semibold uppercase tracking-wide ${menuToggle ? 'flex-row lg:flex lg-justify-start gap-0 items-center' : 'flex-col fixed justify-start items-end lg:items-end gap-6 w-full max-w-[240px] top-0 right-0 h-screen z-50 bg-indigo-950 px-10 py-12'}`}>
        <div id="nav-toggle" onClick={() => {setMenuToggle(!menuToggle)}} className={`w-8 h-8 ${menuToggle ? 'flex lg:hidden' : ''}`}>
          <Image
            src={menuToggle ? menuburger : menuclose}
            alt='menu toggle icon'
            width={32}
            height={32}
          />
        </div>
        <div id="nav-menu" className={`flex w-full h-full justify-between gap-20 ${menuToggle ? 'hidden lg:flex flex-col lg:flex-row items-center' : 'flex-col'}`}>
          <ul className={`lg:flex flex-row tracking-wider font-heading *:transition-all *:duration-300 *:py-2 *:px-2
                            ${menuToggle  ? 'hidden text-slate-700 gap-4 lg:gap-8' : 'flex flex-col justify-start items-start text-indigo-200 gap-4'}
                          `}>
            <li><Link href="/#about" className='hover:text-indigo-500'>About</Link></li>
            <li><Link href="/#services" className='hover:text-indigo-500'>Services</Link></li>
            <li><Link href="/#join" className='hover:text-indigo-500'>Membership</Link></li>
            <li><Link href="/#news" className='hover:text-indigo-500'>News</Link></li>
            <li><Link href="/#contact" className='hover:text-indigo-500'>Contact</Link></li>
          </ul>
          <div id="nav-utils" className={`flex lg:flex-row justify-start items-center p-2 gap-2 flex-row mb-20 ${menuToggle ? 'flex-row' : ''}`}>
              <Link href="https://github.com/ftcc-devs/ftcc-next" target='_blank'>
                <svg className={`w-6 sm:w-6 h-6 sm:h-6`} viewBox="0 0 20 20"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" className={`${menuToggle ? 'fill-slate-900 hover:fill-indigo-500 transition duration-300' : 'fill-indigo-300 hover:fill-indigo-500 transition duration-300'} `}><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
              </Link>
              <Link href="https://facebook.com/filotechcanberra" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${menuToggle ? 'fill-slate-900 hover:fill-indigo-500 transition duration-300' : 'fill-indigo-300 hover:fill-indigo-500 transition duration-300'} w-[29px] h-[29px] f`} viewBox="0 0 24 24"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
              </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBarMain;