import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Cpu, Network, Radio, Server } from "lucide-react";

const cards = [
  {
    icon: Network,
    title: "Inżynierowie sieci",
    desc: "Poznaj najnowsze technologie sieciowe i transmisyjne, które zrewolucjonizują Twoją infrastrukturę.",
  },
  {
    icon: Server,
    title: "Administratorzy IT",
    desc: "Zdobądź wiedzę o najnowszych rozwiązaniach serwerowych i systemach zarządzania siecią.",
  },
  {
    icon: Radio,
    title: "Integratorzy systemów",
    desc: "Odkryj narzędzia i platformy, które usprawnią wdrożenia u Twoich klientów.",
  },
  {
    icon: Cpu,
    title: "Decydenci & menedżerowie",
    desc: "Zainspiruj się strategiami technologicznymi, które napędzają rozwój biznesu.",
  },
];

const Audience = () => (
  <section className="section-py bg-background">
    <div className="container-conf">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-sm bg-accent inline-block" />
          <span className="font-heading text-sm uppercase tracking-widest text-foreground">Dla kogo</span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 max-w-4xl leading-tight">
          Stworzone dla tych, którzy żyją na{" "}
          <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">styku sieci</span>{" "}
          i technologii.
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-accent text-accent-foreground p-8 md:p-10 h-full flex flex-col px-[20px]"
              style={{ opacity: 0.85 + i * 0.05 }}
            >
              <card.icon className="w-12 h-12 mb-8 opacity-90" strokeWidth={1.2} />
              <h3 className="font-heading text-xl md:text-2xl mb-4 leading-snug">{card.title}</h3>
              <div className="w-10 h-px mb-4 border-secondary bg-secondary" />
              <p className="text-sm leading-relaxed text-primary-foreground font-normal opacity-100">{card.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Audience;
