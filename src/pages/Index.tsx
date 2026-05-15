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
  return (
    <>
      <div
        aria-hidden
        className="blur-md pointer-events-none select-none"
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
