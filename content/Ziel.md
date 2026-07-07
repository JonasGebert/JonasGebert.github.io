# Portfolio-Konzept – Modern Developer / Creative Portfolio

## 1. Ziel des Portfolios

Das Portfolio ist eine moderne, interaktive Web-Experience, die mich als Person, Entwickler und kreativen Kopf präsentiert. Fokus liegt auf:

- Professioneller Bewerbung (CV + Bild)
- Visueller Darstellung von Projekten & Hobbys
- Interaktiver Navigation über Sidebar
- Modernem, minimalistischem UI/UX Design
- Responsiveness (Mobile First)

---

## 2. Tech Stack (Empfehlung)

Next.js (App Router)
Tailwind CSS
Framer Motion (Animationen)
TypeScript
Optional: Three.js (für hero visuals)
Deployment: GitHub Pages
---

## 3. Designrichtung

### Stil
- Modern / Minimal / Premium
- Anlehnung an Apple, Linear, Vercel UI
- Dark Mode Standard + Light Mode optional
- Viel whitespace, klare Typografie

### Farben
- Hintergrund: #0B0F17 (dark navy)
- Accent: Neon Blue / Cyan Gradient
- Secondary: Soft Gray / Glassmorphism

### UI Elemente
- Glassmorphism Sidebar
- Smooth Scroll Animations
- Hover Depth Effects
- Blur + Transparency Layers

---

## 4. Seitenstruktur

Das Portfolio ist eine **Single Page Application (SPA)** mit dynamischen Sections.

---

## 5. Main Page Layout

### 5.1 Hero Section (oben)

Links:
- Name + Role (z. B. "Full Stack Developer")
- Kurzbeschreibung (1–2 Sätze)

Rechts:
- **Bewerbungsfoto (hochwertig gerahmt)**
- optional: subtle glow / animated border

CTA Buttons:
- "CV ansehen"
- "Projekte entdecken"
- "Kontakt"

---

### 5.2 Lebenslauf / Timeline Section

Eine interaktive Timeline:

#### Inhalt:
- Schule / Ausbildung
- Notenübersicht (optional visualisiert als Bars oder Cards)
- Skills Progress (z. B. React 85%, Node 75%)
- Zertifikate
- Berufserfahrung

#### UI:
- Vertical Timeline mit Punkten
- Hover Expand Cards
- Animated Progress Bars

---

### 5.3 Skills Overview

Grid Layout:

- Frontend (React, Next.js, HTML, CSS)
- Backend (Node, APIs)
- Tools (Git, Docker)
- Soft Skills

Visualisierung:
- Progress Circles oder Bars
- Icons pro Skill

---

## 6. Sidebar (wichtigstes Feature)

### Verhalten:
- Links fix oder collapsible
- Standard: minimiert (Icons only)
- On Hover / Click → expandiert

---

### Sidebar Kategorien:

#### 1. Home
- Zurück zur Main Overview

#### 2. Freizeitprojekte
- GitHub Projekte
- Coding Experimente
- Side Projects

#### 3. Reisen
- Bildergalerie (Grid / Masonry Layout)
- Kartenartige Darstellung
- optional: Map Integration

#### 4. Hobbys
- Sport
- Musik
- Gaming
- Kreative Aktivitäten

#### 5. Skills / Tech Stack
- Detaillierte Übersicht

#### 6. Kontakt
- Email Form
- Social Links (GitHub, LinkedIn)

---

## 7. Medien Sections (Sidebar Content Pages)

Jede Sidebar-Kategorie öffnet eine **fullscreen overlay section** oder animierte page transition.

### Beispiel: Reisen
- Masonry Gallery Layout
- Lightbox on click
- Beschreibung pro Bild optional

### Beispiel: Hobbys
- Card Grid Layout
- Icons + kurze Beschreibungen
- Optional: Video embeds

---

## 8. Animation System

- Page transitions: fade + slide
- Sidebar: smooth expand/collapse
- Cards: hover lift + shadow depth
- Images: lazy loading + blur-in
- Timeline: scroll-triggered animation

---

## 9. Interaktionslogik

- Sidebar steuert Content dynamisch
- Main Page bleibt Basisstruktur
- Sections werden via state routing geladen
- Smooth scrolling zwischen Sections

---

## 10. CV Darstellung (zentral wichtig)

CV wird nicht als PDF dargestellt, sondern als:

- Interaktive Web-Timeline
- Notenübersicht als visuelle Cards
- Skills als Progress UI
- Optional Download Button: PDF CV export

---

## 11. Mobile Version

- Sidebar wird Bottom Sheet Menu
- Timeline wird vertikal linear
- Bilder als Swipe Gallery
- Hero stacked (Bild unter Text)

---

## 12. Erweiterungsmöglichkeiten

- Blog Section
- AI Chat Assistant („Frag mich etwas über mich“)
- Project Case Study Pages
- 3D Hero Background (Three.js)
- Scroll-based storytelling

---

## 13. Zielwirkung

Das Portfolio soll wirken wie:

> „Premium Tech Portfolio + Creative Personal Brand Website“

Nicht wie ein klassischer Lebenslauf – sondern wie eine **interaktive Experience**.

---