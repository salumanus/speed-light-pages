import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import faqImg from "@/assets/faq-f1.jpg";

const faqs = [
  {
    q: "Jak mogę kupić bilet na Dni Światła 2026?",
    a: "Bilety dostępne są wyłącznie poprzez oficjalny formularz rejestracyjny na naszej stronie. Po wypełnieniu formularza otrzymasz potwierdzenie oraz instrukcję płatności na podany adres e-mail.",
  },
  {
    q: "Gdzie odbędzie się konferencja?",
    a: "XVIII edycja Dni Światła odbędzie się w nowoczesnym centrum konferencyjnym w Polsce. Dokładny adres oraz informacje logistyczne prześlemy zarejestrowanym uczestnikom na 30 dni przed wydarzeniem.",
  },
  {
    q: "Czy w cenie biletu zapewniony jest nocleg?",
    a: "Tak, standardowy pakiet uczestnictwa obejmuje dwa noclegi w hotelu partnerskim wraz z pełnym wyżywieniem oraz dostępem do strefy networkingowej.",
  },
  {
    q: "Kiedy zostanie opublikowana pełna agenda?",
    a: "Szczegółowa agenda wraz z listą wszystkich prelegentów i tematów wystąpień zostanie opublikowana na 60 dni przed rozpoczęciem konferencji.",
  },
  {
    q: "Czy mogę otrzymać fakturę VAT?",
    a: "Oczywiście. Podczas rejestracji zaznacz opcję otrzymania faktury VAT i podaj dane firmy. Faktura zostanie wystawiona po zaksięgowaniu wpłaty.",
  },
  {
    q: "Czy istnieje możliwość rezygnacji z udziału?",
    a: "Tak, rezygnacja jest możliwa do 30 dni przed wydarzeniem ze zwrotem 100% wpłaconej kwoty. Po tym terminie zwrot wynosi 50%.",
  },
];

const Faq = () => (
  <section id="faq" className="section-py" style={{ backgroundColor: "#F8F4F2" }}>
    <div className="container-conf">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          <AnimatedSection>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-4 lg:text-6xl">FAQ</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12">
              Najczęściej zadawane pytania dotyczące XVIII edycji Dni Światła. Nie znalazłeś odpowiedzi? Skontaktuj się z nami.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full max-w-4xl">
              {faqs.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-foreground/10">
                  <AccordionTrigger className="font-heading text-lg md:text-xl text-foreground py-6 text-left hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.2} className="hidden lg:block">
          <img
            src={faqImg}
            alt="Bolid F1 - Zielone światło dla Twoich danych"
            className="w-[380px] xl:w-[440px] h-auto rounded-2xl object-cover sticky top-24"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Faq;
