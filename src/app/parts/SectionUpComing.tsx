import React from 'react'
import events from '../data/EventsData';

function showDate(d:string) {
  let parsed:Date = new Date(Date.parse(d));
  return parsed.toLocaleDateString('en-US',{
    day: '2-digit',
  });
}

function showMonth(d:string) {
  let parsed:Date = new Date(Date.parse(d));
  return parsed.toLocaleDateString('en-US',{
    month: 'long',
  });
}

function showTime(d:string) {
  let parsed:Date = new Date(Date.parse(d));
  return parsed.toLocaleTimeString('en-US');
}

function SectionUpComing() {

  const eventList = 
    events.map((e:FTCCEvent) => 
      <div key={e.id} className={`grid grid-cols-4 gap-4 md:gap-4 p-6 md:p-8 text-slate-100 hover:text-slate-100 bg-gradient-to-tr from-indigo-700 from-60% via-indigo-600 via-80% to-indigo-500 mb-0 md:mb-8 rounded-xl border-indigo-200 transition duration-300`}>
        <div className='col-span-1 md:col-span-4 flex flex-col items-center md:items-start mt-4'>
          <p className="font-heading text-5xl md:text-6xl mb-0 font-light px-4 sm:px-0 -ml-1">{showDate(e.date)}</p>
          <p className='uppercase text-base md:text-base font-heading font-semibold tracking-widest px-4 sm:px-0'>{showMonth(e.date)}</p>
        </div>
        <div className='col-span-3 md:col-span-4 flex flex-col justify-between'>
          <h4 className='text-xl font-semibold mb-4 tracking-tight leading-tight border-t-0 md:border-t border-b border-dotted py-3'>{e.title}</h4>
          <p className='mb-0 text-sm'>{showTime(e.date)}</p>
          <p className='mb-0 text-sm'>{e.venue}</p>
          <div className='flex flex-row gap-4 mt-6'>
            <a href="#" className='w-fit text-xs font-heading uppercase font-bold hover:text-sky-300 text-indigo-300 transition duration-300'>Go to event page</a>
            <a href="#" className='w-fit text-xs font-heading uppercase font-bold hover:text-sky-300 text-indigo-300 transition duration-300'>Add to calendar</a>
          </div>
        </div>
      </div>
    ) 

  return (
    <div id='upcoming' className='mb-8 z-20'>
      <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Upcoming Events</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 w-full">

        {eventList}

      </div>
    </div>
  )
}

export default SectionUpComing;