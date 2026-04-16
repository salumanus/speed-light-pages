import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const agendaItems = [
  { time: "09:00", title: "Rejestracja i powitalna kawa", speaker: "" },
  { time: "10:00", title: "Otwarcie konferencji — Inżynieria zwycięstwa", speaker: "Marcin Bała" },
  { time: "10:45", title: "Architektura sieci nowej generacji", speaker: "Andrzej Wojnar" },
  { time: "11:30", title: "Przerwa kawowa & Strefa demo" },
  { time: "12:00", title: "Systemy transmisyjne w erze 5G", speaker: "Łukasz Sukiennik" },
  { time: "13:00", title: "Lunch & Networking" },
  { time: "14:00", title: "DCN Europe — Innowacje w infrastrukturze", speaker: "Piotr Zając" },
  { time: "15:00", title: "Panel dyskusyjny — Przyszłość sieci", speaker: "Wszyscy prelegenci" },
  { time: "16:00", title: "Zakończenie i toast" },
];

const Agenda = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="agenda" className="section-py bg-background">
      <div className="container-conf">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 font-semibold">Agenda</h2>
        </AnimatedSection>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Static line bg */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
          {/* Animated line */}
          <motion.div
            className="absolute left-4 md:left-8 top-0 w-0.5 bg-accent origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-8">
            {agendaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 md:gap-10 pl-10 md:pl-20 relative"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                <div className="text-accent font-heading text-2xl md:text-3xl min-w-[80px]">{item.time}</div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-foreground">{item.title}</h3>
                  {item.speaker && <p className="text-muted-foreground text-sm mt-0.5">{item.speaker}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
