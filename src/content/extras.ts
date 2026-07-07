/**
 * Hobbys — Quelle: about-me.md (Interessen).
 * Jedes Hobby hat eine eigene Unterseite (/hobbys/<slug>/) mit Bildergalerie.
 * Bilder hinzufügen: Datei in public/assets/images/ legen und hier im images-Array eintragen.
 * Solange images leer ist, zeigt die Unterseite Platzhalter.
 */
export type HobbyImage = { src: string; alt: string; caption?: string; width: number; height: number };
export type Hobby = { slug: string; name: string; icon: string; note: string; images: HobbyImage[] };

export const hobbies: Hobby[] = [
  {
    slug: "elektronik",
    name: "Elektronik",
    icon: "zap",
    note: "Vom Beruf ins Hobby — Schaltungen, Löten, Basteln.",
    images: [],
  },
  {
    slug: "automobil",
    name: "Automobil",
    icon: "car",
    note: "Technik, die bewegt.",
    images: [],
  },
  {
    slug: "motorrad",
    name: "Motorrad",
    icon: "bike",
    note: "Zwei Räder, volle Konzentration.",
    images: [],
  },
  {
    slug: "3d-druck",
    name: "3D-Druck",
    icon: "printer",
    note: "Vom CAD-Modell zum fertigen Teil — auch privat.",
    images: [],
  },
  {
    slug: "tennis",
    name: "Tennis",
    icon: "tennis",
    note: "Ein Spiel, das Körper und Geist fordert.",
    images: [],
  },
  {
    slug: "golf",
    name: "Golf",
    icon: "golf",
    note: "Präzision, Geduld und Konzentration — auf dem Platz statt an der Werkbank.",
    images: [],
  },
  {
    slug: "kochen",
    name: "Kochen",
    icon: "kochen",
    note: "Handwerk mit sofortigem Ergebnis — vom Rezept bis zum eigenen Experiment.",
    images: [],
  },
  {
    slug: "tauchen",
    name: "Tauchen",
    icon: "diving",
    note: "Tauchschein — die Ruhe und Welt unter Wasser.",
    images: [],
  },
  {
    slug: "segeln",
    name: "Segeln",
    icon: "sailing",
    note: "Katamaranschein — Wind, Wasser und volle Kontrolle über zwei Rümpfe.",
    images: [],
  },
];

/** Noch keine Projekt-Markdown-Dateien vorhanden — Platzhalter, bis content/projekte/*.md existiert. */
export const projectsComingSoon = {
  title: "Freizeitprojekte",
  message:
    "Hier entstehen Projekt-Case-Studies (GitHub-Projekte, Coding-Experimente, Side Projects). Inhalte folgen.",
  placeholderCount: 3,
} as const;

/**
 * Reise-Galerie: Bild in public/assets/images/ ablegen und hier eine Zeile ergänzen.
 * width/height = echte Pixelmaße des Bildes (verhindert Layout-Springen beim Laden).
 */
export type TravelPhoto = { src: string; alt: string; caption: string; width: number; height: number };

export const travelPhotos: TravelPhoto[] = [
  {
    src: "/assets/images/travel_egypt_2026_dive.jpg",
    alt: "Tauchgang in Ägypten, 2026",
    caption: "Ägypten 2026 — Tauchgang",
    width: 2161,
    height: 2160,
  },
  {
    src: "/assets/images/Kreta_canyon_2025.png",
    alt: "Kreta, Canyon, 2025",
    caption: "Kreta 2025 — Canyon",
    width: 768,
    height: 1364,
  },
  {
    src: "/assets/images/London_towerbridge_2023.png",
    alt: "London, Tower Bridge, 2023",
    caption: "London 2023 — Tower Bridge",
    width: 1524,
    height: 704,
  },
];

export const travelSection = {
  title: "Reisen",
  message: "Eindrücke von unterwegs — die Galerie wächst mit jeder Reise.",
} as const;
