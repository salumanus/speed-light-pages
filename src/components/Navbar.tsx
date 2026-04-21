import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoDniSwiatla from "@/assets/dni-swiatla-2026.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Agenda", href: "#agenda" },
  { label: "Rejestracja", href: "#rejestracja" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"PL" | "EN">("PL");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${scrolled ? "bg-black border-dark-fg/10 backdrop-blur-sm" : "bg-accent border-transparent"}`}>
      <div className="container-conf flex items-center justify-between h-[52px] md:h-16">
        <a href="#home" className="flex items-center">
          <img src={logoDniSwiatla} alt="Dni Światła 2026" className="h-[32px] md:h-[39px] w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-dark-fg hover:opacity-70 text-sm font-medium uppercase tracking-wider transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "PL" ? "EN" : "PL")}
            className="text-dark-fg hover:opacity-70 text-sm font-medium border border-dark-fg/30 rounded px-3 py-1 transition-opacity"
          >
            {lang}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-dark-fg" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-bg border-t border-dark-fg/10 pb-6">
          <div className="container-conf flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-dark-fg hover:opacity-70 text-sm font-medium uppercase tracking-wider transition-opacity"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "PL" ? "EN" : "PL")}
              className="text-dark-fg/60 text-sm font-medium self-start border border-dark-fg/20 rounded px-3 py-1"
            >
              {lang}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
