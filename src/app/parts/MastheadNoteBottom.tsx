import React from 'react'

function MastheadNoteBottom() {
  return (
    <div className='flex flex-row justify-between w-full max-w-full md:w-fit md:max-w-3/5 lg:max-w-3/5 mb-0 md:mb-8 bg-sky-100 rounded-lg overflow-hidden mt-0 md:mt-6'>
      <div className='flex items-center p-4 bg-sky-200'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-sky-600"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" /></svg>
      </div>
      <div className='font-heading text-sm lg:text-base text-slate-500 p-4 max-w-fit'>We are now starting our inaugural year as an incorporated association having granted certification in the ACT!</div>
    </div>
  )
}

export default MastheadNoteBottom;