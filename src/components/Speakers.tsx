import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Speaker {
  name: string;
  role: string;
  desc: string;
}

const salumanusSpeakers: Speaker[] = [
  { name: "Marcin Bała", role: "CEO Salumanus", desc: "Wizjoner i lider branży telekomunikacyjnej z ponad 20-letnim doświadczeniem." },
  { name: "Andrzej Wojnar", role: "Architekt rozwiązań", desc: "Ekspert projektowania złożonych systemów sieciowych." },
  { name: "Łukasz Sukiennik", role: "Dyrektor Działu Systemów Transmisyjnych", desc: "Specjalista od systemów DWDM i transmisji optycznej." },
  { name: "Łukasz Bogdanik", role: "Procurement Manager", desc: "Odpowiada za strategiczne zakupy i relacje z dostawcami." },
  { name: "Jan Kowalski", role: "Inżynier systemowy", desc: "Specjalista od wdrożeń i konfiguracji sieci." },
  { name: "Anna Nowak", role: "Project Manager", desc: "Koordynuje projekty infrastrukturalne dla kluczowych klientów." },
  { name: "Piotr Wiśniewski", role: "Konsultant techniczny", desc: "Doradza w zakresie doboru technologii sieciowych." },
  { name: "Jarosław Garczewski", role: "Specjalista ds. wsparcia", desc: "Zapewnia najwyższą jakość obsługi posprzedażowej." },
];

const dcnSpeakers: Speaker[] = [
  { name: "Piotr Zając", role: "Prezes DCN Europe", desc: "Lider europejskiego oddziału DCN, odpowiedzialny za strategię rozwoju na rynku EMEA." },
  { name: "Grzegorz Banach", role: "Brand Manager DCN Europe", desc: "Buduje rozpoznawalność marki DCN w Europie i odpowiada za komunikację produktową." },
];

const SpeakerCard = ({ speaker, index, large = false }: { speaker: Speaker; index: number; large?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="group"
  >
    <div className={`bg-secondary rounded-lg overflow-hidden ${large ? "aspect-[3/4]" : "aspect-[3/4]"} mb-4 flex items-center justify-center`}>
      <div className="w-full h-full bg-gradient-to-b from-muted to-secondary flex items-end justify-center pb-6">
        <span className="font-heading text-2xl text-muted-foreground/40">{speaker.name.split(" ").map(n => n[0]).join("")}</span>
      </div>
    </div>
    <h3 className="font-heading text-xl md:text-2xl text-foreground">{speaker.name}</h3>
    <p className="text-accent text-sm font-medium mb-1">{speaker.role}</p>
    <p className="text-muted-foreground text-sm">{speaker.desc}</p>
  </motion.div>
);

const Speakers = () => (
  <>
    <section className="section-py bg-background">
      <div className="container-conf">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">Ekipa Salumanus</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {salumanusSpeakers.map((s, i) => (
            <SpeakerCard key={s.name} speaker={s} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="section-py bg-background">
      <div className="container-conf">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">Ekipa DCN Europe</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 max-w-4xl">
          {dcnSpeakers.map((s, i) => (
            <SpeakerCard key={s.name} speaker={s} index={i} large />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Speakers;
