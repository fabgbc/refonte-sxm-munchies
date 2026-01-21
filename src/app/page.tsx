import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Menus from "@/components/sections/Menus";
import Chef from "@/components/sections/Chef";
import Buffets from "@/components/sections/Buffets";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Menus />
        <Chef />
        <Buffets />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
