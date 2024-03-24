import Footer from "./parts/Footer";
import Header from "./parts/Header";
import SectionAbout from "./parts/SectionAbout";
import SectionServices from "./parts/SectionServices";
import { fontheading, fontbody } from "./fonts";
import SectionTestimonial from "./parts/SectionTestimonial";
import SectionJoin from "./parts/SectionJoin";
import SectionContact from "./parts/SectionContact";
import SectionNews from "./parts/SectionNews";
import BackToTopButton from "./parts/BackToTopButton";

export default function Home() {
  return (
    <main id="top" className={`${fontbody.variable} ${fontheading.variable} font-body text-base md:text-lg xl:text-lg leading-relaxed flex flex-col items-center w-full text-slate-900 relative`}>

      <Header />
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
