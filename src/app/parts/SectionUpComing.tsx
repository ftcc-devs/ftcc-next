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
    month: 'short',
  });
}

function showDay(d:string) {
  let parsed:Date = new Date(Date.parse(d));
  return parsed.toLocaleDateString('en-US',{
    weekday: 'long',
  });
}

function showTime(d:string) {
  let parsed:Date = new Date(Date.parse(d));
  return parsed.toLocaleTimeString('en-US');
}

function SectionUpComing() {

  const eventList = 
    events.map((e:FTCCEvent) => 
      <div key={e.id} className={`grid grid-cols-4 gap-4 md:gap-4 p-6 md:p-8 hover:-translate-y-2 rounded-2xl hover:border-indigo-700 transition duration-300 ${
        e.highlight 
        ? 'highlight text-slate-200 hover:text-slate-50 bg-indigo-700 hover:bg-indigo-900 transition-all duration-300'
        : 'text-slate-00 dark:text-slate-100 transition duration-300 border dark:border-slate-600'
      }`}>
        <div className='col-span-1 md:col-span-4 flex flex-col items-center md:items-start mt-4'>
          <p className="font-heading text-5xl md:text-6xl mb-0 font-light px-4 sm:px-0 -ml-1">{showDate(e.date)}</p>
          <p className='uppercase text-base md:text-base font-heading font-semibold tracking-widest px-4 sm:px-0'>{showMonth(e.date)}</p>
        </div>
        <div className='col-span-3 md:col-span-4 flex flex-col justify-between'>
          <h4 className='text-xl font-semibold mb-4 tracking-tight leading-tight border-t-0 md:border-t border-b border-indigo-200/70 border-dotted py-3'>{e.title}</h4>
          <p className='m-0 text-sm'>{showDay(e.date)}, {showTime(e.date)}</p>
          <p className='m-0 text-sm'>{e.venue}</p>
          <div className='flex flex-row gap-4 mt-6'>
            <a target='_blank' href={e.fblink} className={`w-fit text-xs font-heading uppercase font-bold transition duration-300 ${e.highlight ? "hover:text-indigo-100 text-indigo-300 " : "hover:text-indigo-900 text-indigo-600"}`}>Go to event page</a>
            <a target='_blank' href={e.googlecalendarlink} className={`w-fit text-xs font-heading uppercase font-bold transition duration-300 ${e.highlight ? "hover:text-indigo-100 text-indigo-300 " : "hover:text-indigo-900 text-indigo-600"}`}>Add to calendar</a>
          </div>
        </div>
      </div>
    ) 

  return (
    <div id='upcoming' className='pt-6 md:pt-20 mb-8 z-10'>
      <h3 className='uppercase font-bold mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Upcoming Events</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3  mb-8 md:mb-16 w-full">

        {eventList}

      </div>
    </div>
  )
}

export default SectionUpComing;