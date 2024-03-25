import React from 'react'

import Link from 'next/link';
import logomain from '../../../public/assets/ui/ftcc-landscape-logo.png';
import Image from 'next/image';

function NavBarMain() {

  return (
    <div id='navbar' className='flex flex-row justify-between items-center w-full z-20 px-6 lg:px-12 pt-8 pb-8 lg:pt-18 lg:pb-18 bg-white'>

      <div id="logo" className='w-[150px] lg:w-[200px] -ml-2 md:ml-0'>
        <Link href="/">
          <Image 
            src={logomain}
            alt='FTCC logo'
            sizes='
              (min-width: 60rem) 600px,
              (min-width: 28rem) 300px,
              300px
            '
            objectFit='fill'
          />
        </Link>
      </div>
      <div id="nav-contact  " className='font-heading text-sm font-semibold uppercase tracking-wide'>
        <ul className='flex flex-row items-center gap-6 lg:gap-12'>
          
          <li><Link href="#about" className='hidden hover:text-indigo-700 border-b-2 border-b-indigo-50/10 hover:border-b-2 hover:border-b-indigo-700 transition-all duration-300 md:flex flex-row justify-center items-center py-2 px-2'>About</Link></li>
          <li><Link href="#services" className='hidden hover:text-indigo-700 border-b-2 border-b-indigo-50/10 hover:border-b-2 hover:border-b-indigo-700 transition-all duration-300 md:flex flex-row justify-center items-center py-2 px-2'>Services</Link></li>
          <li><Link href="#join" className='hidden hover:text-indigo-700 border-b-2 border-b-indigo-50/10 hover:border-b-2 hover:border-b-indigo-700 transition-all duration-300 md:flex flex-row justify-center items-center py-2 px-2'>Membership</Link></li>
          <li><Link href="#news" className='hidden hover:text-indigo-700 border-b-2 border-b-indigo-50/10 hover:border-b-2 hover:border-b-indigo-700 transition-all duration-300 md:flex flex-row justify-center items-center py-2 px-2'>News</Link></li>
          <li><Link href="#contact" className='hidden hover:text-indigo-700 border-b-2 border-b-indigo-50/10 hover:border-b-2 hover:border-b-indigo-700 transition-all duration-300 md:flex flex-row justify-center items-center py-2 px-2'>Contact</Link></li>
          <li><Link href="https://github.com/ftcc-devs/ftcc-next" target='_blank'>
            <svg className="ml-4 w-6 sm:w-8 h-6 sm:h-8 fill-indigo-950" viewBox="0 0 20 20"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" className='fill-slate-800 hover:fill-indigo-700 transition duration-300'><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
          </Link></li>
          
        </ul>
      </div>

    </div>
  )
}

export default NavBarMain;