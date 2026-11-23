# Fikabaren ☕

Fikabaren är webbplatsen för ett litet hantverksbageri och kafé. Applikationen är byggd med
**React** och **Vite** och används som utgångspunkt i gruppuppgiften *Produktionsoptimerad frontend*.

> ⚠️ Applikationen fungerar, men den är **inte** optimerad för produktion. Den innehåller
> avsiktliga brister inom prestanda, leverans och tillgänglighet. Er uppgift är att mäta, hitta och
> åtgärda dem.

## Sidor

| Route | Innehåll |
| --- | --- |
| `/` | Startsida med hero, veckans favoriter, galleri, recensioner och nyhetsbrev |
| `/meny` | Hela menyn med sök, sortering och kategorifilter |
| `/meny/:id` | Produktsida, t.ex. `/meny/kanelbulle` |
| `/om-oss` | Historia, statistik (diagram) och personal |
| `/kontakt` | Kontaktformulär och karta |
| `/varukorg` | Varukorg (sparas i `localStorage`) |

## Kom igång

Kräver Node.js 20.19 eller senare (se `.nvmrc`).

```bash
npm install
npm run dev       # utvecklingsserver på http://localhost:5173
npm run build     # produktionsbygge till dist/
npm run preview   # servera produktionsbygget på http://localhost:4173
```

Mät alltid prestanda mot **produktionsbygget** (`npm run preview` eller den publicerade sajten),
aldrig mot utvecklingsservern.

## Publicera på Render

Fikabaren är en Single Page Application och publiceras som en **Render Static Site**:

- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`
- **Rewrite rule:** `/*` → `/index.html` (krävs för att direktlänkar som `/meny` ska fungera)

En `render.yaml` med den nuvarande konfigurationen finns i roten. Ni kan använda den som
Blueprint eller skapa tjänsterna manuellt i Render Dashboard. Kom ihåg att uppgiften kräver
**två** tjänster: en för branchen `baseline` och en för `main`.

## Projektstruktur

```
├── index.html            # HTML-mall
├── public/               # statiska filer (bilder, skript, favicon)
├── src/
│   ├── components/       # återanvändbara komponenter
│   ├── context/          # varukorgens state
│   ├── data/             # produkter och recensioner
│   ├── pages/            # en komponent per route
│   ├── utils/            # formatering och rekommendationer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── render.yaml
└── vite.config.js
```

Bilderna är illustrationer genererade för kursen och får användas fritt inom uppgiften.
