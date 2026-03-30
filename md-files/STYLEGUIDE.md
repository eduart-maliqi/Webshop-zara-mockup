# Styleguide – ZARA Mockup Webshop

---

## Designkonzept

Der Webshop folgt dem Prinzip **Exaggerated Minimalism** – ein stark reduziertes, schwarz-weisses Design mit grosszügigem Weissraum und überdimensionierter Typografie. Der Fokus liegt auf den Produkten, nicht auf dekorativen Elementen.

---

## Farben

| Farbe | Hex-Code | Verwendung |
|---|---|---|
| Primary (Schwarz) | `#000000` | Texte, Buttons, Header, Footer |
| Secondary | `#18181B` | Sekundäre Texte |
| Background | `#FFFFFF` | Haupthintergrund |
| Background Alt | `#FAFAFA` | Abwechselnde Sektionen, Produktbild-Platzhalter |
| Text | `#09090B` | Fliesstext |
| Muted | `#71717A` | Preise, Beschreibungen, Labels |
| Border | `#E4E4E7` | Trennlinien, Formularrahmen |
| Hover | `#F4F4F5` | Hover-Hintergründe |

### Farbschema

```
Schwarz ████████  #000000   (Primary, Buttons, Footer)
Dunkel  ████████  #18181B   (Secondary)
Text    ████████  #09090B   (Fliesstext)
Grau    ████████  #71717A   (Muted/Beschreibungen)
Border  ████████  #E4E4E7   (Linien/Rahmen)
Hover   ████████  #F4F4F5   (Hover-Effekte)
Hell    ████████  #FAFAFA   (Alt-Background)
Weiss   ████████  #FFFFFF   (Haupthintergrund)
```

Die Farbpalette ist bewusst monochrom gehalten – keine Akzentfarben. Der Kontrast zwischen Schwarz und Weiss lenkt die Aufmerksamkeit auf die Produktbilder.

---

## Typografie

### Schriftart

**Inter** – Eine moderne, gut lesbare Sans-Serif-Schrift, optimiert für Bildschirme.

Eingebunden über Google Fonts:
```
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Schriftgewichte

| Gewicht | Wert | Verwendung |
|---|---|---|
| Light | 300 | Hero-Untertitel |
| Regular | 400 | Fliesstext |
| Medium | 500 | Navigation, Labels, Buttons, Produktnamen |
| Semibold | 600 | Footer-Titel, Teamnamen |
| Bold | 700 | Überschriften (H2, H3, H4) |
| Black | 900 | Logo, H1-Überschriften |

### Schriftgrössen

| Name | Grösse | Verwendung |
|---|---|---|
| Giant | `clamp(3rem, 10vw, 8rem)` | H1, Hero-Titel |
| 6XL | `4rem` | – |
| 5XL | `3rem` | – |
| 4XL | `2.5rem` | – |
| 3XL | `2rem` | Produktdetail-Name |
| 2XL | `1.5rem` | H3, Logo, Kategorie-Titel |
| XL | `1.25rem` | H4, Produktpreis (Detail), Mobile Nav |
| LG | `1.125rem` | Hero-Untertitel |
| Base | `1rem` | Fliesstext, Formulareingaben |
| SM | `0.875rem` | Navigation, Buttons, Produktkarten, Labels |
| XS | `0.75rem` | Kategorie-Breadcrumb, Copyright |

### Textformatierung

- **Überschriften:** `line-height: 1.1`, `letter-spacing: -0.02em`
- **H1:** `letter-spacing: -0.04em`, `text-transform: uppercase`
- **Navigation/Buttons:** `text-transform: uppercase`, `letter-spacing: 0.1em`
- **Fliesstext:** `line-height: 1.6`

---

## Buttons

Drei Button-Varianten, alle mit `text-transform: uppercase` und `letter-spacing: 0.1em`:

### Primary (Schwarz)
```
Hintergrund: #000000
Text:        #FFFFFF
Rahmen:      2px solid #000000
Hover:       Hintergrund wird weiss, Text wird schwarz
```

### Outline (Transparent)
```
Hintergrund: transparent
Text:        #000000
Rahmen:      2px solid #000000
Hover:       Hintergrund wird schwarz, Text wird weiss
```

### White (Hero-Bereich)
```
Hintergrund: #FFFFFF
Text:        #000000
Rahmen:      2px solid #FFFFFF
Hover:       Hintergrund wird transparent, Text wird weiss
```

**Padding:** `1rem 2rem` (Desktop), `0.75rem 1.5rem` (Mobile)

---

## Layout

### Container
- **Max-Width:** `1440px`
- **Padding:** `0 1.5rem` (Desktop), `0 1rem` (Mobile < 480px)
- **Zentrierung:** `margin: 0 auto`

### Grid-System

| Komponente | Desktop | Tablet | Mobile gross | Mobile |
|---|---|---|---|---|
| Produkte-Grid | 4 Spalten | 3 Spalten | 2 Spalten | 1 Spalte |
| Kategorien-Grid | 3 Spalten | 3 Spalten | 1 Spalte | 1 Spalte |
| Footer-Grid | 4 Spalten | 2 Spalten | 1 Spalte | 1 Spalte |
| Produktdetail | 2 Spalten | 1 Spalte | 1 Spalte | 1 Spalte |
| Kontakt-Grid | 2 Spalten | 1 Spalte | 1 Spalte | 1 Spalte |
| Team-Grid | 3 Spalten | 2 Spalten | 2 Spalten | 1 Spalte |

### Abstände (Spacing)

| Variable | Wert | Verwendung |
|---|---|---|
| `--space-1` | `0.25rem` | Minimaler Abstand |
| `--space-2` | `0.5rem` | Kleine Abstände |
| `--space-4` | `1rem` | Standard-Abstand |
| `--space-6` | `1.5rem` | Grid-Gap, Formulargruppen |
| `--space-8` | `2rem` | Mittlere Sektionsabstände |
| `--space-12` | `3rem` | Sektions-Header Margin |
| `--space-16` | `4rem` | Seitenheader Padding |
| `--space-24` | `6rem` | Sektions-Padding |
| `--space-32` | `8rem` | Grosse Sektionen |

---

## Responsive Breakpoints

| Breakpoint | Bereich | Anpassungen |
|---|---|---|
| Desktop | ≥ 1024px | Volle Layouts, 4-Spalten Grids |
| Tablet | 768px – 1023px | Reduzierte Grids, 1-Spalten Detail |
| Mobile gross | 481px – 767px | 2-Spalten Produkte, Hamburger-Menü |
| Mobile | ≤ 480px | 1-Spalte überall, kompakte Abstände |

### Header
- **Desktop:** Fixiert, `80px` Höhe, horizontale Navigation
- **Mobile (< 768px):** Fixiert, `60px` Höhe, Hamburger-Menü mit Fullscreen-Overlay

---

## Komponenten

### Produktkarten
- **Bild-Verhältnis:** `3:4` (aspect-ratio)
- **Hover-Effekt:** Bild skaliert auf `1.05` mit `300ms` Transition
- **Text:** Zentriert, Name in Uppercase

### Kategorie-Karten
- **Bild-Verhältnis:** `4:5`
- **Overlay:** Schwarz mit 20% Opacity, auf Hover 40%
- **Titel:** Weiss, zentriert, Uppercase mit `letter-spacing: 0.2em`

### Formulare
- **Input/Select/Textarea:** `1px solid #E4E4E7`, `padding: 1rem`
- **Focus:** Rahmen wird `#000000`
- **Select:** Custom Pfeil via SVG-Background
- **Labels:** Uppercase, `letter-spacing: 0.05em`, Medium-Weight

### Header
- **Logo:** `letter-spacing: 0.2em`, Black-Weight
- **Nav-Links:** Underline-Animation auf Hover (Breite von 0 auf 100%)
- **Hero-Variante:** Transparent auf Scroll zu Weiss (CSS `animation-timeline: scroll()`)

### Footer
- **Hintergrund:** Schwarz (`#000000`)
- **Text:** Weiss, Links mit 70% Opacity
- **Copyright:** 50% Opacity, XS-Schriftgrösse

---

## Animationen & Transitions

| Element | Effekt | Dauer |
|---|---|---|
| Links | Opacity-Reduktion auf Hover | `150ms ease` |
| Buttons | Farb-Inversion auf Hover | `200ms ease` |
| Produktbilder | Scale 1.05 auf Hover | `300ms ease` |
| Nav-Underline | Breite 0 → 100% auf Hover | `200ms ease` |
| Header (Hero) | Transparent → Weiss beim Scrollen | CSS Scroll Timeline |

---

## Bilder

- **Quelle:** Ausschliesslich Unsplash (kostenlos, hochqualitativ)
- **Produktbilder:** `w=800&q=80` Parameter für optimierte Ladezeit
- **Kategorie-/Hero-Bilder:** `w=1920&q=80` für Fullwidth-Darstellung
- **Team-Fotos:** `w=300&h=300&fit=crop&crop=face` für kreisrunde Darstellung
