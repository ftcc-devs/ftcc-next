import React from 'react'

type Color = {
  color : string;
}

export function BgFull(prop:Color) {
  return (
    <div className='w-full h-full'>
      {/* background gradient */}
      <div className={'w-full h-full absolute top-0 left-0 bg-'+prop.color}></div>
    </div>
  )
};

export function BgBottomFadeToWhite(prop:Color) {
  return (
    <div className='w-full h-full'>
      {/* background gradient */}
      <div className={'w-full h-60 absolute bottom-0 left-0 bg-gradient-to-b from-'+ prop.color +' bg-white z-10'}></div>
      <div className={'w-full h-full absolute top-0 left-0 bg-'+prop.color}></div>
    </div>
  )
};