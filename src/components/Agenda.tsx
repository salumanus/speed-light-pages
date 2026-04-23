import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import agendaImg from "@/assets/a68ed97e-4c39-4ef1-bb7f-30c53452e0f4.jpg";

const agendaItems = [
  {
    time: "10:00–10:15",
    title: "Otwarcie Dni Światła",
    speaker: "Szczegóły wkrótce",
    lang: "PL",
  },
  {
    time: "10:15–10:45",
    title: "Koherenty optyczne — realne wdrożenia. „Salumanus krok przed brendami”",
    speaker: "Andrzej Wojnar | Salumanus",
    lang: "PL",
  },
  {
    time: "10:45–11:15",
    title: "Uniwersalny moduł optyczny — nowości w SRD, aktualizacje portfolio",
    speaker: "Szczegóły wkrótce | Salumanus",
    lang: "PL",
  },
  {
    time: "11:15–11:45",
    title: "Przerwa kawowa",
    speaker: "",
    lang: "",
  },
  {
    time: "11:45–12:15",
    title: "QKD / kryptografia post-kwantowa — zabezpieczanie połączeń",
    speaker: "Hekatron",
    lang: "EN",
  },
  {
    time: "12:15–12:45",
    title: "IP/MPLS — rodzina produktów dla operatorów (L2/L3)",
    speaker: "Szczegóły wkrótce RAICcom",
    lang: "EN",
  },
  {
    time: "12:45–13:15",
    title: "Telekom świadczący Enterprise jako usługa — klocki packet-optical",
    speaker: "Szczegóły wkrótce | PacketLight",
    lang: "EN",
  },
  {
    time: "13:15–15:30",
    title: "Lunch + networking",
    speaker: "",
    lang: "",
  },
  {
    time: "15:30–16:00",
    title: "DCN Europe — Enterprise / Wi-Fi 7 (premiera w maju) / case 100G w DC",
    speaker: "Szczegóły wkrótce | DCN Europe",
    lang: "EN",
  },
  {
    time: "16:00–16:30",
    title: "Multiservice BTS — „Co zrobić, kiedy nie będzie niczego” (podkład pod panel)",
    speaker: "Andrzej Wojnar | Marcin Bała - Salumanus",
    lang: "PL",
  },
  {
    time: "16:30–17:30",
    title: "PANEL DYSKUSYJNY: „Iskander czy totalny blackout? Jak przygotować sieć telekomową na wyzwania geopolityki”",
    speaker: "Szczegóły wkrótce | Łukasz Dec (moderator)",
    lang: "PL",
    highlight: true,
  },
  {
    time: "17:00–02:00",
    title: "Meta dnia - Afterparty / networking. Kolacja, DJ set, symulator F1 - rozmowy, których nie zdążysz odbyć w ciągu dnia",
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
          <h2 className="font-heading text-4xl md:text-5xl mb-16 leading-tight text-foreground lg:text-4xl">
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
                  className={`flex gap-6 md:gap-8 pl-10 relative ${
                    item.highlight ? "bg-accent rounded-lg py-4 pr-4" : ""
                  }`}
                >
                  <div className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                  <div
                    className={`font-heading min-w-[110px] ${
                      item.highlight ? "text-accent-foreground" : "text-accent"
                    }`}
                    style={{ fontSize: "18px" }}
                  >
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-heading leading-snug ${
                        item.highlight ? "text-accent-foreground" : "text-foreground"
                      }`}
                      style={{ fontSize: "18px" }}
                    >
                      {item.title}
                    </h3>
                    {item.speaker && (
                      <p
                        className={`text-sm font-medium mt-2 ${
                          item.highlight ? "text-accent-foreground" : "text-foreground"
                        }`}
                      >
                        {item.speaker}
                      </p>
                    )}
                  </div>
                  {item.lang && (
                    <div className="shrink-0 self-start">
                      <span
                        className={`inline-block border text-xs font-medium px-2 py-1 rounded ${
                          item.highlight
                            ? "border-accent-foreground text-accent-foreground"
                            : "border-border text-foreground"
                        }`}
                      >
                        {item.lang}
                      </span>
                    </div>
                  )}
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
