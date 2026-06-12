import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import faqImg from "@/assets/faq-f1.jpg";

const faqs = [
  {
    q: "Jak mogę kupić bilet na Dni Światła 2026?",
    a: "Zapisy dla partnerów Salumanus i DCN Europe są już otwarte - udział w tej grupie jest bezpłatny, wystarczy skontaktować się ze swoim opiekunem handlowym. Liczba miejsc jest ograniczona - Dni Światła co roku wypełniają salę do ostatniego krzesła.\n",
  },
  {
    q: "Gdzie odbędzie się konferencja?",
    a: "18 edycja Dni Światła odbędzie się 20 października 2026 w Hotelu Novotel Centrum w Warszawie - nowoczesne centrum konferencyjne w sercu stolicy, z dogodnym dojazdem komunikacją miejską.",
  },
  {
    q: "Dla kogo jest konferencja?",
    a: "Dni Światła to wydarzenie dla profesjonalistów z branży Telko i Data Center - inżynierów sieci, administratorów IT, architektów, CTO oraz decydentów biznesowych z polskich i międzynarodowych operatorów, integratorów i dostawców usług Enterprise.",
  },
  {
    q: "Kiedy zostanie opublikowana pełna agenda?",
    a: "Szczegółową agendę wraz z listą wszystkich prelegentów i tematów wystąpień opublikujemy na 60 dni przed konferencją - czyli w drugiej połowie sierpnia 2026. Wcześniej, co tydzień od lipca, będziemy odsłaniać kolejne prezentacje w naszych kanałach komunikacji.",
  },
  {
    q: "Czy prezentacje będą tłumaczone?",
    a: "Tak. Część wystąpień naszych partnerów międzynarodowych (Hekatron, PacketLight, RAICcom, DCN Europe) odbędzie się w języku angielskim - zapewniamy tłumaczenie na język polski.",
  },
  {
    q: "Czy w cenie biletu zapewniony jest nocleg?",
    a: "Nocleg nie jest wliczony w udział w konferencji. Na prośbę uczestników możemy udostępnić preferencyjne warunki rezerwacji w Hotelu Novotel Centrum - szczegóły otrzymasz po rejestracji.",
  },
  {
    q: "Czy po konferencji będzie wydarzenie networkingowe afterparty?",
    a: "Tak - i to jeden z najmocniejszych punktów Dni Światła. Po części merytorycznej zapraszamy na afterparty od 17:00 do 02:00: kolacja, DJ i przestrzeń na rozmowy, których nie zdążysz odbyć w ciągu dnia. To miejsce, gdzie zaczyna się więcej projektów niż na niejednej konferencji w całości.",
  },
  {
    q: "Czy można zostać partnerem lub sponsorem wydarzenia?",
    a: "Tak. Jeśli Twoja firma dostarcza rozwiązania z obszaru Telko, Data Center lub bezpieczeństwa sieci i chcesz zaprezentować je społeczności Dni Światła - napisz na marketing@salumanus.com. Liczba partnerów jest ograniczona.",
  },
  {
    q: "Nie znalazłeś odpowiedzi na swoje pytanie?",
    a: "Napisz do nas na marketing@salumanus.com - odpowiemy najszybciej jak to możliwe.",
  },
];

const Faq = () => (
  <section id="faq" className="section-py" style={{ backgroundColor: "#F8F4F2" }}>
    <div className="container-conf">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-6xl text-foreground mb-4 lg:text-4xl">FAQ</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12">
              Najczęściej zadawane pytania dotyczące XVIII edycji Dni Światła. Nie znalazłeś odpowiedzi? Skontaktuj się z nami.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full max-w-4xl">
              {faqs.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-foreground/10">
                  <AccordionTrigger className="font-heading text-lg text-foreground text-left hover:no-underline md:text-base py-[15px]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6 whitespace-pre-line">
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
