import React from 'react'
import leadership2024 from '../data/Leadership2024';
import { committeeleads2024 } from '../data/Leadership2024';
import Image, { StaticImageData } from 'next/image';

import blankProfile from '../../../public/assets/images/profile.png'

interface Leaders {
  id: string;
  name: string;
  position: string;
  imageurl: string | StaticImageData;
  links?: [
    {
      icon: string;
      platform: string;
      url: string;
    }
  ]
}

function SectionCommittees() {

  const pillarslist = 
    committeeleads2024.map((lead) => 
      <div key={lead.id} className='col-span-6 md:col-span-3 grid grid-cols-6 gap-4 hover:-translate-y-2 hover:saturate-0 transition duration-300'>
        <Image
          src={lead.imageurl}
          alt={lead.name}
          width={800}
          height={800}
          sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
          style={{
            objectFit: 'cover',
          }}
          className='col-span-6 md:col-span-6 rounded-2xl'
        />
        <div className="col-span-6 md:col-span-6">
          <div className='font-bold'>{lead.name}</div>
          <div>{lead.position}</div>
        </div>
      </div>
    )

  return (
    <>
      {pillarslist}
    </>
  )
}

export default SectionCommittees;