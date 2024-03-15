import Footer from "./parts/Footer";
import Header from "./parts/Header";
import SectionAbout from "./parts/SectionAbout";
import SectionServices from "./parts/SectionServices";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full text-slate-900 text-lg bg-white">

      <Header />
      <SectionAbout />
      <SectionServices />

      <Footer />

    </main>
  );
}
