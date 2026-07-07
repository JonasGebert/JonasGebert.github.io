# jonasgebert.github.io — Portfolio

Persönliche Portfolio-Website von Jonas Gebert. Dark-Mode-SPA mit Glassmorphism-Sidebar,
interaktiver Lebenslauf-Timeline, vollständigen Noten, Zeugnis-Detailseiten und PDF-Downloads.

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · statischer Export · Deployment via GitHub Actions

## Deployment

Jeder Push auf `main` baut und veröffentlicht die Seite automatisch
(`.github/workflows/deploy.yml`).


```bash
git add -A
git commit -m "Portfolio"
git push origin main
```

Danach: https://jonasgebert.github.io


## Architektur

```
content/              Markdown-Quelldateien (about-me, Ziel, zeugnisse/*.md)
src/content/          Typisierte Content-Module (Profil, Timeline, Noten, Skills, Zeugnis-Metadaten)
src/lib/markdown.ts   Markdown → HTML zur Build-Zeit (marked)
src/components/       Wiederverwendbare UI-Komponenten
src/app/              App Router: SPA-Hauptseite + /zeugnisse/[slug]/ (SSG)
public/documents/     Zeugnis-PDFs (Download-Links)
public/assets/        Platzhalterbilder (SVG)
```



## Inhalte ändern

- **Texte/Daten:** `src/content/*.ts` — pushen genügt, Actions baut neu
- **Zeugnisse:** Markdown in `content/zeugnisse/*.md` → wird beim Build zu HTML-Detailseiten
- **Echtes Foto:** Bild als `public/assets/images/portrait.jpg` ablegen und in
  `src/components/Hero.tsx` den `src`-Pfad ändern
- **Projekte/Reisen freischalten:** `src/content/extras.ts` ergänzen; die
  Coming-Soon-Sektionen sind dafür vorbereitet

Animationen laufen über CSS + IntersectionObserver (`src/components/Reveal.tsx`) —
bewusst ohne framer-motion, um Bundle-Größe und Abhängigkeiten klein zu halten.

## Hinweis Datenschutz

Personenbezogene Daten (Adresse, Geburtsdatum, Matrikelnummer, private E-Mail)
wurden aus Inhalten, Quellcode und PDFs entfernt bzw. geschwärzt.
