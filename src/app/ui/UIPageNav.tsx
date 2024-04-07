'use client'

import Link from "next/link";
import { UISVGHomeButton } from "./UISVGelements";
import { useParams, usePathname } from "next/navigation";

export default function UIPageNav() {

  const pathname = usePathname()
  const pathNameArray = pathname.split('/').slice(1,2)
  console.log(pathname)
  console.log(pathNameArray)
  
  const pageNavLinks = pathNameArray.map((path, key) => {
    return (
      <div key={key} className="flex flex-row gap-1" >
        <span>&gt;</span>
        <Link href={`/${path}`} className={`flex flex-row gap-2 first:hidden`}>
            <span className="underline">{path}</span>
        </Link>
      </div>
    )
  })

  return (
    <div className="flex flex-row items-center gap-1 uppercase font-heading text-sm text-neutral-500">
      <Link href='/' className="flex flex-row items-center gap-4">
        <div className="p-4 bg-slate-200">
          <UISVGHomeButton className="stroke-neutral-800" />
        </div>
        <span className="underline">Home</span>
      </Link>
      {pageNavLinks}
    </div>
  )
}
