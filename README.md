# Dni Światła — dniswiatla.pl

Strona konferencji **Dni Światła 2026 (XVIII edycja)** — 20 października 2026, Hotel Novotel Centrum, Warszawa.
Organizator: Salumanus.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (animacje)

## Uruchomienie lokalne

```bash
npm install
npm run dev      # http://localhost:8080
```

## Pozostałe komendy

```bash
npm run build    # build produkcyjny do dist/
npm run preview  # podgląd buildu produkcyjnego
npm run lint     # ESLint
npm run test     # testy (vitest)
```

## Publikacja

Push do gałęzi `main` → **Netlify** buduje i publikuje automatycznie na dniswiatla.pl.

## Formularz rejestracji

Formularz obsługują **Netlify Forms** (`data-netlify="true"`, nazwa formularza: `rejestracja`).
Zgłoszenia trafiają do panelu Netlify → *Forms*. Ukryty formularz w `index.html` służy do
wykrycia pól przez Netlify podczas builda — musi zawierać te same pola co formularz w
`src/components/RegistrationModal.tsx`.
