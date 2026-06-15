import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import logoSalumanus from "@/assets/Salumanus_logo_dark.svg";
import logoDcn from "@/assets/logo-dcn.svg";
import { useT } from "@/contexts/LanguageContext";

const Counter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
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
      <div className="font-heading text-4xl font-medium text-primary md:text-7xl">{count}{suffix}</div>
      <div className="text-sm mt-1 font-medium text-primary">{label}</div>
    </div>
  );
};

const About = () => {
  const t = useT();
  return (
  <section className="section-py bg-[#f8f4f2]">
    <div className="container-conf">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-sm bg-accent inline-block" />
              <span className="font-heading text-sm uppercase tracking-widest text-foreground font-normal">Dni Światła</span>
            </div>
            <h2 className="font-heading text-2xl md:text-5xl text-foreground mb-6 leading-tight lg:text-4xl">
              {t("O konferencji ", "About the ")}<span className="bg-accent text-accent-foreground px-3 py-1 inline-block">Dni Światła</span>{t("", " conference")}
            </h2>
            <p className="leading-relaxed mb-4 text-muted-foreground">
              {t(
                "Dni Światła to jedna z najważniejszych konferencji branży Telko i Data Center w Polsce, organizowane przez Salumanus i DCN Europe. Nieprzerwanie od ponad 17 lat, a XVIII edycja wjeżdża na najwyższy poziom toru Formuły 1.",
                "Dni Światła is one of the most important conferences for the Telco and Data Center industry in Poland, organized by Salumanus and DCN Europe. Held continuously for over 17 years, and the 18th edition is racing onto the top tier of the Formula 1 track."
              )}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(
                "Świat, w którym technologia, precyzja i prędkość decydują o wszystkim, a zwycięża ten, kto łączy to w bezbłędną strategię - dokładnie tak jak w nowoczesnej sieci.",
                "A world where technology, precision and speed decide everything, and the winner is the one who combines them into a flawless strategy - just like in a modern network."
              )}
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-12 mt-10">
              <Counter end={17} label={t("Edycji", "Editions")} />
              <Counter end={60} label={t("Prelegentów", "Speakers")} suffix="+" />
              <Counter end={1000} label={t("Ponad Uczestników wszystkich edycji", "Participants across all editions")} suffix="+" />
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
};

export default About;
