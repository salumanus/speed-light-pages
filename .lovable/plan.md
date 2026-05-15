## Cel

Dodać dużą zaślepkę (teaser overlay) na stronie głównej, która zakrywa całą zawartość strony, prezentując nowe zdjęcie hero z napisami po lewej stronie. Reszta strony pozostaje wyrenderowana, ale wyblurowana w tle (bez możliwości scrollowania/interakcji).

## Co zrobimy

1. **Dodać nowy asset**: skopiować `user-uploads://ds2026.png` do `src/assets/teaser-2026.jpg` (samochód pod czerwoną płachtą + napis "DNI ŚWIATŁA" w tle).

2. **Stworzyć komponent `src/components/TeaserOverlay.tsx`**:
   - Pełnoekranowy `fixed inset-0 z-[100]` overlay.
   - Tło: zdjęcie `teaser-2026.jpg` jako `object-cover` na całą wysokość/szerokość, z ciemnym gradientem od lewej dla czytelności tekstu.
   - Po lewej stronie (wyrównane do dolnej części, podobnie jak obecne hero), kolumna z tekstami:
     - Czerwony badge "18 EDYCJA" (ten sam styl co obecny `bg-accent text-accent-foreground` badge)
     - H1 "Inżynieria zwycięstwa" (font Formula1, duży)
     - Paragraf "Konferencja dla specjalistów z branży Telko i Data Center.<br/>Technologia na najwyższych obrotach."
     - "20 października 2026 - Hotel Novotel Centrum | Warszawa"
   - **Bez** przycisków "Zarejestruj się" / "Agenda".
   - Animacje wejścia w stylu obecnego Hero (framer-motion stagger).
   - Logo/Navbar pozostawiamy widoczne nad overlayem? → Domyślnie nie, overlay zakrywa wszystko (najprostszy "coming soon" feel).

3. **Zmodyfikować `src/pages/Index.tsx`**:
   - Wyrenderować istniejące sekcje wewnątrz wrappera z klasami `blur-md pointer-events-none select-none` oraz ustawić `overflow: hidden` na `<body>` przez efekt (lub klasą na wrapperze) by wyłączyć scroll.
   - Nad spod wyblurowaną zawartością wstawić `<TeaserOverlay />`.

## Szczegóły techniczne

- Wrapper blur: `<div aria-hidden className="fixed inset-0 overflow-hidden blur-md pointer-events-none select-none">…sekcje…</div>` — używamy `fixed` żeby uniknąć scrollbarów, plus overlay teasera na wierzchu.
- Alternatywnie: `<div className="filter blur-md pointer-events-none">` wokół normalnej struktury + `document.body.style.overflow='hidden'` w `useEffect`.
- Wybieramy wariant z `useEffect` blokującym scroll i klasą `blur-md` na wrapperze treści, żeby zachować naturalny układ.
- Z-index: navbar w obecnym kodzie prawdopodobnie ma własny z-index — overlay dostanie `z-[100]` aby był ponad wszystkim.

## Co NIE zmieniamy

- Treść istniejących sekcji (Hero, About, Speakers, Agenda itp.) zostaje nietknięta — łatwo będzie ją odsłonić przez usunięcie overlayu po dacie/decyzji.

## Pliki do zmiany

- nowy: `src/assets/teaser-2026.jpg`
- nowy: `src/components/TeaserOverlay.tsx`
- edytowany: `src/pages/Index.tsx`