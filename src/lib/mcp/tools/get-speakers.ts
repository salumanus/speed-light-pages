import { defineTool } from "@lovable.dev/mcp-js";

const SPEAKERS = [
  { name: "Marcin Bała", role: "CEO Salumanus", company: "Salumanus" },
  { name: "Andrzej Wojnar", role: "Salumanus", company: "Salumanus" },
  { name: "Łukasz Sukiennik", role: "Salumanus", company: "Salumanus" },
  { name: "Grzegorz Roź", role: "Salumanus", company: "Salumanus" },
  { name: "Łukasz Dec", role: "Moderator panelu dyskusyjnego", company: "" },
];

export default defineTool({
  name: "get_speakers",
  title: "Get speakers",
  description: "Return the list of confirmed speakers for Dni Światła 2026.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SPEAKERS, null, 2) }],
    structuredContent: { speakers: SPEAKERS, count: SPEAKERS.length },
  }),
});
