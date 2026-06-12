import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Cpu, Network, Radio, Server } from "lucide-react";

const cards = [
  {
    icon: Network,
    title: "Inżynierowie sieci",
    desc: "Dla tych, którzy projektują i wdrażają - nie czytają o technologii, tylko jej używają. Koherenty optyczne w boju, IP/MPLS w realnych topologiach, packet-optical bez marketingu. Pokazujemy rozwiązania, które działają u operatorów, zanim trafią do folderów producentów.",
  },
  {
    icon: Server,
    title: "Administratorzy IT i Data Center",
    desc: "Dla ludzi odpowiedzialnych za sprawność, bezpieczeństwo i ciągłość działania sieci - od Wi-Fi 7 w kampusach po 100G w Data Center. Konkretne case'y, realne wdrożenia, praktyczne odpowiedzi na pytania, które pojawiają się o 3 nad ranem.",
  },
  {
    icon: Radio,
    title: "Architekci i CTO",
    desc: "Dla osób, które projektują infrastrukturę na dekady, nie na kwartały. QKD i kryptografia post-kwantowa, strategie odpornościowe, architektury multiservice BTS. Jak budować sieci, które przetrwają więcej niż jeden scenariusz - również ten, o którym wolelibyśmy nie myśleć.",
  },
  {
    icon: Cpu,
    title: "Decydenci biznesowi",
    desc: "Dla dyrektorów i zarządów operatorów telekomunikacyjnych oraz dostawców usług Enterprise. Tu technologia spotyka się z P&L - monetyzacja sieci, Enterprise-as-a-Service, zarządzanie ryzykiem geopolitycznym. Panel finałowy „Iskander czy totalny blackout\" — rozmowa, której nigdzie indziej nie usłyszysz.",
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
        <h2 className="font-heading text-2xl md:text-5xl text-foreground mb-16 w-full leading-tight lg:text-4xl">
          Stworzone dla tych, którzy projektują, utrzymują i decydują o{" "}
          <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">sieciach nowej generacji</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-accent text-accent-foreground p-8 md:p-10 h-full py-[15px] px-[15px] items-start justify-start flex flex-col rounded-lg"
              style={{ opacity: 0.85 + i * 0.05 }}
            >
              <card.icon className="mb-8 opacity-90 w-[30px] h-[30px]" strokeWidth={1.2} />
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
