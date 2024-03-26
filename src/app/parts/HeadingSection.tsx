import React from 'react'

function HeadingSection(props:Heading) {
  return (
    <div className='flex flex-col items-start w-full pb-8 md:pb-16'>
      <h2 className='text-md font-semibold uppercase text-indigo-900 tracking-wider mb-1'>{props.subtitle}</h2>
      <h3 className='text-3xl md:text-4xl tracking-tight font-semibold'>{props.title}</h3>
    </div>
  )
}

export default HeadingSection;