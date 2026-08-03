import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import AnimatedSection from "./AnimatedSection";
import marcinBalaImg from "@/assets/marcin-bala.jpg";
import andrzejWojnarImg from "@/assets/andrzej-wojnar.jpg";
import lukaszSukiennikImg from "@/assets/lukasz-sukiennik.jpg";
import grzegorzRozImg from "@/assets/grzegorz-roz.jpg";
import ninoShaptoshviliImg from "@/assets/nino-shaptoshvili.jpg";
import kevinWangImg from "@/assets/kevin-wang.jpg";
import mateuszHacImg from "@/assets/mateusz-hac.jpg";
import { useT } from "@/contexts/LanguageContext";

interface BioSection {
  title?: string;
  text: string;
}

interface Speaker {
  name: string;
  role: string;
  desc: string;
  linkedin?: string;
  image: string;
  bio?: BioSection[];
}

const SpeakerCard = ({ speaker, onOpen }: { speaker: Speaker; onOpen: () => void }) => {
  const t = useT();

  return (
    <div className="group flex-shrink-0 flex flex-col">
      <button
        type="button"
        onClick={onOpen}
        className="bg-secondary overflow-hidden aspect-square mb-4 border border-accent block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        style={{ borderRadius: "5px" }}
        aria-label={`${t("O prelegencie", "About the speaker")}: ${speaker.name}`}
        tabIndex={-1}
      >
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </button>
      <h3 className="font-heading text-xl text-foreground md:text-xl">{speaker.name}</h3>
      <p className="text-accent text-sm font-medium mb-1">{speaker.role}</p>
      <p className="text-muted-foreground text-sm mb-4">{speaker.desc}</p>
      <div className="mt-auto flex items-center gap-3 flex-wrap">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {t("O prelegencie", "About the speaker")}
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
        {speaker.linkedin !== undefined && (
          <a
            href={speaker.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors inline-flex"
            aria-label={`LinkedIn ${speaker.name}`}
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

const SpeakerDialog = ({
  speaker,
  onOpenChange,
}: {
  speaker: Speaker | null;
  onOpenChange: (open: boolean) => void;
}) => {
  const t = useT();

  return (
    <Dialog open={speaker !== null} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl w-[calc(100%-2rem)] gap-0 overflow-hidden border-0 p-0 sm:rounded-2xl [&>button]:right-4 [&>button]:top-4 [&>button]:z-10 [&>button]:flex [&>button]:h-9 [&>button]:w-9 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:data-[state=open]:bg-background [&>button]:data-[state=open]:text-foreground [&>button]:opacity-100 [&>button]:shadow-sm [&>button]:ring-1 [&>button]:ring-border [&>button]:transition-colors [&>button]:hover:!bg-accent [&>button]:hover:!text-accent-foreground [&>button>svg]:h-5 [&>button>svg]:w-5"
        style={{ backgroundColor: "#f8f4f2" }}
      >
        {speaker && (
          <div className="max-h-[85vh] overflow-y-auto md:max-h-[80vh]">
            <div className="p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-sm bg-accent" />
                <span className="font-heading text-xs uppercase tracking-widest text-muted-foreground">
                  {t("Prelegent", "Speaker")}
                </span>
              </div>

              <div
                className="bg-secondary mb-5 aspect-square w-40 overflow-hidden border border-accent sm:w-48"
                style={{ borderRadius: "5px" }}
              >
                <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
              </div>

              <DialogTitle className="font-heading font-normal text-2xl leading-tight text-foreground sm:text-3xl">
                {speaker.name}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm font-medium text-accent">
                {speaker.role}
              </DialogDescription>

              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              )}

              <div className="my-6 h-px bg-border" />

              <h4 className="font-heading mb-4 text-xs uppercase tracking-widest text-muted-foreground">
                {t("O prelegencie", "About the speaker")}
              </h4>

              {speaker.bio ? (
                <div className="space-y-4">
                  {speaker.bio.map((section, i) => (
                    <div key={i} className={section.title && i > 0 ? "pt-3" : ""}>
                      {section.title && (
                        <h5 className="font-heading mb-2 text-base text-foreground">{section.title}</h5>
                      )}
                      <p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("Szczegóły wkrótce.", "Details coming soon.")}
                </p>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const SpeakerSlider = ({ speakers, perPage }: { speakers: Speaker[]; perPage: number }) => {
  const [page, setPage] = useState(0);
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);
  const totalPages = Math.ceil(speakers.length / perPage);

  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);
  const next = () => setPage(p => (p + 1) % totalPages);

  const visible = speakers.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
            className={`grid gap-x-4 gap-y-10 ${
              perPage >= 4
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {visible.map((s) => (
              <SpeakerCard key={s.name} speaker={s} onOpen={() => setActiveSpeaker(s)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-muted-foreground"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === page ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-muted-foreground"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <SpeakerDialog speaker={activeSpeaker} onOpenChange={(open) => !open && setActiveSpeaker(null)} />
    </div>
  );
};

const Speakers = () => {
  const t = useT();
  const salumanusSpeakers: Speaker[] = [
    {
      name: "Marcin Bała",
      role: t("Dyrektor ds. Technicznych", "Chief Technical Officer"),
      desc: t("Ewangelista xWDM. Łączy biznes, technologię i umiejętność czytania branżowej przyszłości - tam, gdzie inni widzą trendy, on widzi następny ruch.", "xWDM evangelist. Combines business, technology and the ability to read the industry's future - where others see trends, he sees the next move."),
      linkedin: "https://www.linkedin.com/in/marcin-bala",
      image: marcinBalaImg,
      bio: [
        {
          text: t(
            "Marcin w Salumanus odpowiada za rozwój firmy na poziomie technologicznym, strukturalnym i zarządczym. Wdraża innowacje i traktuje sukcesy firmy jak własne, czując się realną częścią tego, co się w niej dzieje.",
            "At Salumanus, Marcin is responsible for the company's development on the technological, structural and managerial level. He implements innovations and treats the company's successes as his own, feeling like a genuine part of what goes on there.",
          ),
        },
        {
          text: t(
            "Jego domeną jest multipleksacja z podziałem długości fali. CWDM, DWDM, technologia koherentna czy rozwiązania typu alien wavelength to tematy, o których może rozmawiać godzinami, wciąż znajdując w nich nowe wątki i niuanse.",
            "His domain is wavelength division multiplexing. CWDM, DWDM, coherent technology and alien wavelength solutions are subjects he can talk about for hours, still finding new threads and nuances in them.",
          ),
        },
        {
          text: t(
            "Napędza go determinacja i głód działania. Im trudniejsze wyzwanie, tym większa satysfakcja z jego rozwiązania, a poczucie, że dany dzień przyniósł konkretny efekt, jest dla niego istotnym paliwem do dalszej pracy.",
            "He is driven by determination and a hunger for action. The harder the challenge, the greater the satisfaction of solving it - and the feeling that a given day has produced a tangible result is important fuel for his further work.",
          ),
        },
        {
          text: t(
            "Osobną fascynacją są dla niego dane, a konkretnie poszukiwanie zależności i wzorców oraz odkrywanie, jak poszczególne elementy sieci łączą się ze sobą i dokąd to prowadzi.",
            "Data is a fascination of its own for him - specifically the search for correlations and patterns, and discovering how individual network elements connect with one another and where that leads.",
          ),
        },
        {
          text: t(
            "Jako prelegent nie mówi o technologii w oderwaniu od rzeczywistości biznesowej. Łączy głęboką wiedzę inżynierską z doświadczeniem menedżerskim, dzięki czemu potrafi przełożyć złożone zagadnienia sieciowe na konkretne, praktyczne wnioski.",
            "As a speaker, he never discusses technology in isolation from business reality. He combines deep engineering knowledge with managerial experience, which lets him translate complex networking topics into concrete, practical conclusions.",
          ),
        },
      ],
    },
    {
      name: "Andrzej Wojnar",
      role: t("Product Manager", "Product Manager"),
      desc: t("Inżynier i manager z artystyczną duszą. W Salumanus zagląda w bity i fotony - a czasem dzieli je na czworo. Po godzinach: fotografia i enologia.", "Engineer and manager with an artistic soul. At Salumanus he looks into bits and photons - and sometimes splits them in four. After hours: photography and oenology."),
      linkedin: "https://www.linkedin.com/in/andrzej-wojnar-kr",
      image: andrzejWojnarImg,
      bio: [
        {
          text: t(
            "Andrzej w Salumanus kieruje operacjami IT, opierając się na solidnym zapleczu technicznym w obszarze sieci, transmisji optycznej i dostarczania usług. Odpowiada za wydajność operacyjną, niezawodność infrastruktury oraz pracę zespołów inżynierskich.",
            "At Salumanus, Andrzej leads IT operations, backed by a solid technical grounding in networks, optical transport and service delivery. He is responsible for operational performance, infrastructure reliability and the work of the engineering teams.",
          ),
        },
        {
          text: t(
            "Jego domeną są sieci i transmisja optyczna, a codzienna praca toczy się wokół utrzymania usług na wysokim poziomie niezawodności. Opiera ją na rygorystycznych wskaźnikach KPI i SLA, które traktuje jako realne narzędzie zarządzania jakością, a nie formalność.",
            "His domain is networks and optical transport, and his daily work revolves around keeping services at a high level of reliability. He builds it on rigorous KPIs and SLAs, which he treats as a genuine quality management tool rather than a formality.",
          ),
        },
        {
          text: t(
            "W podejściu do pracy stawia na ciągłe doskonalenie procesów. Metodyki Lean i Scrum nie są dla niego hasłami, lecz sposobem na to, by usługi działały lepiej, a zespoły pracowały sprawniej.",
            "His approach to work is built on continuous process improvement. Lean and Scrum are not buzzwords to him but a way to make services run better and teams work more efficiently.",
          ),
        },
        {
          text: t(
            "Jego wyróżnikiem jest umiejętność łączenia operacji technicznych ze strategicznymi celami biznesowymi. Jako prelegent pokazuje, jak przełożyć złożoność infrastruktury IT na konkretne decyzje i wyniki, które rozumie zarówno inżynier, jak i osoba odpowiedzialna za stronę biznesową.",
            "What sets him apart is the ability to connect technical operations with strategic business goals. As a speaker, he shows how to translate the complexity of IT infrastructure into concrete decisions and results that both an engineer and someone responsible for the business side can understand.",
          ),
        },
      ],
    },
    {
      name: "Łukasz Sukiennik",
      role: t("Dyrektor Działu Wdrożenia i Serwisu", "Head of Deployment and Service"),
      desc: t("Inżynier automatyki z talentem do tłumaczenia zawiłości sieciowych projektów. Pracuje projektowo - autorskie rozwiązania, szyte pod konkretnego klienta.", "Automation engineer with a talent for explaining the complexities of network projects. Works project-based - custom solutions tailored to a specific client."),
      linkedin: "https://www.linkedin.com/in/lukasz-sukiennik",
      image: lukaszSukiennikImg,
      bio: [
        {
          text: t(
            "Łukasz w Salumanus kieruje Działem Systemów Transmisyjnych, prowadząc zespół inżynierów odpowiedzialny za sieci optyczne i transport danych. To on stoi za projektowaniem i wdrażaniem rozwiązań, które przenoszą ruch w skali setek gigabitów na duże odległości.",
            "At Salumanus, Łukasz heads the Transmission Systems Department, leading a team of engineers responsible for optical networks and data transport. He is the person behind the design and deployment of solutions that carry traffic at the scale of hundreds of gigabits over long distances.",
          ),
        },
        {
          text: t(
            "Jego domeną są aktywne systemy transmisyjne, a w szczególności technologie DWDM i OTN oraz architektury IP over DWDM. To obszar, w którym porusza się swobodnie zarówno na poziomie pojedynczego modułu, jak i całej topologii sieci operatorskiej czy data center.",
            "His domain is active transmission systems, in particular DWDM and OTN technologies and IP over DWDM architectures. It is an area he navigates comfortably at the level of a single module as well as the entire topology of a carrier or data center network.",
          ),
        },
        {
          text: t(
            "W pracy patrzy nie tylko na to, co działa dziś, ale też na to, dokąd zmierza branża. Śledzi i komentuje kierunki rozwoju transmisji optycznej, od modułów 800G opartych na układach DSP nowej generacji po kwantową dystrybucję klucza jako praktyczny sposób na podniesienie bezpieczeństwa istniejących sieci.",
            "In his work he looks not only at what works today, but also at where the industry is heading. He follows and comments on the directions of optical transport development, from 800G modules built on next-generation DSP chips to quantum key distribution as a practical way to raise the security of existing networks.",
          ),
        },
        {
          text: t(
            "Ta perspektywa czyni go rozpoznawalnym głosem eksperckim, którego prognozy dotyczące rozwoju infrastruktury telekomunikacyjnej i data center trafiają do mediów branżowych.",
            "That perspective has made him a recognized expert voice, whose forecasts on the development of telecommunications and data center infrastructure reach the industry press.",
          ),
        },
        {
          text: t(
            "Jako prelegent nie zatrzymuje się na opisie technologii. Pokazuje, w którą stronę zmierza rynek i co konkretnie oznacza to dla osób planujących rozwój własnej sieci w najbliższych latach.",
            "As a speaker, he does not stop at describing technology. He shows where the market is heading and what that means in concrete terms for anyone planning the development of their own network in the years ahead.",
          ),
        },
      ],
    },
    {
      name: "Mateusz Hąc",
      role: t("Manager ds. Zakupów", "Purchasing Manager"),
      desc: t("Szczegóły wkrótce.", "Details coming soon."),
      linkedin: "https://www.linkedin.com/in/mateusz-h%C4%85c-1b6879182/",
      image: mateuszHacImg,
    },
    {
      name: "Grzegorz Róż",
      role: t("Dyrektor Działu Produktów Sieciowych", "Head of Network Products"),
      desc: t("Zarządza Działem Produktów Sieciowych DCN Europe - stąd startują najlepsze sieci LAN i Wi-Fi 6. Łączy potrzeby klienta, integratora i marki w jedno działające rozwiązanie.", "Manages the DCN Europe Network Products department - the launchpad for the best LAN and Wi-Fi 6 networks. Combines the needs of the client, the integrator and the brand into one working solution."),
      linkedin: "https://www.linkedin.com/in/grzegorzroz/",
      image: grzegorzRozImg,
      bio: [
        {
          text: t(
            "Grzegorz kieruje Działem Produktów Sieciowych w DCN Europe, gdzie łączy perspektywy klienta końcowego, integratora i marki DCN. Jest liderem, który sam buduje i rozwija swój zespół, a na co dzień dba o to, by urządzenia sieciowe DCN odpowiadały na realne potrzeby europejskiego rynku.",
            "Grzegorz heads the Network Products department at DCN Europe, where he brings together the perspectives of the end customer, the integrator and the DCN brand. He is a leader who builds and develops his own team, and his day-to-day focus is on making sure DCN network devices answer the real needs of the European market.",
          ),
        },
        {
          text: t(
            "Jego specjalnością są sieci LAN i łączność bezprzewodowa. Łączy w tym obszarze rolę menedżera z kompetencjami eksperta sieciowego, a z branżą telekomunikacyjną i informatyczną związany jest od wielu lat, wcześniej między innymi w Orange i Telekomunikacji Polskiej.",
            "His specialty is LAN networks and wireless connectivity. In this area he combines the role of a manager with the skills of a network expert, and he has been part of the telecommunications and IT industry for many years, previously at Orange and Telekomunikacja Polska, among others.",
          ),
        },
        {
          text: t(
            "W swojej pracy z pasją buduje połączenia, nie tylko te sieciowe. Potrafi zestawić ze sobą oczekiwania klienta, możliwości integratora i ofertę marki DCN tak, by każda ze stron na tym zyskiwała.",
            "In his work he builds connections with passion - and not only the network kind. He knows how to line up the client's expectations, the integrator's capabilities and the DCN brand's offering so that every side comes out ahead.",
          ),
        },
        {
          text: t(
            "Chętnie dzieli się wiedzą. Prowadzi szkolenia z zakresu sieci komputerowych, a jako ekspert branżowy komentuje w mediach kierunki rozwoju rynku, w tym zagadnienia bezpieczeństwa sieci i odporności urządzeń na nowe zagrożenia.",
            "He is happy to share what he knows. He runs training courses on computer networks, and as an industry expert he comments in the media on where the market is heading, including network security and how resilient devices are to emerging threats.",
          ),
        },
        {
          text: t(
            "Na scenie czuje się swobodnie, bo szkolenie i objaśnianie technologii to jego codzienność. Złożone zagadnienia sieciowe przekłada na konkretne korzyści, zrozumiałe zarówno dla inżyniera, jak i dla osoby odpowiedzialnej za wybór rozwiązań w firmie.",
            "He is at ease on stage, because training and explaining technology is his everyday work. He translates complex networking topics into concrete benefits that are equally clear to an engineer and to the person choosing solutions for a company.",
          ),
        },
      ],
    },
    {
      name: "Nino Shaptoshvili",
      role: t("Wiceprezes ds. Sprzedaży, PacketLight Networks", "Vice President of Sales, PacketLight Networks"),
      linkedin: "https://www.linkedin.com/in/nino-shaptoshvili-mba-3061194/",
      desc: t("Ponad 25 lat w telekomunikacji i high-tech. Otwiera nowe rynki i buduje strategiczne partnerstwa - od Europy po Azję Środkową.", "Over 25 years in telecom and high-tech. Opens new markets and builds strategic partnerships - from Europe to Central Asia."),
      image: ninoShaptoshviliImg,
      bio: [
        {
          text: t(
            "Nino Shaptoshvili jest wiceprezes ds. sprzedaży w PacketLight Networks, gdzie odpowiada za globalną strategię sprzedaży i rozwój biznesu w Europie, na Bliskim Wschodzie, w Afryce i w Azji Środkowej. Ma ponad 25 lat międzynarodowego doświadczenia w branży telekomunikacyjnej i high-tech - zbudowała reputację osoby, która napędza wzrost biznesu, otwiera nowe rynki i rozwija strategiczne partnerstwa w bardzo zróżnicowanych regionach.",
            "Nino Shaptoshvili is Vice President of Sales at PacketLight Networks, where she leads the company's global sales strategy and business development across Europe, the Middle East, Africa, and Central Asia. With more than 25 years of international experience in the telecommunications and high-tech industries, she has built a reputation for driving business growth, opening new markets, and developing strategic partnerships across diverse regions.",
          ),
        },
        {
          text: t(
            "W trakcie swojej kariery Nino blisko współpracowała z operatorami sieci, dostawcami usług data center, przedsiębiorstwami i integratorami systemów, dostarczając rozwiązania transmisji optycznej o dużej pojemności oraz Data Center Interconnect (DCI). Jej doświadczenie obejmuje DWDM, OTN i infrastrukturę sieciową napędzaną przez AI, co daje jej unikalną perspektywę na technologie i strategie biznesowe kształtujące przyszłość łączności.",
            "Throughout her career, Nino has worked closely with network operators, data center providers, enterprises, and system integrators to deliver high-capacity optical transport and Data Center Interconnect (DCI) solutions. Her expertise spans DWDM, OTN, and AI-driven network infrastructure, giving her a unique perspective on the technologies and business strategies shaping the future of connectivity.",
          ),
        },
        {
          text: t(
            "Nino ukończyła studia licencjackie z polityki międzynarodowej i zarządzania oraz MBA z finansów na Northern Kentucky University w USA.",
            "Nino holds a Bachelor's degree in International Politics and Business Administration and an MBA in Finance from Northern Kentucky University, USA.",
          ),
        },
        {
          title: t("O PacketLight", "About PacketLight"),
          text: t(
            "PacketLight dostarcza platformy DWDM i OTN o dużej pojemności, obsługujące transport danych, storage, wideo i obciążeń AI w sieciach ciemnych włókien oraz WDM. Od sieci metro po magistrale ultra-long-haul - zintegrowane urządzenia firmy obsługują do 51,2 Tb/s na włókno, 8 Tb/s na urządzenie i 800G na długość fali. Rozwiązania nowej generacji są projektowane tak, by nadążać za rosnącymi wymaganiami obciążeń AI w całym spektrum infrastruktury prywatnej i publicznej.",
            "PacketLight delivers high-capacity DWDM and OTN platforms that support the transport of data, storage, video, and AI workloads across dark fiber and WDM networks. From metro networks to ultra-long-haul backbones, our integrated devices support up to 51.2Tbps per fiber, 8T per device, and 800G per wavelength. Our next generation solutions are tailored to accelerate the evolving demands of AI workloads across the full spectrum of private and public infrastructure.",
          ),
        },
        {
          text: t(
            "Zaprojektowane z myślą o realnej elastyczności systemy PacketLight - muxpondery i transpondery DWDM oraz OTN, ROADM i wbudowane szyfrowanie - są modularne, interoperacyjne i oparte na architekturze pay-as-you-grow. Zapewniają wysoką dostępność i pełną widoczność w każdym wdrożeniu, jednocześnie ograniczając złożoność operacyjną i całkowity koszt posiadania.",
            "Designed for real-world flexibility, PacketLight systems - DWDM and OTN muxponders/transponders, ROADM, and embedded encryption are modular, interoperable, and built on a pay-as-you-grow architecture, ensuring high availability and full visibility across any deployment all while reducing operational complexity and total cost of ownership.",
          ),
        },
      ],
    },
    {
      name: "Kevin Wang",
      role: t("Zastępca Dyrektora Działu Międzynarodowego, Raisecom", "Deputy Director, International Department, Raisecom"),
      linkedin: "https://www.linkedin.com/in/kevin-wang-59180727/",
      desc: t("Ponad 20 lat w Raisecom - od wsparcia technicznego po zarządzanie sprzedażą zagraniczną. Zbudował sieć dystrybucji w ponad 20 krajach UE.", "Over 20 years at Raisecom - from technical support to running international sales. Built a distribution network in more than 20 EU countries."),
      image: kevinWangImg,
      bio: [
        {
          title: t("Od stycznia 2021 · Dyrektor Zarządzający Działu Międzynarodowego, Raisecom Technology Co., Ltd.", "Jan. 2021 – present · Managing Director of International Dept., Raisecom Technology Co., Ltd."),
          text: t(
            "Kieruje działem sprzedaży zagranicznej i całościowym rozwojem biznesu na rynku globalnym. Współpracując bezpośrednio z CEO, pomógł firmie wejść na rynki zagraniczne i szybko zwiększyć skalę działalności.",
            "Directs and manages the overseas sales department and general business development in the global market. Working alongside the CEO, he has helped the company expand into overseas markets and grow the business rapidly.",
          ),
        },
        {
          title: t("Styczeń 2012 – 2021 · Dyrektor Generalny na rynek europejski, Raisecom Technology Co., Ltd.", "Jan. 2012 – 2021 · General Manager of Europe Market, Raisecom Technology Co., Ltd."),
          text: t(
            "Odpowiadał w pełni za eksplorację i rozwój biznesu na rynku europejskim. W tym czasie pomógł firmie zbudować kompletną sieć dystrybucji i partnerstw w ponad 20 krajach Unii Europejskiej. Uruchomił też dwa przedstawicielstwa - we Frankfurcie i w Paryżu - zatrudniając dwóch menedżerów rozwoju biznesu i dwóch menedżerów technicznych do obsługi lokalnego rynku. W 2018 roku przychody ze sprzedaży sięgnęły około 6 milionów USD.",
            "Fully responsible for exploring and developing business in the European market. During this period he helped the company establish a complete distribution and partnership network in more than 20 EU countries. He also set up two representative offices, in Frankfurt and Paris, employing two business development managers and two technical managers to serve the local market. Sales revenue reached around 6 million USD in 2018.",
          ),
        },
        {
          title: t("Styczeń 2008 – styczeń 2012 · Overseas Product Line Manager, Raisecom Technology Co., Ltd.", "Jan. 2008 – Jan. 2012 · Overseas Product Line Manager, Raisecom Technology Co., Ltd."),
          text: t(
            "Odpowiadał za zbudowanie zespołu product line managerów dla rynków zagranicznych Raisecom. W tym okresie przeszkolił i zbudował zespół 10 osób zajmujących się marketingiem, wsparciem technicznym przed- i posprzedażowym oraz zarządzaniem cyklem życia produktu dla ponad 11 linii produktowych w firmie.",
            "In charge of building up the product line manager team for Raisecom's overseas market. During this period he trained and built a team of 10 product line managers providing marketing, pre-sales and post-sales technical assistance, as well as product lifecycle management for more than 11 product lines in the company.",
          ),
        },
        {
          title: t("Grudzień 2004 – styczeń 2008 · Kierownik Wsparcia Technicznego, Raisecom Technology Co., Ltd.", "Dec. 2004 – Jan. 2008 · Technical Support Manager, Raisecom Technology Co., Ltd."),
          text: t(
            "Zapewniał wsparcie techniczne przed- i posprzedażowe dla menedżerów sprzedaży zagranicznej Raisecom, którzy rozwijali rynki Indii, Azji Południowo-Wschodniej, Ameryki Łacińskiej i Europy.",
            "Provided pre-sales and post-sales technical support for Raisecom's overseas sales managers exploring the markets of India, Southeast Asia, Latin America and Europe.",
          ),
        },
        {
          title: t("O Raisecom", "About Raisecom"),
          text: t(
            "Raisecom to globalny dostawca kompleksowych rozwiązań telekomunikacyjnych i sieciowych. Firma ma siedzibę w Pekinie i jest notowana na giełdzie w Szanghaju (SHA: 603803). W ostatniej dekadzie rozwijała się w imponującym tempie, obsługując partnerów i klientów w ponad 80 krajach na świecie.",
            "Raisecom is a global leading vendor providing comprehensive telecommunication and networking solutions. Headquartered in Beijing and listed on the Shanghai Stock Exchange (SHA: 603803), Raisecom has grown remarkably over the last decade, serving partners and customers in more than 80 countries worldwide.",
          ),
        },
        {
          text: t(
            "Dysponując ponad trzema centrami R&D i własnym zakładem produkcyjnym w Chinach, Raisecom wykorzystuje lokalne talenty i zaplecze łańcucha dostaw, by projektować, rozwijać i dostarczać produkty z najwyższej półki w efektywnej kosztowo formule. Dzięki rozbudowanej sieci lokalnych przedstawicielstw i spółek zależnych na każdym kontynencie firma konsekwentnie dostarcza szyte na miarę rozwiązania Packet Transport, Optical Transport, Broadband Access, Industrial/IoT i Wireless Networking - operatorom oraz klientom z branż wertykalnych, lokalnie.",
            "With more than three R&D centers and one manufacturing facility in China, Raisecom is able to harness local talent and supply chain resources to design, develop and provide best-in-class, cost-efficient products. Through well-established local representative offices and branch companies on every continent, Raisecom has always been dedicated to providing tailored Packet Transport, Optical Transport, Broadband Access, Industrial/IoT and Wireless Networking solutions to service providers and vertical industry customers locally.",
          ),
        },
      ],
    },
  ];

  return (
  <>
    <section className="bg-background my-[39px]" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      <div className="container-conf bg-[#f8f4f2] my-0 py-[40px]">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-sm bg-accent inline-block" />
            <span className="font-heading text-sm uppercase tracking-widest text-foreground">Salumanus</span>
          </div>
          <h2 className="font-heading text-2xl md:text-5xl text-foreground leading-tight lg:text-4xl" style={{ marginBottom: "1.5rem" }}>
            <span className="bg-accent text-accent-foreground px-3 py-1 inline-block">Salumanus i DCN Europe</span> Racing Team
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl">{t("Osiągnęli już niejeden szczyt przepustowości. Mistrzowie systemów xWDM i transmisji optycznej - na torze i w sieci nie ma dla nich niemożliwych prędkości.", "They've already reached more than one bandwidth peak. Masters of xWDM systems and optical transmission - on the track and in the network, no speed is impossible for them.")}</p>
        </AnimatedSection>
        <SpeakerSlider speakers={salumanusSpeakers} perPage={7} />
      </div>
    </section>
  </>
  );
};

export default Speakers;
