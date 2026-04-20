import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import RegistrationModal from "./RegistrationModal";
import dolaczBg from "@/assets/dolacz-background.svg";

const CtaSection = () => {
  const [open, setOpen] = useState(false);

  return (
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
            Zarejestruj się na XVIII edycję Dni Światła i dołącz do grona liderów technologii sieciowych. Dla partnerów SALUMANUS i DCN Europe udział w konferencji jest bezpłatny. Daj znać swojemu opiekunowi handlowemu! Liczba miejsc ograniczona. Zarejestruj się już dziś.
          </p>
          <button type="button" onClick={() => setOpen(true)} className="btn-accent">
            Zarejestruj się
          </button>
        </AnimatedSection>
      </div>
      <RegistrationModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default CtaSection;
