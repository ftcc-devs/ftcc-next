import React from 'react'
import { FtccLogoReverse } from '../components/SvgElements';

function Footer() {
  return (
    <div className='text-base flex flex-col justify-start md:justify-start items-center w-full pt-24 md:pt-36 pb-12 md:pb-20 px-6 bg-indigo-950 text-slate-200'>
      <div className="w-full flex flex-col items-center max-w-screen-lg">

        <div id="footer-quote" className='text-left sm:text-center w-full md:w-3/5 mb-16 md:mb-32'>
          <p className='text-lg lg:text-2xl italic tracking-tight'>“I am pleased that the growing tech community in Canberra decided to come together and strengthen our credentials as highly competent tech workers and movers.”</p>
          <p className='uppercase text-sky-200 mt-8 text-sm tracking-wide'>Ambassador Ma. Hellen B. De La Vega</p>
        </div>

        <div id="footer-menu-row" className='grid grid-cols-2 md:grid-cols-6 gap-4 lg:gap-8 text-md'>

          <div id="footer-logo" className="col-span-2 md:col-span-3 flex flex-col gap-4">
            <FtccLogoReverse />
            <div className='pl-0 md:pl-20 mt-8'>
              <p className='text-indigo-300'>Filipino Tech Community Canberra Incorporation is a duly-registered community association as conferred by the Australian Capital Territory government.</p>
            </div>
          </div>

          <div className='hidden md:flex'></div>

          <ul className="flex flex-col gap-2 text-slate-200 text-base font-heading font-semibold">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Membership</a>
            <a href="#">News</a>
            <a href="#">Media</a>
          </ul>
          
          <ul className="flex flex-col gap-2 text-slate-200 text-base font-heading font-semibold">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Membership</a>
            <a href="#">News</a>
            <a href="#">Media</a>
          </ul>
        </div>

        <div id="copyright" className='flex flex-col lg:flex-row w-full justify-between items-start lg:items-center py-4 my-16 border-t-2 border-dotted border-slate-700 text-slate-400 text-sm'>
          <div>Copyright ©2024 All rights reserved.</div>
          <div>Follow us on <a href="https://www.facebook.com/profile.php?id=100094100317256" className='underline'>Facebook</a> and <a href="https://www.linkedin.com/company/100923935/" className='underline'>LinkedIn</a></div>
        </div>

      </div>
    </div>
  )
}

export default Footer;