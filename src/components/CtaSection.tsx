import AnimatedSection from "./AnimatedSection";

const CtaSection = () => (
  <section id="rejestracja" className="section-py bg-dark-bg">
    <div className="container-conf text-center">
      <AnimatedSection>
        <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl text-dark-fg mb-6">Dołącz do nas</h2>
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
