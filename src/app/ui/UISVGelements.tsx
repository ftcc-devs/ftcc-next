import React from 'react'
import trophy from '../../../public/assets/ui/trophy-regular-36.png'

interface UISVGProps {
  fillColor?: string;
  className?: string;
}

export async function UIArrowDown({ fillColor, className }:UISVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
    </svg>
  )
}

export function UITrophy({ fillColor, className }:UISVGProps) {
  return (
    trophy

  )
}
