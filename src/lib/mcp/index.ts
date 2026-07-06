import { defineMcp } from "@lovable.dev/mcp-js";
import getEventInfo from "./tools/get-event-info";
import getAgenda from "./tools/get-agenda";
import getSpeakers from "./tools/get-speakers";

export default defineMcp({
  name: "dni-swiatla-2026-mcp",
  title: "Dni Światła 2026",
  version: "0.1.0",
  instructions:
    "Public information tools for the Dni Światła 2026 conference (Salumanus & DCN Europe, 20 October 2026, Warsaw). Use `get_event_info` for date/venue/registration, `get_agenda` for the session schedule (optional keyword filter), and `get_speakers` for the speaker list.",
  tools: [getEventInfo, getAgenda, getSpeakers],
});
