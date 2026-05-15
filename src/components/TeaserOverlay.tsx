import { motion } from "framer-motion";
import teaserImg from "@/assets/teaser-2026.jpg";

const TeaserOverlay = () => {
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
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl text-dark-fg leading-none font-medium lg:text-7xl">
          Inżynieria zwycięstwa
        </h1>
      ),
      delay: 0.15,
    },
    {
      el: (
        <p className="text-xl text-primary-foreground font-normal md:text-3xl">
          Konferencja dla specjalistów z branży Telko i Data Center.
          <br />
          Technologia na najwyższych obrotach.
        </p>
      ),
      delay: 0.3,
    },
    {
      el: (
        <p className="text-base text-primary-foreground md:text-2xl">
          20 października 2026 - Hotel Novotel Centrum | Warszawa
        </p>
      ),
      delay: 0.45,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-[60px] pointer-events-none">
      <section className="relative w-[70%] h-[70%] flex items-end overflow-hidden bg-dark-bg rounded-lg shadow-2xl pointer-events-auto">
        <div className="absolute inset-0">
          <img
            src={teaserImg}
            alt="Dni Światła 2026 - zapowiedź"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-dark-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

        <div className="relative container-conf pb-12 md:pb-20">
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
        </div>
      </section>
    </div>
  );
};

export default TeaserOverlay;
