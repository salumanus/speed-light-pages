import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import heroImg from "@/assets/Hero__1.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import RegistrationModal from "./RegistrationModal";
import { useT } from "@/contexts/LanguageContext";

const VIDEO_ID = "DD6osPQBDzw";
const VIDEO_THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [open, setOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const t = useT();

  const items = [
    { el: <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 text-sm font-medium uppercase tracking-widest rounded">{t("18 Edycja", "18th Edition")}</span>, delay: 0 },
    { el: <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-dark-fg leading-tight font-medium">{t("Inżynieria zwycięstwa", "Engineering of victory")}</h1>, delay: 0.15 },
    { el: <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-primary-foreground font-normal">{t("Konferencja dla specjalistów z branży Telko i Data Center. Technologia na najwyższych obrotach.", "A conference for Telco and Data Center professionals. Technology at full throttle.")}</p>, delay: 0.3 },
    { el: <p className="text-base text-primary-foreground md:text-2xl">{t("20 października 2026 - Hotel Novotel Centrum | Warszawa", "October 20, 2026 - Hotel Novotel Centrum | Warsaw")}</p>, delay: 0.45 },
    { el: (
      <div className="flex flex-wrap gap-3 mt-2">
        <a href="#rejestracja" className="btn-accent">{t("Zarejestruj się", "Register")}</a>
        <a
          href="#agenda"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-white text-white font-semibold transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
        >
          {t("Agenda", "Agenda")}
        </a>
      </div>
    ), delay: 0.6 },
  ];

  return (
    <section id="home" ref={ref} className="relative min-h-[450px] overflow-hidden pt-32 md:pt-36 lg:h-[70vh]">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroImg}
          alt="Formula 1 racing car on track"
          className="w-full h-[120%] object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" style={{ opacity: 0.85 }} />
      <div className="relative lg:absolute lg:inset-x-0 lg:bottom-0">
        <div className="container-conf pt-6 pb-12 md:pb-16 lg:pb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-10">
        <div className="flex flex-col gap-4 md:gap-5 lg:max-w-[70%]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
            >
              {item.el}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="w-full max-w-xs lg:w-72 shrink-0"
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group block w-full text-left rounded-lg overflow-hidden bg-[#000000] shadow-xl transition-transform hover:-translate-y-1"
            aria-label={t("Odtwórz wideo Dni Światła 2024", "Play Dni Światła 2024 video")}
          >
            <div className="relative aspect-video">
              <img
                src={VIDEO_THUMB}
                alt={t("Dni Światła 2024 - miniatura wideo", "Dni Światła 2024 - video thumbnail")}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                </span>
              </div>
            </div>
            <div className="px-4 py-3">
              <p className="font-heading text-dark-fg text-base md:text-lg leading-tight">Dni Światła 2024</p>
              <p className="text-dark-muted text-xs mt-1 uppercase tracking-widest">{t("Zobacz Video", "Watch Video")}</p>
            </div>
          </button>
        </motion.div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-[#000000] border-0 overflow-hidden">
          <div className="aspect-video w-full">
            {open && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Dni Światła 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <RegistrationModal open={regOpen} onOpenChange={setRegOpen} />
    </section>
  );
};

export default Hero;
