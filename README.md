# TrendMe – Dronefilm & Nettsider

En komplett, moderne og responsiv en-sides nettside bygget med ren HTML, CSS og
JavaScript. Ingen rammeverk, ingen byggsteg – klar til å publiseres direkte på
**GitHub Pages**.

---

## Filstruktur

```
trendme-site/
├── index.html              # All HTML / innhold
├── css/
│   └── styles.css          # Styling (farger, typografi, layout, animasjoner)
├── js/
│   └── main.js             # Liten vanilla JS (meny, scroll, animasjoner)
├── assets/
│   ├── logo.svg            # Logo (mark + wordmark) , bruker currentColor
│   ├── logo-mark.svg       # Kun symbolet (drone sett ovenfra)
│   ├── favicon.svg         # Favicon
│   ├── portrait.png        # Portrettbilde til "Om meg"
│   ├── portrait-original.png  # Originalbildet (med bakgrunn)
│   └── hero-video.mp4      # Lokalt video-fallback (valgfritt)
└── README.md
```

---

## Publisere på GitHub Pages

### Alternativ 1 – Eget repo (anbefalt)

1. Lag et nytt repo på GitHub, f.eks. `trendme`.
2. Kopier alt innholdet i `trendme-site/` til roten av repoet (ikke selve mappen,
   men filene inni , `index.html` skal ligge i roten).
3. Commit og push til `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<brukernavn>/<repo>.git
   git push -u origin main
   ```
4. På GitHub: **Settings → Pages**.
5. Under **Build and deployment**:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` / `/ (root)`
6. Lagre. Etter ~1 minutt er siden tilgjengelig på
   `https://<brukernavn>.github.io/<repo>/`.

### Alternativ 2 – Bruker- eller organisasjonsside

Hvis repoet heter `<brukernavn>.github.io`, publiseres siden automatisk på
`https://<brukernavn>.github.io/`.

### Egendefinert domene (valgfritt)

1. Legg til en fil kalt `CNAME` i roten med domenet ditt, f.eks. `trendme.no`.
2. Sett opp DNS hos domeneleverandøren din (CNAME / A-records iht. GitHub sin
   [dokumentasjon](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Aktiver **Enforce HTTPS** under Pages-innstillingene.

---

## Slik endrer du innhold

Alt innhold ligger i `index.html`, godt kommentert med `<!-- ... -->`-blokker.

| Du vil endre …               | Hvor                                                                  |
| ---------------------------- | --------------------------------------------------------------------- |
| Hero-overskrift / tekst      | `index.html` → seksjonen `<!-- HERO -->`                              |
| Hero-video (Vimeo)           | Bytt video-ID i `https://player.vimeo.com/video/<ID>?background=1...` |
| Eksempelvideo                | Samme video-ID byttes i seksjonen `<!-- EKSEMPEL -->`                  |
| Logo                         | Erstatt `assets/logo.svg` (eller endre `currentColor`-versjonen)      |
| Portrett                     | Erstatt `assets/portrait.png` (transparent PNG anbefales)             |
| Telefonnummer                | Søk og erstatt `97007745` i `index.html`                              |
| Tjenester / pakker           | `index.html` → seksjonen `<!-- TJENESTER / PAKKER -->`                |
| For hvem                     | `index.html` → seksjonen `<!-- FOR HVEM -->`                          |
| Prosess-stegene              | `index.html` → seksjonen `<!-- PROSESS -->`                            |
| Om meg-tekst                 | `index.html` → seksjonen `<!-- OM MEG -->`                            |
| Farger / paletten            | `css/styles.css` → `:root { … }` øverst                                |
| Skrifttyper                  | `index.html` (Google Fonts-lenken) + `css/styles.css` (`--font-*`)     |

### Bytte Vimeo-video

Erstatt video-ID-en i to URL-er i `index.html`:

```
https://player.vimeo.com/video/1188618070?background=1...   <-- HERO (background=1 skjuler kontroller)
https://player.vimeo.com/video/1188618070?dnt=1...          <-- EKSEMPEL (vanlig spiller med kontroller)
```

> Vimeo-videoer må være satt til "Public" eller "Unlisted" og ha
> embed tillatt for at iframen skal fungere.

### Bruke lokal MP4 i hero i stedet for Vimeo

Bytt `<iframe class="hero__video">`-blokken med:

```html
<video class="hero__video" autoplay muted loop playsinline preload="auto">
  <source src="assets/hero-video.mp4" type="video/mp4" />
</video>
```

---

## Lokalt forhåndsvisning

Du kan åpne `index.html` direkte i nettleseren, men for at videoen skal lastes
sømløst anbefales en enkel lokal server:

```bash
# Med Node
npx serve trendme-site

# Eller Python 3
cd trendme-site && python3 -m http.server 8000
# → http://localhost:8000
```

---

## Teknisk

- **Ingen backend, ingen database, ingen byggsteg.**
- 100 % statisk – kun HTML, CSS og en liten JavaScript-fil.
- Vimeo-videoene streames fra Vimeo, så filstørrelsen i repoet holdes lav.
- Responsivt design med mobilmeny.
- Animasjoner via `IntersectionObserver` (med fallback).
- Tilgjengelighet: semantiske tags, `aria-label`, `prefers-reduced-motion`-støtte.
- SVG-logo og favicon , skarpe på alle skjermer.

---

## Lisens

Innhold og merkevare © TrendMe. Koden kan brukes fritt til eget prosjekt.
