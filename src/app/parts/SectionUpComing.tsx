import React from 'react'

function SectionUpComing() {
  return (
    <div id='upcoming' className='mb-8'>
      <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Upcoming Events</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 w-full">
        <div className="grid grid-cols-3 justify-start items-start gap-4 md:gap-12 p-10 md:p-12 text-indigo-100 hover:text-slate-100 bg-indigo-600 hover:bg-indigo-800 mb-0 md:mb-8 border-2 border-indigo-600 transition duration-300">
          <div className='col-span-1 md:col-span-3 flex flex-col items-left md:items-left'>
            <p className="font-heading text-5xl md:text-8xl mb-0 font-light px-4 sm:px-0">03</p>
            <p className='uppercase text-sm md:text-base font-heading font-black tracking-widest px-4 sm:px-0'>May</p>
          </div>
          <div className='col-span-2 md:col-span-3 flex flex-col'>
            <h4 className='font-bold mb-2 tracking-tight'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <a href="#" className='w-fit mt-6 uppercase text-sm font-bold pb-1 border-b-2'>Link to Facebook Event</a>
          </div>
        </div>

        <div className="grid grid-cols-3  justify-start items-start gap-4 md:gap-12 p-10 md:p-12 text-slate-800 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-300 border-2 border-slate-300 mb-0 md:mb-8 transition duration-300">
          <div className='col-span-1 md:col-span-3 flex flex-col items-left md:items-left'>
            <p className="font-heading text-5xl md:text-8xl mb-0 font-light px-4 sm:px-0">08</p>
            <p className='uppercase text-sm md:text-base font-heading font-black tracking-widest px-4 sm:px-0'>June</p>
          </div>
          <div className='col-span-2 md:col-span-3 flex flex-col'>
            <h4 className='font-semibold mb-4'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <a href="#" className='w-fit mt-6 uppercase text-sm font-bold pb-1 border-b-2'>Link to Facebook Event</a>
          </div>
        </div>
        
        <div className="grid grid-cols-3  justify-start items-start gap-4 md:gap-12 p-10 md:p-12 text-slate-800 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-300 border-2 border-slate-300 mb-0 md:mb-8 transition duration-300">
          <div className='col-span-1 md:col-span-3 flex flex-col items-left md:items-left'>
            <p className="font-heading text-5xl md:text-8xl mb-0 font-light px-4 sm:px-0">27</p>
            <p className='uppercase text-xs md:text-base font-heading font-black tracking-widest px-4 sm:px-0'>August</p>
          </div>
          <div className='col-span-2 md:col-span-3 flex flex-col'>
            <h4 className='font-semibold mb-4'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <a href="#" className='w-fit mt-6 uppercase text-sm font-bold pb-1 border-b-2'>Link to Facebook Event</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionUpComing;