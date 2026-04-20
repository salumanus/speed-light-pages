import AnimatedSection from "./AnimatedSection";
import dolaczBg from "@/assets/dolacz-background.svg";

const CtaSection = () => (
  <section
    id="rejestracja"
    className="section-py relative bg-cover bg-center"
    style={{
      backgroundColor: "#15151E",
      backgroundImage: `url(${dolaczBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container-conf text-center relative">
      <AnimatedSection>
        <h2 className="font-heading text-5xl md:text-6xl text-dark-fg mb-6 lg:text-6xl">Dołącz do nas</h2>
        <p className="text-dark-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Zarejestruj się na XVIII edycję Dni Światła i dołącz do grona liderów technologii sieciowych.
        </p>
        <a href="#rejestracja" className="btn-accent">
          Zarejestruj się
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
