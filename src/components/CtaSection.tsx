import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import dolaczBg from "@/assets/dolacz-background.svg";

const CtaSection = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "rejestracja") {
      setSuccess(true);
    }
  }, []);

  return (
    <section
      id="rejestracja"
      className="section-py relative bg-cover bg-center"
      style={{
        backgroundColor: "#15151E",
        backgroundImage: `url(${dolaczBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-conf relative">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-5xl md:text-6xl text-dark-fg mb-6 lg:text-4xl">Dołącz do nas</h2>
            <p className="text-dark-muted text-lg md:text-xl mb-10">
              Zarejestruj się na 18 edycję Dni Światła i dołącz do grona liderów technologii sieciowych. Dla partnerów SALUMANUS i DCN Europe udział w konferencji jest bezpłatny. Daj znać swojemu opiekunowi handlowemu! Liczba miejsc ograniczona. Zarejestruj się już dziś!
            </p>
          </div>

          <div
            className="mt-4 max-w-4xl mx-auto rounded-2xl p-6 sm:p-10 text-white"
            style={{ backgroundColor: "rgba(15, 15, 26, 0.85)" }}
          >
            {success ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="font-heading text-2xl mb-2">Dziękujemy za rejestrację!</h3>
                <p className="text-white/70">Odezwiemy się wkrótce.</p>
              </div>
            ) : (
              <form
                name="rejestracja"
                method="POST"
                action="/?success=rejestracja#rejestracja"
                data-netlify="true"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="rejestracja" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="reg-name" className="block text-sm mb-1.5 text-white/90">
                      Imię i Nazwisko <span className="text-accent">*</span>
                    </label>
                    <input
                      id="reg-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-company" className="block text-sm mb-1.5 text-white/90">
                      Nazwa Firmy
                    </label>
                    <input
                      id="reg-company"
                      name="company"
                      type="text"
                      maxLength={100}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-email" className="block text-sm mb-1.5 text-white/90">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-phone" className="block text-sm mb-1.5 text-white/90">
                      Telefon <span className="text-accent">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg bg-white/10 border border-r-0 border-white/10 text-white/90 gap-1.5">
                        <span aria-hidden>🇵🇱</span>
                        <span className="text-sm">+48</span>
                      </span>
                      <input
                        id="reg-phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={20}
                        placeholder="512 345 678"
                        className="flex-1 px-4 py-2.5 rounded-r-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="reg-code" className="block text-sm mb-1.5 text-white/90">
                    Kod rejestracyjny <span className="text-accent">*</span>
                  </label>
                  <input
                    id="reg-code"
                    name="code"
                    type="text"
                    required
                    maxLength={50}
                    placeholder="Wpisz kod otrzymany od opiekuna handlowego"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reg-message" className="block text-sm mb-1.5 text-white/90">
                    Dodatkowe informacje / Wiadomość <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="reg-message"
                    name="message"
                    required
                    maxLength={1000}
                    style={{ minHeight: "120px" }}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-y"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-white/80 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    value="yes"
                    required
                    className="mt-1 w-4 h-4 rounded accent-accent shrink-0"
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności.
                  </span>
                </label>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="px-10 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#D61F2F", borderRadius: "2rem" }}
                  >
                    Zarejestruj się
                  </button>
                </div>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CtaSection;
