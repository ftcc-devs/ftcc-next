import Link from 'next/link';
import React from 'react'

function BackToTopButton() {
  return (
    <div id='back-to-top' className='fixed bottom-12 right-12 h-12 w-12 rounded-full z-100 hover:shadow-glow hover:-translate-y-2 transition duration-300'>
      <Link href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 stroke-white bg-indigo-900 hover:bg-indigo-700 rounded-full flex justify-center items-center p-3 transition duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" /></svg>
      </Link>
    </div>
  )
}

export default BackToTopButton;