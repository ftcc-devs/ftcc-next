import React from 'react'
import FtccLogo from '../components/SvgElements';

function NavBarMain() {

  return (
    <div className='flex flex-row justify-between items-center w-full pt-4 pb-6 z-20'>

      <div id="logo">
        <FtccLogo />
      </div>
      <div id="nav-contact  " className='font-heading text-base font-semibold uppercase tracking-wide'>
        <ul className='flex flex-row items-center gap-4 lg:gap-4'>
          
          <a href="#about" className='hidden hover:text-slate-600 transition-all duration-300 md:flex flex-row justify-center items-center gap-2 py-3 px-6'>About</a>
          <a href="#services" className='hidden hover:text-slate-600 transition-all duration-300 md:flex flex-row justify-center items-center gap-2 py-3 px-6'>Services</a>
          <a href="#join" className='hidden hover:text-slate-600 transition-all duration-300 md:flex flex-row justify-center items-center gap-2 py-3 px-6'>Membership</a>
          <a href="#news" className='hidden hover:text-slate-600 transition-all duration-300 md:flex flex-row justify-center items-center gap-2 py-3 px-6'>News</a>
          <a href="#contact" className='hidden hover:text-slate-600 transition-all duration-300 md:flex flex-row justify-center items-center gap-2 py-3 px-6'>Contact</a>
          <div>
          <a href=""></a>
          <svg className="w-8 h-8" viewBox="0 0 20 20"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>
          </div>
          


          {/* <a href="#" className='hidden md:flex flex-row justify-center items-center gap-2 py-3 px-6'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            <span>Search</span>
          </a>
          
          <a href="#" className='flex flex-row justify-center items-center gap-2 w-12 h-12 md:w-auto md:h-auto md:py-3 md:px-6 bg-gradient-to-r from-pink-900 to-pink-600 hover:to-pink-500 rounded-full text-slate-200 transition duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
            <span className='hidden md:flex'>Talk to us</span>
          </a> */}
        </ul>
      </div>

    </div>
  )
}

export default NavBarMain;