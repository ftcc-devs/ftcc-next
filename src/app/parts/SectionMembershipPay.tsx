import React from 'react'
import HeadingSection from './HeadingSection';
import UIButton from '../components/UIButtons';

function SectionMembershipPay() {
  return (
    <div id='contact' className='flex flex-col justify-start md:justify-center items-center w-full px-6'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg my-12 py-12 md:py-20 px-12 bg-amber-200 rounded-2xl'>

        <HeadingSection 
          subtitle='Annual Membership Dues'
          title='Pay Using Stripe'
        />

<UIButton href='https://docs.google.com/forms/d/e/1FAIpQLScEbu9rWjeY6MOVN2twtYBfcyzMel6s6o2h-F5nh6gubFOgWA/viewform' target='_blank' version='primary'>Pay</UIButton>



      </div>
    </div>
  );
}

export default SectionMembershipPay;