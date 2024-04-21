import React from 'react'

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
}

function HeadingSection(props:SectionHeadingProps) {
  return (
    <div className='flex flex-col items-start w-full pb-8 md:pb-16'>
      <h2 className='text-sm font-semibold uppercase text-indigo-900 dark:text-indigo-500 tracking-wider mb-1'>{props.subtitle}</h2>
      <h3 className='text-4xl md:text-5xl tracking-tight font-semibold'>{props.title}</h3>
    </div>
  )
}

export default HeadingSection;