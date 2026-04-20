import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import agendaImg from "@/assets/a68ed97e-4c39-4ef1-bb7f-30c53452e0f4.jpg";

const agendaItems = [
  {
    time: "09:00",
    title: "Rejestracja i powitalna kawa",
    description:
      "Odbiór identyfikatorów i materiałów konferencyjnych. Czas na poranną kawę i pierwsze rozmowy w kuluarach.",
    speaker: "",
  },
  {
    time: "10:00",
    title: "Otwarcie konferencji — Inżynieria zwycięstwa",
    description:
      "Oficjalne rozpoczęcie XVIII edycji Dni Światła. Wprowadzenie do tematyki tegorocznej konferencji i prezentacja agendy.",
    speaker: "Marcin Bała",
  },
  {
    time: "10:45",
    title: "Architektura sieci nowej generacji",
    description:
      "Jak projektować skalowalne sieci optyczne na potrzeby kolejnej dekady. Praktyczne wskazówki i case studies.",
    speaker: "Andrzej Wojnar",
  },
  {
    time: "11:30",
    title: "Przerwa kawowa & Strefa demo",
    description:
      "Czas na networking i odwiedzenie stoisk partnerów. Prezentacje na żywo najnowszych rozwiązań sprzętowych.",
    speaker: "",
  },
  {
    time: "12:00",
    title: "Systemy transmisyjne w erze 5G",
    description:
      "Wyzwania transportu danych w nowoczesnych sieciach mobilnych. Rola xWDM w infrastrukturze backhaul i fronthaul.",
    speaker: "Łukasz Sukiennik",
  },
  {
    time: "13:00",
    title: "Lunch & Networking",
    description:
      "Wspólny posiłek i nieformalne rozmowy z prelegentami oraz innymi uczestnikami konferencji.",
    speaker: "",
  },
  {
    time: "14:00",
    title: "DCN Europe — Innowacje w infrastrukturze",
    description:
      "Najnowsze produkty i kierunki rozwoju DCN Europe. Strategia firmy na rynku europejskim w nadchodzących latach.",
    speaker: "Piotr Zając",
  },
  {
    time: "15:00",
    title: "Panel dyskusyjny — Przyszłość sieci",
    description:
      "Otwarta debata z udziałem wszystkich prelegentów. Pytania od publiczności i wymiana doświadczeń branżowych.",
    speaker: "Wszyscy prelegenci",
  },
  {
    time: "16:00",
    title: "Zakończenie i toast",
    description:
      "Podsumowanie konferencji i wspólny toast. Zapowiedź kolejnej edycji Dni Światła.",
    speaker: "",
  },
];

const Agenda = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="agenda" className="section-py bg-background">
      <div className="container-conf">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl mb-16 leading-tight text-foreground lg:text-5xl">
            Agenda <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">Dni Światła</span> 2026
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Lewa kolumna — placeholder na zdjęcie */}
          <AnimatedSection>
            <div
              className="aspect-[4/5] w-full overflow-hidden"
              style={{ borderRadius: "5px" }}
            >
              <img
                src={agendaImg}
                alt="Bolid F1 na torze - Dni Światła 2026"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Prawa kolumna — agenda */}
          <div ref={ref} className="relative">
            {/* Static line bg */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
            {/* Animated line */}
            <motion.div
              className="absolute left-2 top-0 w-0.5 bg-accent origin-top"
              style={{ height: lineHeight }}
            />

            <div className="flex flex-col gap-8">
              {agendaItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-6 md:gap-8 pl-10 relative"
                >
                  <div className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                  <div className="text-accent font-heading text-2xl md:text-3xl min-w-[80px]">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mt-2 leading-relaxed">
                      {item.description}
                    </p>
                    {item.speaker && (
                      <p className="text-foreground text-sm font-medium mt-2">{item.speaker}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
