import React from 'react'

interface UIButtonProps extends React.ComponentProps<'a'> {
  version: 'primary' | 'secondary';
}

const UIButton: React.FunctionComponent<UIButtonProps> = ({ 
  version, 
  children,
  ...buttonProps
 }) => {
  return (
    <a
      {...buttonProps}
      className={`
      flex flex-row justify-between items-center gap-8 hover:gap-16 w-fit font-heading text-sm font-semibold uppercase mt-2 mb-2 md:mb-8 px-6 md:px-6 py-4 hover:shadow-glow text-slate-50 hover:text-white rounded-lg tracking-wider transition-all duration-300
        ${(version==='primary') ?
          'bg-indigo-700 hover:bg-indigo-900 border-2 border-indigo-700 hover:border-indigo-900 ' :
          'bg-purple-700 hover:bg-purple-600 border-2 border-purple-700 hover:border-purple-600 ' }
      `}
    >
      {children}
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
      </span>
    </a>
  )
}

export default UIButton