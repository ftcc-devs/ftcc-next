import React from 'react'

function SectionUpComing() {
  return (
    <div id='upcoming' className='mb-8'>
      <h3 className='uppercase font-bold text-base mt-8 md:mt-0 mb-8 tracking-wider pb-4'>Upcoming Events</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2 w-full">
        <div className="flex flex-row md:flex-col justify-start items-start gap-4 md:gap-12 p-6 md:p-12 text-slate-800 hover:text-slate-100 bg-indigo-50 hover:bg-indigo-600 mb-0 md:mb-8 border-2 border-indigo-600 transition duration-300">
          <div className='flex flex-col items-center p-2'>
            <p className="text-3xl md:text-6xl mb-0 font-bold">03</p>
            <p className='uppercase text-sm md:text-base font-heading font-black tracking-widest'>May</p>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-bold mb-2 tracking-tight'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <a href="#" className='w-fit mt-6 uppercase text-sm font-bold pb-1 border-b-2'>Link to Facebook Event</a>
          </div>
        </div>

        <div className="flex flex-row md:flex-col justify-start items-start gap-4 md:gap-12 p-6 md:p-12 text-slate-600 hover:text-slate-800 bg-slate-200/60 hover:bg-indigo-200 mb-0 md:mb-8 transition duration-300">
          <div className='flex flex-col items-center p-2'>
            <p className="text-3xl md:text-6xl mb-0 font-bold">28</p>
            <p className='uppercase text-sm md:text-base font-heading font-black tracking-widest'>Jun</p>
          </div>
          <div className='flex flex-col'>
            <h4 className='font-semibold mb-4'>First General Assembly and Induction of Appointed Officers</h4>
            <p className='mb-0'>2:00-4:00 pm</p>
            <p className='mb-0'>AWS Canberra Offices, Braddon</p>
            <a href="#" className='w-fit mt-6 uppercase text-sm font-bold pb-1 border-b-2'>Link to Facebook Event</a>
          </div>
        </div>
        
        <div className="flex flex-row md:flex-col justify-start items-start gap-4 md:gap-12 p-6 md:p-12 text-slate-600 hover:text-slate-800 bg-slate-200/60 hover:bg-indigo-200 mb-0 md:mb-8 transition duration-300">
          <div className='flex flex-col items-center p-2'>
            <p className="text-3xl md:text-6xl mb-0 font-bold">28</p>
            <p className='uppercase text-sm md:text-base font-heading font-black tracking-widest'>Jun</p>
          </div>
          <div className='flex flex-col'>
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