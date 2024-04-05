import Footer from "./parts/Footer";
import Header from "./parts/Header";
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
      <SectionServices />
      <SectionTestimonial />
      <SectionJoin />
      <SectionNews />
      <SectionContact />

      <BackToTopButton />

      <Footer />

    </main>
  );
}
