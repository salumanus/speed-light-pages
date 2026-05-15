import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Agenda from "@/components/Agenda";
import FeatureCards from "@/components/FeatureCards";
import Audience from "@/components/Audience";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";
import TeaserOverlay from "@/components/TeaserOverlay";

const Index = () => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 overflow-hidden blur-md pointer-events-none select-none"
      >
        <Navbar />
        <Hero />
        <About />
        <Audience />
        <Speakers />
        <Agenda />
        <FeatureCards />
        <Faq />
        <CtaSection />
        <SocialBar />
        <Footer />
      </div>
      <TeaserOverlay />
    </>
  );
};

export default Index;
