import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import marcinBalaImg from "@/assets/marcin-bala.jpg";
import andrzejWojnarImg from "@/assets/andrzej-wojnar.jpg";
import lukaszSukiennikImg from "@/assets/lukasz-sukiennik.jpg";
import grzegorzRozImg from "@/assets/grzegorz-roz.jpg";

interface Speaker {
  name: string;
  role: string;
  desc: string;
  linkedin?: string;
  image: string;
}

const speakerPhotos = [
  "1560250097-0b93528c311a",
  "1472099645785-5658abf4ff4e",
  "1519085360753-af0119f7cbe7",
  "1507003211169-0a1dd7228f2d",
  "1500648767791-00dcc994a43e",
  "1438761681033-6461ffad8d80",
  "1494790108377-be9c29b29330",
  "1506794778202-cad84cf45f1d",
  "1573497019940-1c28c88b4f3e",
  "1580489944761-15a19d654956",
];

const salumanusSpeakers: Speaker[] = [
  { name: "Marcin Bała", role: "Dyrektor ds. Technicznych", desc: "Ewangelista xWDM. Łączy biznes, technologię i umiejętność czytania branżowej przyszłości - tam, gdzie inni widzą trendy, on widzi następny ruch.", linkedin: "https://www.linkedin.com/in/marcin-bala", image: marcinBalaImg },
  { name: "Andrzej Wojnar", role: "Product Manager", desc: "Inżynier i manager z artystyczną duszą. W Salumanus zagląda w bity i fotony - a czasem dzieli je na czworo. Po godzinach: fotografia i enologia.", linkedin: "https://www.linkedin.com/in/andrzej-wojnar-kr", image: andrzejWojnarImg },
  { name: "Łukasz Sukiennik", role: "Dyrektor Działu Wdrożenia i Serwisu", desc: "Inżynier automatyki z talentem do tłumaczenia zawiłości sieciowych projektów. Pracuje projektowo - autorskie rozwiązania, szyte pod konkretnego klienta.", linkedin: "https://www.linkedin.com/in/lukasz-sukiennik", image: lukaszSukiennikImg },
  { name: "Grzegorz Róż", role: "Dyrektor Działu Produktów Sieciowych", desc: "Zarządza Działem Produktów Sieciowych DCN Europe - stąd startują najlepsze sieci LAN i Wi-Fi 6. Łączy potrzeby klienta, integratora i marki w jedno działające rozwiązanie.", linkedin: "https://www.linkedin.com/in/grzegorzroz/", image: grzegorzRozImg },
];

const SpeakerCard = ({ speaker, index }: { speaker: Speaker; index: number }) => (
  <div className="group flex-shrink-0">
    <div className="bg-secondary overflow-hidden aspect-square mb-4 border border-accent" style={{ borderRadius: "5px" }}>
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <h3 className="font-heading text-xl text-foreground md:text-xl">{speaker.name}</h3>
    <p className="text-accent text-sm font-medium mb-1">{speaker.role}</p>
    <p className="text-muted-foreground text-sm mb-3">{speaker.desc}</p>
    {speaker.linkedin !== undefined && (
      <a
        href={speaker.linkedin || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-accent transition-colors inline-flex"
        aria-label={`LinkedIn ${speaker.name}`}
      >
        <Linkedin size={18} />
      </a>
    )}
  </div>
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
            {visible.map((s, i) => (
              <SpeakerCard key={s.name} speaker={s} index={page * perPage + i} />
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
    <section className="bg-background my-[39px]" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      <div className="container-conf bg-[#f8f4f2] my-0 py-[40px]">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-sm bg-accent inline-block" />
            <span className="font-heading text-sm uppercase tracking-widest text-foreground">Salumanus</span>
          </div>
          <h2 className="font-heading text-2xl md:text-5xl text-foreground leading-tight lg:text-4xl" style={{ marginBottom: "1.5rem" }}>
            <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">Salumanus i DCN Europe</span> Racing Team
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl">Osiągnęli już niejeden szczyt przepustowości. Mistrzowie systemów xWDM i transmisji optycznej - na torze i w sieci nie ma dla nich niemożliwych prędkości.</p>
        </AnimatedSection>
        <SpeakerSlider speakers={salumanusSpeakers} perPage={4} />
      </div>
    </section>
  </>
);

export default Speakers;
