import React, { PropsWithChildren } from 'react'

export interface UIAccordionProps extends PropsWithChildren {
  className: string;
}

const UIAccordion = ({ children, className }: UIAccordionProps) => {
  return (
    <div className={`flex flex-col my-3 md:my-8 border border-slate-300 dark:border-slate-500 rounded-xl overflow-hidden *:border-b-slate-300 *:dark:border-b-slate-500 ${className}`}>
      <div>
        {children}
      </div>
    </div>
  )
}

export default UIAccordion