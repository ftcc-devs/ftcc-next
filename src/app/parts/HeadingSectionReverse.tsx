import React from 'react'

function HeadingSectionReverse(props:Heading) {
  return (
    <div className='flex flex-col items-start w-full pb-4 mb-8 border-b-slate-500 border-dotted'>
      <h3 className='text-md font-semibold uppercase text-indigo-300 tracking-wider mb-2'>{props.subtitle}</h3>
      <h2 className='text-3xl md:text-4xl tracking-tight font-semibold'>{props.title}</h2>
    </div>
  )
}

export default HeadingSectionReverse;