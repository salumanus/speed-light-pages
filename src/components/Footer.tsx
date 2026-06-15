import logoDniSwiatla from "@/assets/dni-swiatla-2026.svg";
import { useT } from "@/contexts/LanguageContext";

const Footer = () => {
  const t = useT();
  return (
  <footer id="kontakt" className="border-t border-dark-fg/10 py-12 bg-[#15151e]">
    <div className="container-conf">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logoDniSwiatla} alt="Dni Światła 2026" className="h-[39px] w-auto mb-4" />
          <p className="text-sm leading-relaxed text-dark-muted">
            {t("Dni Światła 2026 - 18 Edycja", "Dni Światła 2026 - 18th Edition")}<br />
            {t("Inżynieria zwycięstwa. Technologia na najwyższych obrotach.", "Engineering of victory. Technology at full throttle.")}<br />
            <br />
            ul. Walerego Sławka 8A<br />
            {t("30-633 Kraków", "30-633 Krakow")}<br />
            marketing@salumanus.com<br />
            {t("Tel: (+48) 12 294 00 01", "Tel: (+48) 12 294 00 01")}
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg text-dark-fg mb-4">{t("Nawigacja", "Navigation")}</h4>
          <div className="flex flex-col gap-2">
            <a href="#home" className="text-dark-muted hover:text-accent text-sm transition-colors">{t("Home", "Home")}</a>
            <a href="#agenda" className="text-dark-muted hover:text-accent text-sm transition-colors">{t("Agenda", "Agenda")}</a>
            <a href="#rejestracja" className="text-dark-muted hover:text-accent text-sm transition-colors">{t("Rejestracja", "Registration")}&nbsp;</a>
            <a href="#kontakt" className="text-dark-muted hover:text-accent text-sm transition-colors">{t("Kontakt", "Contact")}</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg text-dark-fg mb-4">{t("Organizatorzy", "Organizers")}</h4>
          <div className="flex gap-6">
            <a href="https://www.salumanus.com/" target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-accent text-sm font-medium transition-colors">Salumanus</a>
            <a href="https://www.dcneurope.eu/pl" target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-accent text-sm font-medium transition-colors">DCN Europe</a>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-fg/10 mt-10 pt-6 text-center">
        <p className="text-dark-muted text-xs">{t("© 2026 Salumanus. Wszelkie prawa zastrzeżone.", "© 2026 Salumanus. All rights reserved.")}</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
