# ZARA Mockup Webshop

Schulprojekt für **TBZ Modul 293 – Projektauftrag 3: Webshop mit KI-gestützter Webentwicklung**.
Ein an ZARA angelehnter Mockup-Webshop, komplett mit HTML und CSS gebaut – der Warenkorb und der optionale Google-Login sind die einzigen JavaScript-Features.

**Live:** [zara-schulprojekt.web.app](https://zara-schulprojekt.web.app)

---

## Über das Projekt

Der Webshop präsentiert 25 Produkte aus drei Kategorien (Damen, Herren, Kinder) und setzt auf einen minimalistischen Look mit viel Weissraum, grosser Typografie und reduzierten Farben (Schwarz, Weiss, Grau). Das Design ist bewusst an den echten ZARA-Auftritt angelehnt.

### Features

- **Startseite** mit Hero, Featured Products, Kategorien und Newsletter-Anmeldung
- **Produktübersicht** mit CSS-only Kategorienfilter (`:target`)
- **25 Produkt-Detailseiten** mit Bild, Beschreibung, Preis, Video und „In den Warenkorb"-Button
- **Warenkorb** mit Web Storage API (`localStorage`) und zentralem Bestellformular
- **Kontaktseite** mit Team-Vorstellung und Kontaktformular mit Betreff-Dropdown
- **Optionaler Google-Login** via Firebase Authentication
- **Responsive Design** für Mobile, Tablet und Desktop
- **SVG-Logo** in zwei Varianten (schwarz & weiss) in Playfair Display

---

## Projektstruktur

```
/
├── index.html              # Startseite
├── produkte.html           # Produktübersicht mit Kategoriefilter
├── kontakt.html            # Kontaktseite mit Team und Formular
├── warenkorb.html          # Warenkorb mit zentraler Bestellung
├── login.html              # Optionale Anmeldung mit Google
├── produkte/
│   └── produkt-1.html ... produkt-25.html
├── css/
│   └── styles.css          # Einziges Stylesheet
├── js/
│   ├── cart.js             # Warenkorb-Logik (Web Storage API)
│   └── auth.js             # Firebase Google Auth
├── assets/
│   ├── zara-logo-black.svg
│   ├── zara-logo-white.svg
│   └── slim-fit-chino.avif
└── md-files/
    ├── DOKUMENTATION.md    # KI-Einsatz & Reflexion
    ├── STYLEGUIDE.md       # Farben, Schrift, Logo
    └── WIREFRAMES.md       # Wireframes Mobile/Tablet/Desktop
```

---

## Technologien

| Bereich | Verwendet |
|---|---|
| Struktur | Semantisches HTML5 |
| Styling | CSS3 (Grid, Flexbox, `:target`, Custom Properties) |
| Schriften | Inter + Playfair Display (Google Fonts) |
| Warenkorb | Vanilla JavaScript + `localStorage` |
| Auth (optional) | Firebase Authentication (Google) |
| Hosting | Firebase Hosting |
| KI-Tools | Claude Code + Google Gemini |

**Keine Frameworks**, kein npm, kein Build-Tool – alles wird direkt als statische Dateien ausgeliefert.

---

## Lokal ausführen

```bash
# Mit Python
python -m http.server 8000

# Oder mit Node
npx serve .
```

Dann [http://localhost:8000](http://localhost:8000) im Browser öffnen.

---

## Deployment

Das Projekt ist via Firebase Hosting deployed:

```bash
firebase deploy --only hosting
```

---

## Dokumentation

- [DOKUMENTATION.md](md-files/DOKUMENTATION.md) – Vorgehen, KI-Einsatz, Vergleich der Tools, Fazit
- [STYLEGUIDE.md](md-files/STYLEGUIDE.md) – Farben, Schrift, Logo und Stil-Prinzipien
- [WIREFRAMES.md](md-files/WIREFRAMES.md) – Wireframes für Mobile, Tablet und Desktop

---

## Autor

**Eduart Maliqi** – TBZ Modul 293, 2026
