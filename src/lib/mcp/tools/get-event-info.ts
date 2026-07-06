import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_event_info",
  title: "Get event info",
  description:
    "Return key facts about the Dni Światła 2026 conference: edition, date, venue, city, organizers, and registration URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Dni Światła 2026",
      edition: "XVIII (18th)",
      tagline: "Inżynieria zwycięstwa — technologia na najwyższych obrotach",
      date: "2026-10-20",
      venue: "Hotel Novotel Centrum",
      city: "Warsaw, Poland",
      organizers: ["Salumanus", "DCN Europe"],
      audience: "Telco and Data Center professionals",
      website: "https://dniswiatla.pl",
      registration_url: "https://dniswiatla.pl/#rejestracja",
      language: "PL / EN",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
