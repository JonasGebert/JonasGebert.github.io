# Anleitung: Bilder selbst hinzufügen

## Grundprinzip

Alle Bilder liegen in `public/assets/images/`. Was dort liegt, ist nach dem Deploy
unter `https://jonasgebert.github.io/assets/images/<dateiname>` erreichbar.
Der Code referenziert Bilder immer mit dem Pfad `/assets/images/<dateiname>`.

**Wichtig:** Niemals ein Bild löschen, auf das der Code noch verweist — der Build
merkt das nicht, aber auf der Website erscheint ein kaputtes Bild. Erst den
Code-Verweis ändern, dann löschen.

## Reisebild hinzufügen (häufigster Fall)

1. Bild in `public/assets/images/` legen, sprechender Name ohne Umlaute/Leerzeichen,
   z. B. `travel_norwegen_2027_fjord.jpg`
2. In `src/content/extras.ts` im Array `travelPhotos` eine Zeile ergänzen:

```ts
{
  src: "/assets/images/travel_norwegen_2027_fjord.jpg",
  alt: "Fjordlandschaft in Norwegen, 2027",   // Beschreibung für Screenreader/SEO
  caption: "Norwegen 2027 — Geirangerfjord",  // sichtbare Bildunterschrift
  width: 1920,                                 // echte Pixelbreite des Bildes
  height: 1280,                                // echte Pixelhöhe des Bildes
},
```

3. Speichern, dann committen und pushen:

```bash
git add -A
git commit -m "Reisebild Norwegen"
git push origin main
```

GitHub Actions baut automatisch; nach 1–2 Minuten ist das Bild live (Strg+F5).

**Pixelmaße herausfinden:** Rechtsklick auf die Datei → Eigenschaften → Details
(oder in VS Code unten in der Statusleiste, wenn das Bild geöffnet ist).
Die Maße müssen nicht exakt sein, aber das Seitenverhältnis sollte stimmen —
sonst springt das Layout beim Laden.

## Bildgröße (Performance)

GitHub Pages liefert Bilder unverändert aus — keine automatische Optimierung.
Deshalb vor dem Hochladen:

- Fotos auf max. ~1600 px längste Kante verkleinern
- als JPG mit ~80 % Qualität speichern (Ziel: unter 500 KB pro Bild)
- Windows-Bordmittel: Foto öffnen → „…“ → Bild ändern

## Hobbybild hinzufügen

Gleiche Logik wie bei Reisen, nur im Array `images` des jeweiligen Hobbys
(`src/content/extras.ts`):

```ts
{
  slug: "tennis",
  name: "Tennis",
  ...
  images: [
    {
      src: "/assets/images/hobby_tennis_aufschlag.jpg",
      alt: "Aufschlag beim Tennistraining",
      caption: "Training 2026",
      width: 1600,
      height: 1200,
    },
  ],
},
```

Solange `images` leer ist, zeigt die Hobby-Unterseite automatisch Platzhalter.

## Portrait austauschen

Neue Datei als `public/assets/images/portrait.jpg` ablegen (alte überschreiben) —
fertig, kein Codeeingriff. Nur wenn sich das Seitenverhältnis ändert:
in `src/components/Hero.tsx` die `width`/`height`-Werte anpassen.

## Projektbilder (später)

Die Projekte-Sektion nutzt noch Platzhalter. Sobald echte Projekte eingebaut werden,
gilt dasselbe Muster: Bild nach `public/assets/images/`, Verweis im passenden
Content-Modul unter `src/content/`.
