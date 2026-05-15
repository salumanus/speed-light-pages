import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Linkedin } from "lucide-react";
import teaserImg from "@/assets/teaser-2026.jpg";
import logo from "@/assets/logo-dni-swiatla-26.svg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const VIDEO_ID = "DD6osPQBDzw";
const VIDEO_THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

const TeaserOverlay = () => {
  const [open, setOpen] = useState(false);

  const items = [
    {
      el: (
        <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 text-sm font-medium uppercase tracking-widest rounded">
          18 Edycja
        </span>
      ),
      delay: 0,
    },
    {
      el: (
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-dark-fg leading-none font-medium">
          Inżynieria zwycięstwa
        </h1>
      ),
      delay: 0.15,
    },
    {
      el: (
        <p className="text-lg text-primary-foreground font-normal md:text-2xl">
          Konferencja dla specjalistów z branży Telko i Data Center.
          <br />
          Technologia na najwyższych obrotach.
        </p>
      ),
      delay: 0.3,
    },
    {
      el: (
        <p className="text-base text-primary-foreground md:text-xl">
          20 października 2026 - Hotel Novotel Centrum | Warszawa
        </p>
      ),
      delay: 0.45,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 lg:p-[60px] pointer-events-none">
      <section className="relative w-full h-[90%] lg:w-[70%] lg:h-[70%] flex items-end overflow-hidden bg-dark-bg rounded-lg shadow-2xl pointer-events-auto">
        <div className="absolute inset-0">
          <img
            src={teaserImg}
            alt="Dni Światła 2026 - zapowiedź"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-dark-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

        <motion.img
          src={logo}
          alt="Dni Światła 2026"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-8 md:top-10 left-8 md:left-12 h-10 md:h-14 w-auto"
        />

        <div className="relative w-full px-8 md:px-12 pb-8 md:pb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex flex-col gap-4 md:gap-5 lg:max-w-[65%]">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mt-2 flex-col flex items-start justify-start gap-[10px]"
            >
              <span className="text-dark-muted uppercase tracking-widest text-gray-50 font-medium text-2xl">
                Więcej informacji wkrótce
              </span>
              <a
                href="https://www.linkedin.com/company/salumanus/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Salumanus"
                className="text-dark-fg hover:text-accent transition-colors"
              >
                <Linkedin size={30} className="text-lg h-[30px] w-[30px]" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="w-full max-w-xs lg:w-64 shrink-0"
          >
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group block w-full text-left rounded-lg overflow-hidden bg-[#000000] shadow-xl transition-transform hover:-translate-y-1"
              aria-label="Odtwórz wideo Dni Światła 2024"
            >
              <div className="relative aspect-video">
                <img
                  src={VIDEO_THUMB}
                  alt="Dni Światła 2024 - miniatura wideo"
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
                <p className="text-dark-muted text-xs mt-1 uppercase tracking-widest">Zobacz Video</p>
              </div>
            </button>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
};

export default TeaserOverlay;
