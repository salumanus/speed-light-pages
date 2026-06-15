import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useT } from "@/contexts/LanguageContext";

const FeatureCards = () => {
  const t = useT();
  const cards = [
    { num: "/01", title: t("Strefa demo", "Demo zone"), desc: t("Technologia nie tylko na slajdach - dotykasz, podłączasz, sprawdzasz, jak działa w praktyce.", "Technology not only on slides - you touch it, plug it in, see how it works in practice.") },
    { num: "/02", title: t("Eksperci", "Experts"), desc: t("Inżynierowie, którzy na co dzień projektują i wdrażają sieci. Pytaj śmiało - odpowiadają konkretem, nie marketingiem.", "Engineers who design and deploy networks every day. Ask freely - they answer with substance, not marketing.") },
    { num: "/03", title: t("Networking", "Networking"), desc: t("Branża telko i DC spotyka się raz w roku. Nowe kontakty, stare znajomości, rozmowy, które otwierają kolejne projekty.", "The telco and DC industry meets once a year. New contacts, old acquaintances, conversations that open up new projects.") },
    { num: "/04", title: t("Biznes i technologie", "Business and technology"), desc: t("Merytoryka, która realnie wpływa na Twój biznes - tematy i decyzje, które zabierasz ze sobą do poniedziałku.", "Substance that really impacts your business - topics and decisions you take with you to Monday.") },
  ];

  return (
  <section className="section-py bg-dark-bg">
    <div className="container-conf">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-5xl text-dark-fg mb-16 w-full leading-tight lg:text-4xl">
          {t("Cztery powody, żeby wjechać na podium Dni Światła.", "Four reasons to take the podium at Dni Światła.")}
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <AnimatedSection key={card.num} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, borderColor: "hsl(1, 100%, 44%)" }}
              className="border border-dark-fg/10 rounded-lg p-8 md:p-10 transition-colors h-full"
            >
              <span className="font-heading text-5xl text-accent/80 font-medium md:text-5xl">{card.num}</span>
              <h3 className="font-heading text-2xl text-dark-fg mt-4 mb-3 md:text-2xl">{card.title}</h3>
              <p className="leading-relaxed text-primary-foreground">{card.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FeatureCards;
