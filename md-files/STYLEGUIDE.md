# Styleguide

Das hier ist der Styleguide zu meinem ZARA Mockup Webshop. Er soll kurz zeigen, wie die Webseite aussehen soll — welche Farben, welche Schrift und welcher Stil verwendet wird. So bleibt alles konsistent.

## Idee

Der Webshop ist an ZARA angelehnt und setzt auf einen minimalistischen Look: viel Weissraum, schwarze Schrift, grosse Bilder. Kein Schnickschnack, keine bunten Farben — nur Schwarz, Weiss und ein paar Grautöne.

## Farben

| Farbe | Hex | Verwendung |
|---|---|---|
| Schwarz | `#000000` | Schrift, Buttons, Logo |
| Weiss | `#FFFFFF` | Hintergrund |
| Hellgrau | `#FAFAFA` | Abwechselnder Hintergrund |
| Grau | `#71717A` | Sekundäre Texte, Labels |
| Border-Grau | `#E4E4E7` | Trennlinien, Rahmen |

## Schrift

Für den ganzen Webshop wird **Inter** (Google Fonts) verwendet.

- Überschriften: fett (600–900), oft gross und in Grossbuchstaben
- Fliesstext: normal (400)
- Labels/Kategorien: Grossbuchstaben mit etwas Buchstabenabstand (`letter-spacing`)

## Logo

Das Logo ist einfach das Wort **ZARA** in Inter Black (fett), uppercase und mit grossem Letter-Spacing. Es liegt als SVG im Ordner `assets/` in zwei Varianten vor, beide mit 85% Deckkraft, damit man je nach Hintergrund wählen kann:

- `zara-logo-black.svg` – schwarz, für helle Hintergründe (Standard-Header auf Produkt-, Kontakt- und Warenkorb-Seite)
- `zara-logo-white.svg` – weiss, für dunkle Hintergründe (wird auf der Startseite `index.html` verwendet, da dort der Header transparent über dem dunklen Hero-Bild liegt)

## Buttons

Zwei einfache Varianten:

- **Primary**: schwarzer Hintergrund, weisser Text
- **Outline**: weisser Hintergrund, schwarzer Rahmen, schwarzer Text

## Stil-Prinzipien

- Viel Weissraum
- Grosse Produktbilder
- Klare, einfache Navigation
- Responsive für Mobile, Tablet und Desktop
