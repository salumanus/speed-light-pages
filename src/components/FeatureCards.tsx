import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const cards = [
  { num: "/01", title: "Strefa demo", desc: "Zadbamy o to, abyś mógł dotknąć i wypróbować technologii, o których mówimy." },
  { num: "/02", title: "Eksperci", desc: "Znamy się na sieciach i uwielbiamy o tym opowiadać. Potrafimy też słuchać." },
  { num: "/03", title: "Networking", desc: "Ludzie to fundament każdej konferencji. Poszerzysz swoje zawodowe grono." },
  { num: "/04", title: "Biznes i technologie", desc: "Merytoryka to zawsze najmocniejszy punkt Dni Światła." },
];

const FeatureCards = () => (
  <section className="section-py bg-dark-bg">
    <div className="container-conf">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <AnimatedSection key={card.num} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, borderColor: "hsl(1, 100%, 44%)" }}
              className="border border-dark-fg/10 rounded-lg p-8 md:p-10 transition-colors h-full"
            >
              <span className="font-heading text-5xl md:text-6xl text-accent/30 opacity-100 font-medium">{card.num}</span>
              <h3 className="font-heading text-2xl md:text-3xl text-dark-fg mt-4 mb-3">{card.title}</h3>
              <p className="text-dark-muted leading-relaxed">{card.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
