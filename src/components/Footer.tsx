import logoDniSwiatla from "@/assets/dni-swiatla-2026.svg";

const Footer = () => (
  <footer id="kontakt" className="border-t border-dark-fg/10 py-12 bg-[#15151e]">
    <div className="container-conf">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logoDniSwiatla} alt="Dni Światła 2026" className="h-[39px] w-auto mb-4" />
          <p className="text-sm leading-relaxed text-dark-muted">
            Dni Światła 2026 - Edycja XVIII<br />
            Inżynieria zwycięstwa. Technologia na najwyższych obrotach.<br />
            <br />
            ul. Walerego Sławka 8A<br />
            30-633 Kraków<br />
            marketing@salumanus.com<br />
            Tel: (+48) 12 294 00 01
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg text-dark-fg mb-4">Nawigacja</h4>
          <div className="flex flex-col gap-2">
            <a href="#home" className="text-dark-muted hover:text-accent text-sm transition-colors">Home</a>
            <a href="#agenda" className="text-dark-muted hover:text-accent text-sm transition-colors">Agenda</a>
            <a href="#rejestracja" className="text-dark-muted hover:text-accent text-sm transition-colors">Rejestracja</a>
            <a href="#kontakt" className="text-dark-muted hover:text-accent text-sm transition-colors">Kontakt</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg text-dark-fg mb-4">Organizatorzy</h4>
          <div className="flex gap-6">
            <span className="text-dark-muted text-sm font-medium">Salumanus</span>
            <span className="text-dark-muted text-sm font-medium">DCN Europe</span>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-fg/10 mt-10 pt-6 text-center">
        <p className="text-dark-muted text-xs">© 2026 Salumanus. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
