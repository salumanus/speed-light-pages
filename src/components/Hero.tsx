import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/Hero__1.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const items = [
    { el: <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 text-sm font-medium uppercase tracking-widest rounded-sm">Edycja XVIII</span>, delay: 0 },
    { el: <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl text-dark-fg leading-none font-semibold lg:text-7xl">Inżynieria zwycięstwa</h1>, delay: 0.15 },
    { el: <p className="text-xl text-primary-foreground font-normal md:text-4xl">Technologia na najwyższych obrotach.</p>, delay: 0.3 },
    { el: <p className="text-base md:text-lg text-dark-fg/60">20 Października 2026 — Hotel Novotel Centrum, Warszawa</p>, delay: 0.45 },
    { el: <a href="#rejestracja" className="btn-accent mt-2">Zarejestruj się</a>, delay: 0.6 },
  ];

  return (
    <section id="home" ref={ref} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
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
      <div className="relative container-conf pb-20 md:pb-28 flex flex-col gap-4 md:gap-5">
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
    </section>
  );
};

export default Hero;
