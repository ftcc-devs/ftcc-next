import React from 'react'

function SectionUpComing() {
  return (
    <div id='upcoming' className='mb-8 z-20'>
      <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Upcoming Events</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 w-full">
        <div className="grid grid-cols-3 justify-start items-start gap-4 md:gap-12 p-10 md:p-12 text-indigo-100 hover:text-slate-100 bg-indigo-600 hover:bg-indigo-800 mb-0 md:mb-8 border-2 border-indigo-600 transition duration-300">
          <div className='col-span-1 md:col-span-3 flex flex-col items-left md:items-left'>
            <p className="font-heading text-5xl md:text-8xl mb-0 font-light px-4 sm:px-0 -ml-3">03</p>
            <p className='uppercase text-sm md:text-base font-heading font-black tracking-widest px-4 sm:px-0'>May</p>
          </div>
          <div className='col-span-2 md:col-span-3 flex flex-col'>
            <h4 className='font-bold mb-2 tracking-tight'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <div className='flex flex-col gap-2 mt-6'>
              <a href="#" className='w-fit uppercase text-xs font-bold bg-transparent hover:bg-blue-600 hover:border-blue-600 border-2 border-slate-300 py-2 px-4 transition duration-300'>Visit FB event page</a>
              <a className='w-fit uppercase text-xs font-bold bg-transparent hover:bg-red-800 hover:border-red-700 border-2 border-slate-300 py-2 px-4 transition duration-300'  target="_blank" href="https://calendar.google.com/calendar/u/1/r/eventedit?text=FTCC+Inaugural+General+Assembly&dates=20201231T160000/20201231T170000">Add to Goggle Calendar</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3  justify-start items-start gap-4 md:gap-12 p-10 md:p-12 text-slate-800 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-300/60 border border-slate-300 mb-0 md:mb-8 transition duration-300">
          <div className='col-span-1 md:col-span-3 flex flex-col items-left md:items-left'>
            <p className="font-heading text-5xl md:text-8xl mb-0 font-light px-4 sm:px-0 -ml-3">08</p>
            <p className='uppercase text-sm md:text-base font-heading font-black tracking-widest px-4 sm:px-0'>June</p>
          </div>
          <div className='col-span-2 md:col-span-3 flex flex-col'>
            <h4 className='font-semibold mb-4'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <div className='flex flex-col gap-2 mt-6'>
              <a href="#" className='w-fit uppercase text-xs font-bold hover:bg-blue-600 hover:text-slate-100 hover:border-blue-600 border-2 border-slate-600 py-2 px-4 transition duration-300'>Visit FB event page</a>
              <a className='w-fit uppercase text-xs font-bold hover:bg-red-800 hover:text-slate-100 hover:border-red-800 border-2 border-slate-600 py-2 px-4 transition duration-300'  target="_blank" href="https://calendar.google.com/calendar/u/1/r/eventedit?text=FTCC+Inaugural+General+Assembly&dates=20201231T160000/20201231T170000">Add to Goggle Calendar</a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3  justify-start items-start gap-4 md:gap-12 p-10 md:p-12 text-slate-800 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-300/60 border border-slate-300 mb-0 md:mb-8 transition duration-300">
          <div className='col-span-1 md:col-span-3 flex flex-col items-left md:items-left'>
            <p className="font-heading text-5xl md:text-8xl mb-0 font-light px-4 sm:px-0 -ml-2">27</p>
            <p className='uppercase text-xs md:text-base font-heading font-black tracking-widest px-4 sm:px-0'>August</p>
          </div>
          <div className='col-span-2 md:col-span-3 flex flex-col'>
            <h4 className='font-semibold mb-4'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <div className='flex flex-col gap-2 mt-6'>
              <a href="#" className='w-fit uppercase text-xs font-bold hover:bg-blue-600 hover:text-slate-100 hover:border-blue-600 border-2 border-slate-600 py-2 px-4 transition duration-300'>Visit FB event page</a>
              <a className='w-fit uppercase text-xs font-bold hover:bg-red-800 hover:text-slate-100 hover:border-red-800 border-2 border-slate-600 py-2 px-4 transition duration-300'  target="_blank" href="https://calendar.google.com/calendar/u/1/r/eventedit?text=FTCC+Inaugural+General+Assembly&dates=20201231T160000/20201231T170000">Add to Goggle Calendar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionUpComing;