import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const AGENDA = [
  { time: "9:00–10:00", title: "Otwarcie", speaker: "", company: "" },
  { time: "10:00–10:25", title: "Jeden bolid, każdy tor. Uniwersalny moduł optyczny i jego konfiguracja w środowisku SRD", speaker: "Marcin Bała, Mateusz Hąc", company: "Salumanus" },
  { time: "10:25–10:50", title: "Sieci LAN i Wi-Fi o dużej gęstości w praktyce: niezawodne działanie i mierzalna wartość biznesowa w hotelach, na stadionach i w kampusach", speaker: "Grzegorz Róż", company: "DCN Europe" },
  { time: "10:50–11:15", title: "QKD / kryptografia post-kwantowa — zabezpieczanie połączeń", speaker: "Łukasz Sukiennik, Marcin Bała", company: "Salumanus" },
  { time: "11:15–11:45", title: "Przerwa kawowa", speaker: "", company: "" },
  { time: "11:45–12:10", title: "Raisecom — rodzina produktów dla operatorów (L2/L3)", speaker: "", company: "Raisecom" },
  { time: "12:10–12:35", title: "Paddock to Podium: How High-Performance DCI Powers Distributed AI Infrastructure", speaker: "Nino Shaptoshvili", company: "Packetlight" },
  { time: "12:35–13:00", title: "Mniej pitstopów, szybsze okrążenie. Multiservice BTS jako węzeł agregujący sieci operatora", speaker: "Łukasz Sukiennik, Marcin Bała", company: "Salumanus" },
  { time: "13:00–14:30", title: "Lunch", speaker: "", company: "" },
  { time: "14:30–15:30", title: "Panel: „Iskander czy totalny blackout? Jak przygotować sieć telekomową na wyzwania geopolityki”", speaker: "Łukasz Dec i inni", company: "" },
  { time: "15:30–16:00", title: "Przerwa kawowa", speaker: "", company: "" },
  { time: "16:00–16:25", title: "DCNY", speaker: "", company: "DCNY" },
  { time: "16:25–16:50", title: "Zdjąć balast, dodać prędkość. Koherentne 100/400/800G i IP over DWDM w praktyce", speaker: "Andrzej Wojnar, Adam Sedlin", company: "Salumanus, Exatel" },
  { time: "16:50–17:00", title: "KAHOOT i sesja Q&A", speaker: "", company: "" },
  { time: "17:00", title: "Rozpoczęcie imprezy w stylu Formuły 1", speaker: "", company: "" },
];

export default defineTool({
  name: "get_agenda",
  title: "Get agenda",
  description:
    "Return the full session agenda for Dni Światła 2026 with time slots, titles, and speaker/company when known.",
  inputSchema: {
    filter: z
      .string()
      .optional()
      .describe("Optional case-insensitive substring to match against session title or speaker."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ filter }) => {
    const items = filter
      ? AGENDA.filter((i) =>
          (i.title + " " + i.speaker).toLowerCase().includes(filter.toLowerCase()),
        )
      : AGENDA;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items, count: items.length },
    };
  },
});
