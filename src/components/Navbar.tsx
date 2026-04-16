import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Agenda", href: "#agenda" },
  { label: "Rejestracja", href: "#rejestracja" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"PL" | "EN">("PL");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-fg/10">
      <div className="container-conf flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="text-dark-fg font-heading text-2xl md:text-3xl tracking-wider">
          SALUMANUS
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-dark-fg/80 hover:text-accent text-sm font-medium uppercase tracking-wider transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "PL" ? "EN" : "PL")}
            className="text-dark-fg/60 hover:text-dark-fg text-sm font-medium border border-dark-fg/20 rounded px-3 py-1 transition-colors"
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
                className="text-dark-fg/80 hover:text-accent text-sm font-medium uppercase tracking-wider transition-colors"
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
