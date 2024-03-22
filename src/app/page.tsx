import Footer from "./parts/Footer";
import Header from "./parts/Header";
import SectionAbout from "./parts/SectionAbout";
import SectionServices from "./parts/SectionServices";
import { fontheading, fontbody } from "./fonts";
import SectionTestimonial from "./parts/SectionTestimonial";
import SectionJoin from "./parts/SectionJoin";
import SectionContact from "./parts/SectionContact";
import SectionNews from "./parts/SectionNews";

export default function Home() {
  return (
    <main className={`${fontbody.variable} ${fontheading.variable} font-body text-base md:text-lg xl:text-lg leading-relaxed flex flex-col items-center w-full text-slate-900`}>

      <Header />
      <SectionAbout />
      <SectionServices />
      <SectionTestimonial />
      <SectionJoin />
      <SectionNews />
      <SectionContact />

      <Footer />

    </main>
  );
}
