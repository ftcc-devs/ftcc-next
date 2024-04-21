import Footer from "./parts/Footer";
import SectionAbout from "./parts/SectionAbout";
import SectionServices from "./parts/SectionServices";
import SectionTestimonial from "./parts/SectionTestimonial";
import SectionJoin from "./parts/SectionJoin";
import SectionContact from "./parts/SectionContact";
import SectionNews from "./parts/SectionNews";
import BackToTopButton from "./parts/BackToTopButton";
import PopupHomeAnnounceGA from "./parts/PopupHomeAnnounceGA";
import NavBarMain from "./parts/NavBarMain";
import HeroHome01 from "./parts/HeroHome01";
import Link from "next/link";
import { UISVGArrowDown } from "./ui/UISVGelements";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'FTCC Home',
// }


export default function Home() {
  return (
    <main className={`font-body text-base md:text-lg xl:text-lg leading-relaxed flex flex-col items-center w-full relative`}>

      <PopupHomeAnnounceGA />
      
      <NavBarMain />
      <HeroHome01 />
      <SectionAbout />

      <div className='flex justify-center items-center mt-8 md:mt-20'>
        <Link href='/#services'>
          <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
        </Link>
      </div>

      <SectionServices />

      <div className='flex justify-center items-center mb-8 md:mb-20'>
        <Link href='/#testimonials'>
        <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
        </Link>
      </div>

      <SectionTestimonial />
      <SectionJoin />

      <div className='flex justify-center items-center mb-8 md:mb-20'>
        <Link href='/#news'>
        <UISVGArrowDown className='w-6 h-6 md:w-8 md:h-8 stroke-slate-400 hover:stroke-indigo-700 hover:scale-125 transition duration-300' />
        </Link>
      </div>

      <SectionNews />
      <SectionContact />

      <BackToTopButton />

      <Footer />

    </main>
  );
}
