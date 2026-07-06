## Zmiana

W agendzie (`src/components/Agenda.tsx`), pozycja **11:45–12:10 „DCN IP/MPLS — rodzina produktów dla operatorów (L2/L3)"** dostanie prelegenta/firmę **Raisecom** — tak samo jak pozycja 12:35–13:00 ma podpis „Salumanus" pod tytułem.

Dodatkowo zaktualizuję ten sam wpis w danych narzędzia MCP (`src/lib/mcp/tools/get-agenda.ts`), gdzie obecnie `speaker: "DCN Europe"` przy tej sesji — zmienię na `"Raisecom"`, żeby agenda w aplikacji i to, co zwraca MCP, były spójne.

Po zmianie w MCP zregeneruję manifest i zdeployuję funkcję `mcp`.

### Pliki
- `src/components/Agenda.tsx` — ustawić `speaker: "Raisecom"` w pozycji 11:45–12:10
- `src/lib/mcp/tools/get-agenda.ts` — zmienić `speaker` z `"DCN Europe"` na `"Raisecom"` w tej samej pozycji

Nie ruszam innych sesji ani stylów — jedynie dopisuję podpis pod tytułem, dokładnie tak jak przy Salumanus.
