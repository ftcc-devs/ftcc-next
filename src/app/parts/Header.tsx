import React from 'react';
import NavBarMain from './NavBarMain';
import HeroHome01 from './HeroHome01';
import { BgBottomFadeToWhite, BgFull } from '../components/BgGradients';

function Header() {
  return (
    <div className='flex flex-col w-full items-center px-6 lg:px-12 py-8 lg:py-18 relative overflow-hidden'>

      <NavBarMain />
      <HeroHome01 />

      {/* <div className="bg-connections hidden w-full h-full absolute z-10 bg-slate-200 rotate-180 left-0 translate-y-[60%]"></div> */}

      {/* solid background */}
      <div className='w-full h-full absolute top-0 left-0 bg-indigo-50 bg-fairy-floss'></div>

    </div>
  )
}

export default Header;