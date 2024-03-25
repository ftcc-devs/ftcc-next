'use client';

import { useState } from 'react';

function AccordionItem(props:AccordionItem) {
  
  const [isClose, setIsClose] = useState(true);

  const HandleAccordionClick = () => {
    isClose ? setIsClose(false) : setIsClose(true);
  }

  return (
    <div className='overflow-hidden last:border-b-0'>
      <div className={`group flex flex-row justify-between items-center ${isClose ? 'border-b-0' : 'border-b-2'}`}>
        <div className="w-full font-bold font-heading uppercase px-6">{props.title}</div>
        <div onClick={HandleAccordionClick} className='h-full p-6 cursor-pointer group-hover:bg-slate-200 *:hover:stroke-slate-600 transition-all duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 group-hover:stroke-slate-800 ${isClose ? 'rotate-0 stroke-slate-400/60' : 'rotate-180 stroke-slate-900'} transition duration-300`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
      </div>
      <div className={`overflow-hidden ${isClose ? 'h-0' : 'h-fit'} transition duration-300`}>
        <p className='p-6 mt-2 mb-4'>{props.content}</p>
      </div>
    </div>
  )
}

export default AccordionItem;