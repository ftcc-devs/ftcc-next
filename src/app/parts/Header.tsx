import React from 'react';
import NavBarMain from './NavBarMain';
import HeroHome01 from './HeroHome01';
import { BgBottomFadeToWhite, BgFull } from '../components/BgGradients';

function Header() {
  return (
    <div className='flex flex-col w-full items-center bg-transparent px-6 lg:px-12 py-8 lg:py-18 relative'>

      <NavBarMain />
      <HeroHome01 />

      <div className="bg-connections w-full max-h-full h-full absolute -z-10 bg-slate-200 rotate-90 -bottom-32"></div>

      {/* solid background */}
      <div className='w-full h-full absolute top-0 left-0 bg-indigo-50 -z-20'></div>

    </div>
  )
}

export default Header;