import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import agendaImg from "@/assets/a68ed97e-4c39-4ef1-bb7f-30c53452e0f4.jpg";

const agendaItems = [
  {
    time: "9:00–10:00",
    title: "Otwarcie Światła",
    speaker: "",
    lang: "",
  },
  {
    time: "10:00–10:25",
    title: "Jeden bolid, każdy tor. Uniwersalny moduł optyczny i jego konfiguracja w środowisku SRD",
    speaker: "Salumanus",
    lang: "PL",
  },
  {
    time: "10:25–10:50",
    title: "DCN Europe — Enterprise / Wi-Fi 7 (premiera w maju) / case 100G w DC",
    speaker: "",
    lang: "",
  },
  {
    time: "10:50–11:15",
    title: "QKD / kryptografia post-kwantowa — zabezpieczanie połączeń",
    speaker: "",
    lang: "",
  },
  {
    time: "11:15–11:45",
    title: "Przerwa kawowa",
    speaker: "",
    lang: "",
  },
  {
    time: "11:45–12:10",
    title: "DCN IP/MPLS — rodzina produktów dla operatorów (L2/L3)",
    speaker: "",
    lang: "",
  },
  {
    time: "12:10–12:35",
    title: "Telekom świadczący Enterprise jako usługa — klocki packet-optical",
    speaker: "",
    lang: "",
  },
  {
    time: "12:35–13:00",
    title: "Mniej pitstopów, szybsze okrążenie. Multiservice BTS jako węzeł agregujący sieci operatora",
    speaker: "Salumanus",
    lang: "PL",
  },
  {
    time: "13:00–14:30",
    title: "Lunch",
    speaker: "",
    lang: "",
  },
  {
    time: "14:30–15:30",
    title: `Panel dyskusyjny Łukasz Dec – „Iskander czy totalny blackout? Jak przygotować sieć telekomową na wyzwania geopolityki"`,
    speaker: "",
    lang: "",
    highlight: true,
  },
  {
    time: "15:30–16:00",
    title: "Przerwa kawowa",
    speaker: "",
    lang: "",
  },
  {
    time: "16:00–16:25",
    title: "DCNY - szczegóły wkrótce",
    speaker: "",
    lang: "",
  },
  {
    time: "16:25–16:50",
    title: "Zdjąć balast, dodać prędkość. Koherentne 100/400/800G i IP over DWDM w praktyce",
    speaker: "Salumanus",
    lang: "PL",
  },
  {
    time: "16:50–17:00",
    title: "KAHOOT i sesja Q&A",
    speaker: "",
    lang: "",
  },
  {
    time: "17:00",
    title: "Rozpoczęcie imprezy w stylu F1",
    speaker: "",
    lang: "",
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
          <h2 className="font-heading text-3xl md:text-5xl mb-16 leading-tight text-foreground lg:text-4xl">
            Agenda <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">Dni Światła</span> 2026
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Lewa kolumna — zdjęcie (węższe o 2 kolumny) */}
          <AnimatedSection className="lg:col-span-4">
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
          <div ref={ref} className="relative lg:col-span-8">
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
                  className={`flex gap-4 md:gap-8 pl-8 md:pl-10 relative ${
                    item.highlight ? "bg-accent rounded-lg py-4 pr-4" : ""
                  }`}
                >
                  <div className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                  <div
                    className={`font-heading min-w-[80px] md:min-w-[110px] text-sm md:text-[18px] ${
                      item.highlight ? "text-accent-foreground" : "text-accent"
                    }`}
                  >
                    {item.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                      <h3
                        className={`font-heading leading-snug text-sm md:text-lg ${
                          item.highlight ? "text-accent-foreground" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {item.lang && (
                        <span
                          className={`shrink-0 self-start inline-block border text-xs font-medium px-2 py-1 rounded ${
                            item.highlight
                              ? "border-accent-foreground text-accent-foreground"
                              : "border-border text-foreground"
                          }`}
                        >
                          {item.lang}
                        </span>
                      )}
                    </div>
                    {item.speaker && (
                      <p
                        className={`text-xs md:text-sm font-medium mt-2 ${
                          item.highlight ? "text-accent-foreground" : "text-foreground"
                        }`}
                      >
                        {item.speaker}
                      </p>
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
