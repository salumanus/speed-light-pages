import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const cards = [
  { num: "/01", title: "Strefa demo", desc: "Technologia nie tylko na slajdach - dotykasz, podłączasz, sprawdzasz, jak działa w praktyce." },
  { num: "/02", title: "Eksperci", desc: "Inżynierowie, którzy na co dzień projektują i wdrażają sieci. Pytaj śmiało - odpowiadają konkretem, nie marketingiem." },
  { num: "/03", title: "Networking", desc: "Branża telko i DC spotyka się raz w roku. Nowe kontakty, stare znajomości, rozmowy, które otwierają kolejne projekty." },
  { num: "/04", title: "Biznes i technologie", desc: "Merytoryka, która realnie wpływa na Twój biznes - tematy i decyzje, które zabierasz ze sobą do poniedziałku." },
];

const FeatureCards = () => (
  <section className="section-py bg-dark-bg">
    <div className="container-conf">
      <AnimatedSection>
        <h2 className="font-heading text-2xl md:text-5xl text-dark-fg mb-16 w-full leading-tight lg:text-4xl">
          Cztery powody, żeby wjechać na podium Dni Światła.
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

export default FeatureCards;
