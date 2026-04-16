import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group flex-shrink-0"
  >
    <div className="bg-secondary rounded-lg overflow-hidden aspect-[3/4] mb-4 flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-b from-muted to-secondary flex items-end justify-center pb-6">
        <span className="font-heading text-2xl text-muted-foreground/40">
          {speaker.name.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
    </div>
    <h3 className="font-heading text-xl md:text-2xl text-foreground">{speaker.name}</h3>
    <p className="text-accent text-sm font-medium mb-1">{speaker.role}</p>
    <p className="text-muted-foreground text-sm">{speaker.desc}</p>
  </motion.div>
);

const SpeakerSlider = ({ speakers, perPage }: { speakers: Speaker[]; perPage: number }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(speakers.length / perPage);

  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);
  const next = () => setPage(p => (p + 1) % totalPages);

  const visible = speakers.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
            className={`grid gap-x-4 gap-y-10 ${
              perPage >= 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {visible.map(s => (
              <SpeakerCard key={s.name} speaker={s} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-muted-foreground"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === page ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-muted-foreground"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

const Speakers = () => (
  <>
    <section className="section-py bg-background">
      <div className="container-conf">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">Ekipa Salumanus</h2>
        </AnimatedSection>
        <SpeakerSlider speakers={salumanusSpeakers} perPage={4} />
      </div>
    </section>

    <section className="section-py bg-background">
      <div className="container-conf">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">Ekipa DCN Europe</h2>
        </AnimatedSection>
        <SpeakerSlider speakers={dcnSpeakers} perPage={4} />
      </div>
    </section>
  </>
);

export default Speakers;
