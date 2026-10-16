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
    { time: "8:45–9:45", title: t("Rejestracje na wydarzenie", "Event registration"), speaker: "", company: "", lang: "" },
    { time: "9:45–10:00", title: t("Otwarcie Dni Światła 2026", "Opening of Dni Światła 2026"), speaker: "Krzysztof Podgórski, Bartosz Bednarski", company: "", lang: "" },
    {
      time: "10:00–10:25",
      title: t("Jeden bolid, każdy tor. Uniwersalny moduł optyczny i jego konfiguracja w środowisku SRD", "One car, every track. A universal optical module and its configuration in an SRD environment"),
      speaker: "Marcin Bała, Mateusz Hąc",
      company: "Salumanus",
      lang: "PL",
      abstract: [
        t(
          "W Formule 1 to nie liczba samochodów decyduje o wyniku, lecz to, jak szybko zespół potrafi przygotować bolid pod konkretny tor. Inne ustawienia na Monako, inne na Monzy. Uniwersalny moduł optyczny GBC Photonics działa dokładnie jak takie podwozie: to jeden transceiver, który w środowisku SRD (Smart Recode Device) „stroimy\" pod wybraną trasę, pod sprzęt dowolnego producenta, prędkość od 1G do 1.6T, kanał DWDM, pasmo O-Band czy fronthaul 5G. Zamiast magazynu pełnego jednorazowych części zamiennych inżynier ma jeden moduł i SRD. Podczas prezentacji pokażemy, jak przebiega taki „pit stop\": przeprogramowanie i autotuning modułu do wolnego kanału na multiplekserze, diagnostyka najczęstszych błędów oraz realna redukcja stocków magazynowych i elektroodpadów. Krótki pitstop to wielka oszczędność czasu na torze.",
          "In Formula 1 the result is not decided by the number of cars, but by how quickly the team can set a car up for a specific track. One setup for Monaco, another for Monza. The GBC Photonics universal optical module works exactly like such a chassis: it is a single transceiver that, in the SRD (Smart Recode Device) environment, you \"tune\" for a chosen route, for equipment from any vendor, for speeds from 1G to 1.6T, a DWDM channel, the O-Band or 5G fronthaul. Instead of a warehouse full of single-use spare parts, the engineer has one module and an SRD. During the presentation we will show how such a \"pit stop\" works: reprogramming and auto-tuning the module to a free channel on the multiplexer, diagnosing the most common faults, and a real reduction in warehouse stock and electronic waste. A short pit stop means a big saving of time on the track.",
        ),
      ],
    },
    {
      time: "10:25–10:50",
      title: t("Sieci LAN i Wi-Fi o dużej gęstości w praktyce: niezawodne działanie i mierzalna wartość biznesowa w hotelach, na stadionach i w kampusach", "LAN and Wi-Fi networks with high density in practice: reliable operation and measurable business value in hotels, stadiums and campuses"),
      speaker: "Grzegorz Róż",
      company: "DCN Europe",
      lang: "PL",
      abstract: [
        t(
          "Wyścigu rzadko wygrywa się na prostej, za to bardzo łatwo przegrywa się go w pierwszym zakręcie, gdy dwadzieścia bolidów wchodzi w to samo miejsce w tej samej sekundzie. Sieć dużej gęstości mierzy się dokładnie z tym momentem: tysiące urządzeń walczy o ten sam eter, w tym samym czasie. Dokładanie punktów dostępowych działa wtedy jak dokładanie koni mechanicznych bolidowi bez docisku aerodynamicznego, bo przyrost mocy zamienia się w utratę przyczepności, czyli w zakłócenia współkanałowe. Rozstrzyga ustawienie: projekt radiowy, sterowanie mocą i kanałami, poprawnie zaplanowany roaming, pasmo 6 GHz w standardach Wi‑Fi 6E i 7 oraz zaplecze przewodowe, które ten ruch udźwignie. Pokażemy przy tym, że trzy środowiska jadą po zupełnie różnych torach. Hotel przypomina Monako: ciasno, bez miejsca na błąd, liczy się równe tempo, a nie rekord okrążenia, bo IPTV, VoIP i systemy hotelowe wybaczają mniej niż test prędkości. Stadion to kwalifikacje: kilkadziesiąt tysięcy urządzeń, kilkanaście minut ekstremalnego obciążenia i jedno okrążenie, które musi się udać. Kampus to pełny dystans wyścigu: tysiące użytkowników od rana do wieczora, mobilność i bezpieczeństwo w każdym sektorze. Wynik mierzymy jak czas okrążenia, czyli liczbą zgłoszeń do helpdesku, ocenami gości, sprawnością obsługi wydarzeń i kosztem utrzymania. Bez telemetrii i pitwallu, czyli monitoringu oraz analityki, nawet najlepszy projekt jedzie na ślepo.",
          "A race is rarely won on the straight, but it is very easily lost in the first corner, when twenty cars go for the same spot in the same second. A high-density network faces exactly that moment: thousands of devices fighting for the same airwaves at the same time. Adding access points then works like adding horsepower to a car with no downforce - the extra power turns into lost grip, that is, co-channel interference. What decides the outcome is the setup: the RF design, power and channel control, properly planned roaming, the 6 GHz band in Wi-Fi 6E and 7, and a wired backbone that can carry the traffic. We will also show that the three environments race on completely different tracks. A hotel is like Monaco: tight, no room for error, where a steady pace matters more than a lap record, because IPTV, VoIP and hotel systems are less forgiving than a speed test. A stadium is qualifying: tens of thousands of devices, a dozen or so minutes of extreme load and a single lap that has to go right. A campus is the full race distance: thousands of users from morning to evening, mobility and security in every sector. We measure the result like a lap time - by the number of helpdesk tickets, guest ratings, how smoothly events run and the cost of operation. Without telemetry and a pit wall, that is, monitoring and analytics, even the best design is driving blind.",
        ),
      ],
    },
    {
      time: "10:50–11:15",
      title: "No Fuel, No Race: Protecting AI Data as It Crosses Cloud, Edge and Beyond",
      speaker: "Amir Kandell",
      company: "HEQA Security",
      lang: "EN",
      abstract: [
        "In Formula 1, everyone talks about the engine, but no engine wins without fuel in the tank, telemetry on the wire and radio traffic between the driver and the pit wall. AI is described the same way: as a compute problem. Operationally, it is a data problem. As AI deployments scale across cloud, edge, telecom, industrial and government environments, this data crosses networks spanning multiple trust domains - the modern equivalent of a global race calendar, where every circuit has different marshals, different rules and different risks. The attack surface expands with every new venue. HEQA will frame the problem, walk through concrete use cases and outline the market trends shaping how organizations protect AI data in motion.",
      ],
    },
    { time: "11:15–11:45", title: t("Przerwa kawowa", "Coffee break"), speaker: "", company: "", lang: "" },
    {
      time: "11:45–12:10",
      title: t("The New Formula for Metro Networks: Super-Converged Packet-Optical with SRv6 and 400G Coherent", "The New Formula for Metro Networks: Super-Converged Packet-Optical with SRv6 and 400G Coherent"),
      speaker: "Kevin Wang",
      company: "Raisecom",
      lang: "EN",
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
      title: "Paddock to Podium: How High-Performance DCI Powers Distributed AI Infrastructure",
      speaker: "Nino Shaptoshvili",
      company: "PacketLight",
      lang: "EN",
      abstract: [
        "A modern Formula 1 team does not race from a single garage. Its operations span the circuit, the factory and mission-control rooms, yet on race day it behaves as one team, on one clock. Artificial Intelligence is reshaping data center architecture in exactly the same direction: GPU clusters, storage and compute are increasingly distributed across multiple sites to gain scalability, resilience and better utilization. The underlying network must deliver deterministic low latency, massive bandwidth and rock-solid security - the equivalent of a perfect lap, every lap.",
        "This session shows how high-performance Data Center Interconnect has become the track surface beneath the AI grid. We will examine the optical transport that lets geographically separated data centers operate as a single AI fabric moving enormous training datasets and synchronizing workloads at full throttle. The straight-line speed of coherent 400G and 800G modules. We will also address a rival that works quietly in the paddock rather than on the track: the quantum era. Quantum Key Distribution (QKD), running alongside encrypted optical transport, provides a tamper-evident channel that protects mission-critical communications long after the checkered flag.",
      ],
    },
    {
      time: "12:35–13:00",
      title: t("Mniej pitstopów, szybsze okrążenie. Multiservice BTS jako węzeł agregujący sieci operatora", "Fewer pit stops, faster lap. Multiservice BTS as an aggregation node in the carrier network"),
      speaker: "Marcin Bała",
      company: "Salumanus",
      lang: "PL",
      abstract: [
        t(
          "Każdy postój w alei serwisowej kosztuje czas, a każdy węzeł w sieci kosztuje CAPEX i OPEX. Najlepsze zespoły F1 wygrywają, ograniczając liczbę pit stopów i koncentrując całą pracę w jednym, dobrze zorganizowanym boksie. Ta sama logika stoi za koncepcją Multiservice BTS: węzeł stacji bazowej przestaje obsługiwać wyłącznie ruch komórkowy i staje się boksem agregującym, punktem zbiorczym dla usług biznesowych i światłowodowych. Mniej węzłów to lżejszy bolid, a lżejszy bolid to szybsze okrążenie, czyli niższy koszt na każdy przesłany Gbit. W prezentacji pokażemy architekturę takiego wielousługowego węzła i wskażemy, gdzie dokładnie powstaje oszczędność.",
          "Every stop in the pit lane costs time, and every node in the network costs CAPEX and OPEX. The best F1 teams win by limiting the number of pit stops and concentrating all the work in one well-organized garage. The same logic sits behind the Multiservice BTS concept: a base station node stops handling mobile traffic alone and becomes an aggregating garage, a collection point for business and fiber services. Fewer nodes mean a lighter car, and a lighter car means a faster lap - in other words, a lower cost per Gbit transmitted. In the presentation we will show the architecture of such a multiservice node and point out exactly where the savings arise.",
        ),
      ],
    },
    { time: "13:00–14:30", title: t("Lunch", "Lunch"), speaker: "", company: "", lang: "" },
    { time: "14:30–15:30", title: t(`Panel: „Sieć gotowa na wszystko. Jak budować odporną infrastrukturę telekomunikacyjną"`, `Panel: "A network ready for anything. How to build resilient telecommunications infrastructure"`), speaker: "Łukasz Dec (TELKO.IN), Łukasz Chudyga (T‑Mobile Polska), Radosław Potera (Atman), Michał Szczęsny (Exatel), Piotr Jaworski (Orange Polska), Bartosz Bednarski (Salumanus)", company: "", lang: "", highlight: true },
    { time: "15:30–16:00", title: t("Przerwa kawowa", "Coffee break"), speaker: "", company: "", lang: "" },
    {
      time: "16:00–16:25",
      title: "DCN solutions fallow market needs",
      speaker: "Stafford Yu",
      company: "DCN",
      lang: "EN",
      abstract: [
        "Audio-visual systems are entering their third phase. AVoIP 1.0 moved AV signals onto IP networks, and AVoIP 2.0 brought standards and interoperability. AVoIP 3.0 is about running AV like IT infrastructure, with cloud management, automation and analytics. This session presents DCN’s AV-ready switching portfolio, from 1G PoE access switches for Dante AV and NDI in meeting rooms, through 10G switches for low-latency, lossless 4K SDVoE video walls, to 100G full-fibre spine-leaf cores that scale to more than 1,400 encoder and decoder nodes. It shows a dedicated AV web interface with multicast and QoS tools, and a stadium deployment that drives more than 500 displays and 20 live video walls in lossless 4K/60. The session closes with the ImCloud management platform and DCN’s Cloud Stone data center switches, including 51.2 Tbps models with up to 128 × 400G ports and support for SONiC.",
      ],
    },
    {
      time: "16:25–16:50",
      title: t("Zdjąć balast, dodać prędkość. Koherentne 100/400/800G i IP over DWDM w praktyce", "Drop the ballast, add the speed. Coherent 100/400/800G and IP over DWDM in practice"),
      speaker: "Andrzej Wojnar, Adam Sedlin",
      company: "Salumanus, Exatel",
      lang: "PL",
      abstract: [
        t(
          "Mistrzostwo rozstrzyga się na długiej prostej, tam liczy się czysta prędkość maksymalna i to, ile balastu zostawiło się w garażu. Architektura IP over DWDM to właśnie zdejmowanie balastu: usunięcie transponderów i modułów „szarych\", które dokładają sieci masy i oporu. Moduł koherentny GBC Photonics trafia wprost do portu QSFP routera i prosto na multiplekser. Granica między warstwą transportową a dostępową się zaciera. Efekt jest mierzalny jak czas okrążenia: do 65% niższy CAPEX w sieci szkieletowej, do 80% mniej miejsca i do 90% niższy pobór mocy. W prezentacji omówimy realne wdrożenia 100G i 400G oraz drogę do 800G, konkretne aplikacje oraz monitorowanie transmisji jako pitwall, czytający każde okrążenie.",
          "The championship is decided on the long straight, where what counts is pure top speed and how much ballast you left behind in the garage. IP over DWDM architecture is exactly that kind of ballast removal: stripping out the transponders and \"grey\" modules that add mass and drag to the network. The GBC Photonics coherent module goes straight into the router's QSFP port and straight on to the multiplexer. The boundary between the transport and access layers blurs. The effect is as measurable as a lap time: up to 65% lower CAPEX in the backbone network, up to 80% less space and up to 90% lower power consumption. In the presentation we will cover real 100G and 400G deployments and the road to 800G, specific applications, and transmission monitoring as a pit wall that reads every single lap.",
        ),
      ],
    },
    { time: "16:50–17:00", title: t("KAHOOT", "KAHOOT"), speaker: "", company: "", lang: "" },
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
                    className={`font-heading w-[96px] md:w-[132px] shrink-0 text-sm md:text-[18px] ${
                      item.highlight ? "text-accent-foreground" : "text-accent"
                    }`}
                  >
                    {item.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                      <h3
                        className={`font-heading leading-snug ${
                          item.highlight ? "text-base md:text-2xl text-accent-foreground" : "text-sm md:text-lg text-foreground"
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
