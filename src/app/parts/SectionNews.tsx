import React from 'react';
import SectionMediaMentions from './SectionMediaMentions';
import HeadingSection from './HeadingSection';
// import SectionNewsLatest from './SectionNewsLatest';

function SectionNews() {
  return (
    <div id='news' className='flex flex-col justify-start md:justify-center items-center w-full px-6 relative pt-10 md:pt-20'>
      <div className='flex flex-col justify-start items:start w-full max-w-screen-lg'>

        <HeadingSection 
          subtitle='News and Updates'
          title='What&apos;s the latest?'
        />

        {/* <SectionNewsLatest /> */}

        <SectionMediaMentions />

      </div>
      <div className="bg-connections w-full h-full absolute -z-10 bg-slate-200 -bottom-28 md:-bottom-40 left-0"></div>
    </div>
  );
}

export default SectionNews;