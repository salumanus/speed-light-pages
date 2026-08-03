import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import agendaImg from "@/assets/a68ed97e-4c39-4ef1-bb7f-30c53452e0f4.jpg";
import { useT } from "@/contexts/LanguageContext";

interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  company: string;
  lang: string;
  highlight?: boolean;
  abstract?: string[];
}

const AgendaAbstract = ({ paragraphs, highlight }: { paragraphs: string[]; highlight?: boolean }) => {
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      <div className={`space-y-3 text-xs md:text-sm leading-relaxed ${highlight ? "text-accent-foreground/90" : "text-muted-foreground"}`}>
        {(open ? paragraphs : paragraphs.slice(0, 1)).map((p, i) => (
          <p key={i} className={!open && i === 0 ? "line-clamp-2" : ""}>
            {p}
          </p>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`mt-2 inline-flex items-center gap-1.5 text-sm md:text-[15px] font-medium transition-colors ${
          highlight ? "text-accent-foreground hover:text-accent-foreground/80" : "text-accent hover:text-foreground"
        }`}
      >
        {open ? t("Zwiń", "Show less") : t("Czytaj więcej", "Read more")}
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
};

const Agenda = () => {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const agendaItems: AgendaItem[] = [
    { time: "9:00–10:00", title: t("Otwarcie", "Opening"), speaker: "", company: "", lang: "" },
    { time: "10:00–10:25", title: t("Jeden bolid, każdy tor. Uniwersalny moduł optyczny i jego konfiguracja w środowisku SRD", "One car, every track. A universal optical module and its configuration in an SRD environment"), speaker: "Marcin Bała, Mateusz Hąc", company: "Salumanus", lang: "PL" },
    { time: "10:25–10:50", title: t("Sieci LAN i Wi-Fi o dużej gęstości w praktyce: niezawodne działanie i mierzalna wartość biznesowa w hotelach, na stadionach i w kampusach", "LAN and Wi-Fi networks with high density in practice: reliable operation and measurable business value in hotels, stadiums and campuses"), speaker: "Grzegorz Róż", company: "DCN Europe", lang: "" },
    { time: "10:50–11:15", title: t("Heqa — Szczegóły wkrótce", "Heqa — Details coming soon"), speaker: "", company: "", lang: "" },
    { time: "11:15–11:45", title: t("Przerwa kawowa", "Coffee break"), speaker: "", company: "", lang: "" },
    {
      time: "11:45–12:10",
      title: t("The New Formula for Metro Networks: Super-Converged Packet-Optical with SRv6 and 400G Coherent", "The New Formula for Metro Networks: Super-Converged Packet-Optical with SRv6 and 400G Coherent"),
      speaker: "Kevin Wang",
      company: "Raisecom",
      lang: "",
      abstract: [
        t(
          "Kiedyś zespoły wyścigowe wystawiały osobne samochody do kwalifikacji i do wyścigu - inne ustawienia, dwa razy więcej części, dwa razy większe ryzyko. Współczesna Formuła 1 wystawia jeden bolid dostrojony do wszystkiego. Sieci metro idą dokładnie tą samą ścieżką ewolucji: dzisiejszy stos legacy IP/MPLS + DWDM to właśnie ten stary garaż na dwa auta. Dwie warstwy, dwie płaszczyzny sterowania, dodatkowy balast pomiędzy kierowcą a torem.",
          "Racing teams once fielded separate cars for qualifying and the race - different setups, twice the parts, twice the risk. Modern F1 fields a single bolid tuned to do it all. Metro networks are on the same evolution path: today's legacy IP/MPLS + DWDM stack is that old two-car garage. Two layers, two control planes, extra weight sitting between the driver and the track.",
        ),
        t(
          "Ta prezentacja pokazuje ścieżkę modernizacji dla operatorów sieci metro - od warstwowego legacy do super-konwergentnej, gotowej na przyszłość sieci IPoDWDM z uproszczoną i zoptymalizowaną płaszczyzną sterowania SRv6 end-to-end, pracującej bezpośrednio na koherentnych falach 400G. Jedno podwozie, jedna kierownica, jedna pętla telemetrii - od brzegu dostępowego po rdzeń metro. Raisecom łączy swoje technologie z różnych obszarów w jedną platformę wyścigową, pomagając operatorom pozbyć się oporu, skrócić czas zwrotu z inwestycji i szybciej wjechać na podium infrastruktury sieciowej zorientowanej na AI.",
          "This session depicts the upgrade path for metro network service providers, from the layered legacy to a future-proof, super-converged IPoDWDM network with an optimized and simplified SRv6 end-to-end control plane, operating directly in 400G coherent wavelengths. One chassis, one steering wheel, one telemetry loop - from access edge to metro core. Raisecom brings together its cross-field technologies into a single racing platform, helping communication service providers strip out the drag, shorten the return on investment and get onto the podium of AI-oriented networking infrastructure faster.",
        ),
      ],
    },
    {
      time: "12:10–12:35",
      title: t("Paddock to Podium: Jak wysokowydajne DCI napędza rozproszoną infrastrukturę AI", "Paddock to Podium: How High-Performance DCI Powers Distributed AI Infrastructure"),
      speaker: "Nino Shaptoshvili",
      company: "Packetlight",
      lang: "",
      abstract: [
        t(
          "Nowoczesny zespół Formuły 1 nie ściga się z jednego garażu. Jego działania rozciągają się na tor, fabrykę i pokoje mission control, a mimo to w dniu wyścigu zachowuje się jak jeden zespół, na jednym zegarze. Sztuczna inteligencja przebudowuje architekturę centrów danych dokładnie w tym samym kierunku: klastry GPU, storage i moc obliczeniowa są coraz częściej rozproszone pomiędzy wiele lokalizacji, by zyskać skalowalność, odporność i lepsze wykorzystanie zasobów. Sieć pod spodem musi zapewnić deterministycznie niskie opóźnienia, ogromne pasmo i niepodważalne bezpieczeństwo - odpowiednik perfekcyjnego okrążenia, okrążenie po okrążeniu.",
          "A modern Formula 1 team does not race from a single garage. Its operations span the circuit, the factory and mission-control rooms, yet on race day it behaves as one team, on one clock. Artificial Intelligence is reshaping data center architecture in exactly the same direction: GPU clusters, storage and compute are increasingly distributed across multiple sites to gain scalability, resilience and better utilization. The underlying network must deliver deterministic low latency, massive bandwidth and rock-solid security - the equivalent of a perfect lap, every lap.",
        ),
        t(
          "Ta prezentacja pokazuje, jak wysokowydajne Data Center Interconnect stało się nawierzchnią toru pod siatką startową AI. Przyjrzymy się transmisji optycznej, która pozwala geograficznie oddalonym centrom danych działać jak jedna tkanka AI - przenosić ogromne zbiory treningowe i synchronizować obciążenia na pełnym gazie. Prędkość na prostej, czyli koherentne moduły 400G i 800G. Zajmiemy się też rywalem, który pracuje po cichu w padoku, a nie na torze: erą kwantową. Quantum Key Distribution (QKD), działające równolegle z szyfrowaną transmisją optyczną, daje kanał z wykrywaniem ingerencji, który chroni krytyczną komunikację długo po tym, jak opadnie flaga w szachownicę.",
          "This session shows how high-performance Data Center Interconnect has become the track surface beneath the AI grid. We will examine the optical transport that lets geographically separated data centers operate as a single AI fabric moving enormous training datasets and synchronizing workloads at full throttle. The straight-line speed of coherent 400G and 800G modules. We will also address a rival that works quietly in the paddock rather than on the track: the quantum era. Quantum Key Distribution (QKD), running alongside encrypted optical transport, provides a tamper-evident channel that protects mission-critical communications long after the checkered flag.",
        ),
      ],
    },
    { time: "12:35–13:00", title: t("Mniej pitstopów, szybsze okrążenie. Multiservice BTS jako węzeł agregujący sieci operatora", "Fewer pit stops, faster lap. Multiservice BTS as an aggregation node in the carrier network"), speaker: "Łukasz Sukiennik, Marcin Bała", company: "Salumanus", lang: "PL" },
    { time: "13:00–14:30", title: t("Lunch", "Lunch"), speaker: "", company: "", lang: "" },
    { time: "14:30–15:30", title: t(`Panel: „Iskander czy totalny blackout? Jak przygotować sieć telekomową na wyzwania geopolityki"`, `Panel: "Iskander or total blackout? How to prepare a telecommunications network for the challenges of geopolitics"`), speaker: "Łukasz Dec i inni", company: "", lang: "", highlight: true },
    { time: "15:30–16:00", title: t("Przerwa kawowa", "Coffee break"), speaker: "", company: "", lang: "" },
    { time: "16:00–16:25", title: t("DCNY — Szczegóły wkrótce", "DCNY — Details coming soon"), speaker: "", company: "", lang: "" },
    { time: "16:25–16:50", title: t("Zdjąć balast, dodać prędkość. Koherentne 100/400/800G i IP over DWDM w praktyce", "Drop the ballast, add the speed. Coherent 100/400/800G and IP over DWDM in practice"), speaker: "Andrzej Wojnar, Adam Sedlin", company: "Salumanus, Exatel", lang: "PL" },
    { time: "16:50–17:00", title: t("KAHOOT i sesja Q&A", "KAHOOT and Q&A session"), speaker: "", company: "", lang: "" },
    { time: "17:00", title: t("Rozpoczęcie imprezy w stylu Formuły 1", "Start of the Formula 1-style party"), speaker: "", company: "", lang: "" },
  ];

  return (
    <section id="agenda" className="section-py bg-background">
      <div className="container-conf">
        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-5xl mb-16 leading-tight text-foreground lg:text-4xl">
            {t("Agenda ", "Agenda for ")}<span className="bg-accent text-accent-foreground px-3 py-1 inline-block">Dni Światła</span> 2026
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <AnimatedSection className="lg:col-span-4">
            <div
              className="aspect-[4/5] w-full overflow-hidden"
              style={{ borderRadius: "5px" }}
            >
              <img
                src={agendaImg}
                alt={t("Bolid F1 na torze - Dni Światła 2026", "F1 car on the track - Dni Światła 2026")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <div ref={ref} className="relative lg:col-span-8">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
            <motion.div
              className="absolute left-2 top-0 w-0.5 bg-accent origin-top"
              style={{ height: lineHeight }}
            />

            <div className="flex flex-col gap-8">
              {agendaItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`flex gap-4 md:gap-8 pl-8 md:pl-10 relative ${
                    item.highlight ? "bg-accent rounded-lg py-4 pr-4" : ""
                  }`}
                >
                  <div className="absolute left-0.5 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                  <div
                    className={`font-heading min-w-[80px] md:min-w-[110px] text-sm md:text-[18px] ${
                      item.highlight ? "text-accent-foreground" : "text-accent"
                    }`}
                  >
                    {item.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                      <h3
                        className={`font-heading leading-snug text-sm md:text-lg ${
                          item.highlight ? "text-accent-foreground" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {item.lang && (
                        <span
                          className={`shrink-0 self-start inline-block border text-xs font-medium px-2 py-1 rounded ${
                            item.highlight
                              ? "border-accent-foreground text-accent-foreground"
                              : "border-border text-foreground"
                          }`}
                        >
                          {item.lang}
                        </span>
                      )}
                    </div>
                    {item.speaker && (
                      <p
                        className={`text-xs md:text-sm font-medium mt-2 ${
                          item.highlight ? "text-accent-foreground" : "text-foreground"
                        }`}
                      >
                        {item.speaker}
                      </p>
                    )}
                    {item.company && (
                      <p
                        className={`text-xs md:text-sm font-medium mt-1 ${
                          item.highlight ? "text-accent-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {item.company}
                      </p>
                    )}
                    {item.abstract && (
                      <AgendaAbstract paragraphs={item.abstract} highlight={item.highlight} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
