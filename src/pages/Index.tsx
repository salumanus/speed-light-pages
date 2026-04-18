import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Agenda from "@/components/Agenda";
import FeatureCards from "@/components/FeatureCards";
import Audience from "@/components/Audience";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <Audience />
    <About />
    <Speakers />
    <Agenda />
    <FeatureCards />
    <CtaSection />
    <Footer />
  </>
);

export default Index;
