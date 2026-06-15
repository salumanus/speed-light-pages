import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import faqImg from "@/assets/faq-f1.jpg";
import { useT } from "@/contexts/LanguageContext";

const Faq = () => {
  const t = useT();
  const faqs = [
    {
      q: t("Jak mogę kupić bilet na Dni Światła 2026?", "How can I get a ticket for Dni Światła 2026?"),
      a: t(
        "Zapisy dla partnerów Salumanus i DCN Europe są już otwarte - udział w tej grupie jest bezpłatny, wystarczy skontaktować się ze swoim opiekunem handlowym. Liczba miejsc jest ograniczona - Dni Światła co roku wypełniają salę do ostatniego krzesła.\n",
        "Registration for Salumanus and DCN Europe partners is already open - participation in this group is free, simply contact your sales representative. The number of seats is limited - Dni Światła fills the room to the last chair every year.\n"
      ),
    },
    {
      q: t("Gdzie odbędzie się konferencja?", "Where will the conference take place?"),
      a: t(
        "18 edycja Dni Światła odbędzie się 20 października 2026 w Hotelu Novotel Centrum w Warszawie - nowoczesne centrum konferencyjne w sercu stolicy, z dogodnym dojazdem komunikacją miejską.",
        "The 18th edition of Dni Światła will take place on October 20, 2026, at Hotel Novotel Centrum in Warsaw - a modern conference center in the heart of the capital, with convenient access by public transport."
      ),
    },
    {
      q: t("Dla kogo jest konferencja?", "Who is the conference for?"),
      a: t(
        "Dni Światła to wydarzenie dla profesjonalistów z branży Telko i Data Center - inżynierów sieci, administratorów IT, architektów, CTO oraz decydentów biznesowych z polskich i międzynarodowych operatorów, integratorów i dostawców usług Enterprise.",
        "Dni Światła is an event for professionals from the Telco and Data Center industry - network engineers, IT administrators, architects, CTOs and business decision-makers from Polish and international operators, integrators and Enterprise service providers."
      ),
    },
    {
      q: t("Kiedy zostanie opublikowana pełna agenda?", "When will the full agenda be published?"),
      a: t(
        "Szczegółową agendę wraz z listą wszystkich prelegentów i tematów wystąpień opublikujemy na 60 dni przed konferencją - czyli w drugiej połowie sierpnia 2026. Wcześniej, co tydzień od lipca, będziemy odsłaniać kolejne prezentacje w naszych kanałach komunikacji.",
        "We will publish the detailed agenda with the full list of speakers and presentation topics 60 days before the conference - that is, in the second half of August 2026. Before that, starting in July, we will reveal more presentations every week on our communication channels."
      ),
    },
    {
      q: t("Czy prezentacje będą tłumaczone?", "Will the presentations be translated?"),
      a: t(
        "Tak. Część wystąpień naszych partnerów międzynarodowych (Hekatron, PacketLight, RAICcom, DCN Europe) odbędzie się w języku angielskim - zapewniamy tłumaczenie na język polski.",
        "Yes. Some presentations by our international partners (Hekatron, PacketLight, RAICcom, DCN Europe) will be held in English - we provide translation into Polish."
      ),
    },
    {
      q: t("Czy w cenie biletu zapewniony jest nocleg?", "Is accommodation included in the ticket price?"),
      a: t(
        "Nocleg nie jest wliczony w udział w konferencji. Na prośbę uczestników możemy udostępnić preferencyjne warunki rezerwacji w Hotelu Novotel Centrum - szczegóły otrzymasz po rejestracji.",
        "Accommodation is not included in the conference fee. At participants' request we can provide preferential booking conditions at Hotel Novotel Centrum - details will be sent after registration."
      ),
    },
    {
      q: t("Czy po konferencji będzie wydarzenie networkingowe afterparty?", "Will there be a networking afterparty after the conference?"),
      a: t(
        "Tak - i to jeden z najmocniejszych punktów Dni Światła. Po części merytorycznej zapraszamy na afterparty od 17:00 do 02:00: kolacja, DJ i przestrzeń na rozmowy, których nie zdążysz odbyć w ciągu dnia. To miejsce, gdzie zaczyna się więcej projektów niż na niejednej konferencji w całości.",
        "Yes - and it's one of the highlights of Dni Światła. After the agenda we invite you to the afterparty from 5 p.m. to 2 a.m.: dinner, DJ and space for conversations you didn't have time for during the day. This is where more projects are started than at many entire conferences."
      ),
    },
    {
      q: t("Czy można zostać partnerem lub sponsorem wydarzenia?", "Can I become a partner or sponsor of the event?"),
      a: t(
        "Tak. Jeśli Twoja firma dostarcza rozwiązania z obszaru Telko, Data Center lub bezpieczeństwa sieci i chcesz zaprezentować je społeczności Dni Światła - napisz na marketing@salumanus.com. Liczba partnerów jest ograniczona.",
        "Yes. If your company provides solutions in Telco, Data Center or network security and you'd like to present them to the Dni Światła community - write to marketing@salumanus.com. The number of partners is limited."
      ),
    },
    {
      q: t("Nie znalazłeś odpowiedzi na swoje pytanie?", "Didn't find the answer to your question?"),
      a: t(
        "Napisz do nas na marketing@salumanus.com - odpowiemy najszybciej jak to możliwe.",
        "Write to us at marketing@salumanus.com - we'll reply as soon as possible."
      ),
    },
  ];

  return (
  <section id="faq" className="section-py" style={{ backgroundColor: "#F8F4F2" }}>
    <div className="container-conf">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-6xl text-foreground mb-4 lg:text-4xl">FAQ</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12">
              {t(
                "Najczęściej zadawane pytania dotyczące XVIII edycji Dni Światła. Nie znalazłeś odpowiedzi? Skontaktuj się z nami.",
                "Frequently asked questions about the 18th edition of Dni Światła. Didn't find an answer? Contact us."
              )}
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
            alt={t("Bolid F1 - Zielone światło dla Twoich danych", "F1 car - Green light for your data")}
            className="w-[380px] xl:w-[440px] h-auto rounded-2xl object-cover sticky top-24"
          />
        </AnimatedSection>
      </div>
    </div>
  </section>
  );
};

export default Faq;
