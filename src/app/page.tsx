import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FlipCards from "@/components/sections/FlipCards";
import Menus from "@/components/sections/Menus";
import Chef from "@/components/sections/Chef";
import Partnership from "@/components/sections/Partnership";
import Buffets from "@/components/sections/Buffets";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <FlipCards />
        <SectionDivider variant="diamond" />
        <Menus />
        <SectionDivider variant="line" />
        <Chef />
        <SectionDivider variant="dots" />
        <Partnership />
        <SectionDivider variant="line" />
        <Buffets />
        <SectionDivider variant="diamond" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
