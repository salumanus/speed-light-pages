import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Cpu, Network, Radio, Server } from "lucide-react";
import { useT } from "@/contexts/LanguageContext";

const Audience = () => {
  const t = useT();
  const cards = [
    {
      icon: Network,
      title: t("Inżynierowie sieci", "Network engineers"),
      desc: t(
        "Dla tych, którzy projektują i wdrażają - nie czytają o technologii, tylko jej używają. Koherenty optyczne w boju, IP/MPLS w realnych topologiach, packet-optical bez marketingu. Pokazujemy rozwiązania, które działają u operatorów, zanim trafią do folderów producentów.",
        "For those who design and deploy - they don't just read about technology, they use it. Coherent optics in action, IP/MPLS in real topologies, packet-optical without marketing. We show solutions that work at carriers before they reach vendor brochures."
      ),
    },
    {
      icon: Server,
      title: t("Administratorzy IT i Data Center", "IT and Data Center administrators"),
      desc: t(
        "Dla ludzi odpowiedzialnych za sprawność, bezpieczeństwo i ciągłość działania sieci - od Wi-Fi 7 w kampusach po 100G w Data Center. Konkretne case'y, realne wdrożenia, praktyczne odpowiedzi na pytania, które pojawiają się o 3 nad ranem.",
        "For people responsible for the performance, security and continuity of networks - from Wi-Fi 7 on campuses to 100G in Data Centers. Concrete cases, real deployments, practical answers to questions that come up at 3 a.m."
      ),
    },
    {
      icon: Radio,
      title: t("Architekci i CTO", "Architects and CTOs"),
      desc: t(
        "Dla osób, które projektują infrastrukturę na dekady, nie na kwartały. QKD i kryptografia post-kwantowa, strategie odpornościowe, architektury multiservice BTS. Jak budować sieci, które przetrwają więcej niż jeden scenariusz - również ten, o którym wolelibyśmy nie myśleć.",
        "For those who design infrastructure for decades, not quarters. QKD and post-quantum cryptography, resilience strategies, multiservice BTS architectures. How to build networks that survive more than one scenario - including the one we'd rather not think about."
      ),
    },
    {
      icon: Cpu,
      title: t("Decydenci biznesowi", "Business decision-makers"),
      desc: t(
        "Dla dyrektorów i zarządów operatorów telekomunikacyjnych oraz dostawców usług Enterprise. Tu technologia spotyka się z P&L - monetyzacja sieci, Enterprise-as-a-Service, zarządzanie ryzykiem geopolitycznym. Panel finałowy „Iskander czy totalny blackout\" — rozmowa, której nigdzie indziej nie usłyszysz.",
        "For directors and boards of telecom operators and Enterprise service providers. Where technology meets P&L - network monetization, Enterprise-as-a-Service, geopolitical risk management. The closing panel \"Iskander or total blackout\" — a conversation you won't hear anywhere else."
      ),
    },
  ];

  return (
  <section className="section-py bg-background">
    <div className="container-conf">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-sm bg-accent inline-block" />
          <span className="font-heading text-sm uppercase tracking-widest text-foreground">{t("Dla kogo", "Who it's for")}</span>
        </div>
        <h2 className="font-heading text-2xl md:text-5xl text-foreground mb-16 w-full leading-tight lg:text-4xl">
          <span>{t("Stworzone dla tych, którzy projektują, utrzymują i decydują o ", "Built for those who design, maintain and decide on ")}</span>
          <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">{t("sieciach nowej generacji", "next-generation networks")}</span>
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
};

export default Audience;
