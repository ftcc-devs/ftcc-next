import React from 'react'

function MastheadNoteBottom() {
  return (
    <div className='group flex flex-row justify-between w-full max-w-full md:w-fit md:max-w-3/5 lg:max-w-3/5 mb-0 md:mb-2 bg-orange-100 text-slate-700 rounded-lg overflow-hidden mt-0'>
      <div className='flex items-center p-4 bg-orange-200'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-orange-800 group-hover:animate-pulse"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" /></svg>
      </div>
      <div className='font-heading flex-grow text-sm text-left sm:text-base pl-4 pr-8 pt-3 sm:pt-4 max-w-screen-md leading-4'>Starting our inaugural year as an incorporated association in the ACT.</div>
    </div>
  )
}

export default MastheadNoteBottom;