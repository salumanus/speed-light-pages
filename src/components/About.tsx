import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import logoSalumanus from "@/assets/Salumanus_logo_dark.svg";
import logoDcn from "@/assets/logo-dcn.svg";

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.ceil(end / 40);
          const interval = setInterval(() => {
            current = Math.min(current + step, end);
            setCount(current);
            if (current >= end) clearInterval(interval);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-5xl text-accent font-semibold md:text-9xl">{count}</div>
      <div className="text-sm mt-1 font-medium text-primary">{label}</div>
    </div>
  );
};

const About = () => (
  <section className="section-py bg-[#e00400]/[0.06]">
    <div className="container-conf">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-sm bg-accent inline-block" />
              <span className="font-heading text-sm uppercase tracking-widest text-foreground font-normal">Dni Światła</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              O konferencji <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">Dni Światła</span>
            </h2>
            <p className="leading-relaxed mb-4 text-primary">
              Dni Światła to coroczna konferencja organizowana przez Salumanus i DCN Europe, poświęcona najnowszym
              technologiom sieciowym i transmisyjnym. XVIII edycja przenosi nas na tor wyścigowy - bo w świecie
              technologii, tak jak w Formule 1, liczy się precyzja, szybkość i niezawodność.
            </p>
            <p className="leading-relaxed text-primary">
              Spotkaj ekspertów branży, poznaj najnowsze rozwiązania i rozbuduj swoją sieć kontaktów w wyjątkowej
              atmosferze inspirowanej światem motorsportu.
            </p>
            <div className="flex gap-12 mt-10">
              <Counter end={18} label="Edycji" />
              <Counter end={24} label="Prelegentów" />
              <Counter end={900} label="Ponad Uczestników wszystkich edycji" />
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className="bg-secondary rounded-lg p-8 w-full max-w-sm flex items-center justify-center min-h-[120px]">
              <img src={logoSalumanus} alt="Salumanus" className="w-full max-h-16 object-contain" />
            </div>
            <div className="bg-secondary rounded-lg p-8 w-full max-w-sm flex items-center justify-center min-h-[120px]">
              <img src={logoDcn} alt="DCN Europe" className="w-full max-h-16 object-contain" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default About;
