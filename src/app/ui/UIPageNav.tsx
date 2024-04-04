import Link from "next/link";
import { UISVGHomeButton } from "./UISVGelements";
import { useParams, usePathname } from "next/navigation";

export default function UIPageNav() {

  const params = useParams();
  console.log(params)

  const pathname = usePathname()
  const pathNameArray = pathname.split('/')
  console.log(pathNameArray.length)
  
  const pageNavLinks = pathNameArray.map((path, key) => {
    return (
      <div key={key} className="flex flex-row gap-1" >
        <span>/</span>
        <Link href={`/${path}`} className={`flex flex-row gap-2 first:hidden`}>
            <span className="underline">{path}</span>
        </Link>
      </div>
    )
  })

  return (
    <div className="flex flex-row items-center gap-1 uppercase font-heading text-sm text-slate-500">
      <Link href='/' className="flex flex-row items-center gap-2">
        <UISVGHomeButton className="stroke-indigo-500" />
        <span className="underline">Home</span>
      </Link>
      {pageNavLinks}
    </div>
  )
}
