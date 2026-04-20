const Footer = () => (
  <footer id="kontakt" className="border-t border-dark-fg/10 py-12 bg-[#15151e]">
    <div className="container-conf">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-2xl text-dark-fg mb-4">SALUMANUS</h3>
          <p className="text-sm leading-relaxed text-dark-muted">
            Dni Światła 2026 - Edycja XVIII<br />
            Inżynieria zwycięstwa. Technologia na najwyższych obrotach.<br />
            <br />
            <br />
            <br />
            ul. Walerego Sławka 8A<br />
            <br />
            30-633 Kraków<br />
            <br />
            marketing@salumanus.com<br />
            <br />
            Tel: 600 600 600
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
