import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Speakers from "@/components/Speakers";
import Agenda from "@/components/Agenda";
import FeatureCards from "@/components/FeatureCards";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";
import TeaserOverlay from "@/components/TeaserOverlay";

// Banner teaser: domyślnie widoczny dla wszystkich.
// Aby zobaczyć pełną stronę (tryb developerski), dodaj ?preview=full do URL,
// np. https://twoja-domena.pl/?preview=full
// Dostęp zostanie zapamiętany w localStorage. Aby wyłączyć: ?preview=off
const Index = () => {
  const [showFullSite, setShowFullSite] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview");

    if (preview === "full") {
      localStorage.setItem("dev_preview_full", "1");
      setShowFullSite(true);
    } else if (preview === "off") {
      localStorage.removeItem("dev_preview_full");
      setShowFullSite(false);
    } else {
      setShowFullSite(localStorage.getItem("dev_preview_full") === "1");
    }
  }, []);

  if (!showFullSite) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex">
          <TeaserOverlay />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
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
    </>
  );
};

export default Index;
