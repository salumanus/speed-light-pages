import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const AGENDA = [
  { time: "9:00–10:00", title: "Otwarcie Dni Światła", speaker: "" },
  { time: "10:00–10:25", title: "Jeden bolid, każdy tor. Uniwersalny moduł optyczny i jego konfiguracja w środowisku SRD", speaker: "Salumanus" },
  { time: "10:25–10:50", title: "DCN Europe — Enterprise / Wi-Fi 7 (premiera w maju) / case 100G w DC", speaker: "DCN Europe" },
  { time: "10:50–11:15", title: "QKD / kryptografia post-kwantowa — zabezpieczanie połączeń", speaker: "" },
  { time: "11:15–11:45", title: "Przerwa kawowa", speaker: "" },
  { time: "11:45–12:10", title: "DCN IP/MPLS — rodzina produktów dla operatorów (L2/L3)", speaker: "Raisecom" },
  { time: "12:10–12:35", title: "Telekom świadczący Enterprise jako usługa — klocki packet-optical", speaker: "" },
  { time: "12:35–13:00", title: "Mniej pitstopów, szybsze okrążenie. Multiservice BTS jako węzeł agregujący sieci operatora", speaker: "Salumanus" },
  { time: "13:00–14:30", title: "Lunch", speaker: "" },
  { time: "14:30–15:30", title: "Panel dyskusyjny: „Iskander czy totalny blackout? Jak przygotować sieć na wyzwania geopolityki”", speaker: "Łukasz Dec" },
  { time: "15:30–16:00", title: "Przerwa kawowa", speaker: "" },
  { time: "16:00–16:25", title: "DCNY - szczegóły wkrótce", speaker: "" },
  { time: "16:25–16:50", title: "Zdjąć balast, dodać prędkość. Koherentne 100/400/800G i IP over DWDM w praktyce", speaker: "Salumanus" },
  { time: "16:50–17:00", title: "KAHOOT i sesja Q&A", speaker: "" },
  { time: "17:00", title: "Rozpoczęcie imprezy w stylu F1", speaker: "" },
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
