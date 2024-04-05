'use client'

import React, { PropsWithChildren, useState } from 'react'

export interface UIAccordionProps extends PropsWithChildren {
  className?: string;
  title: string;
}

const UIAccordionItem = ({ children, className, title }: UIAccordionProps) => {

  const [isClose, setIsClose] = useState(true);

  const HandleAccordionToggle = () => {
    isClose ? setIsClose(false) : setIsClose(true);
  }

  return (
    <div className='overflow-hidden border-b border-slate-300 last:border-b-0 dark:border-slate-600'>
      <div className={`group flex flex-row justify-between items-center dark:border-slate-600 border-slate-300 ${isClose ? 'border-b-0' : 'border-b'}`}>
        <h4 className="w-full font-bold font-heading uppercase px-6">{title}</h4>
        <div onClick={HandleAccordionToggle} className='h-full p-6 cursor-pointer group-hover:bg-slate-200 *:hover:stroke-slate-600 transition-all duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 group-hover:stroke-slate-800 ${isClose ? 'rotate-0 stroke-slate-400/60' : 'rotate-180 stroke-slate-900 dark:stroke-slate-400'} transition duration-300 ease-out`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
      </div>
      <div className={`overflow-hidden ${isClose ? 'h-0' : 'h-fit'} transition duration-300`}>
        <div className='pl-6 py-6 pr-28'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default UIAccordionItem