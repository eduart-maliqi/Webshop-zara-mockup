# DOKUMENTATION

---

## Deckblatt

| | |
|---|---|
| **Projektname** | ZARA Mockup Webshop |
| **Modul** | M293 – Webseiten erstellen und veröffentlichen |
| **Auftrag** | PA03 – Webshop |
| **Datum** | März 2026 |

---

## KI-Tool-Einsatz

### Claude Code (claude-sonnet-4.6 / claude-opus-4.6)

**Wofür verwendet:**
- Alle Coding-Aufgaben: HTML-Struktur, CSS , Responsive Design
- Erstellung und Anpassung von allen Produktseiten
- Migration von Zara CDN-Bildern zu Unsplash-Bildern

**Stärken:**
- Präzises, sauberes Coding
- Versteht komplexe, mehrstufige Anforderungen
- Konsistente Code-Qualität über viele Dateien hinweg

**Schwächen:**
- Token-Limits: Bei längeren Session kann es zu Unterbrechungen kommen,da meine Tokens für die 6 Stunden ausgehen, was die Arbeit beeinträchtigt

---

### Google Gemini

**Wofür verwendet:**
- Kleinere, nicht-code-spezifische Fragen
- Wireframe-Ideen und visuelle Konzepte
- Brainstorming für Design-Entscheidungen

**Stärken:**
- Kein Token-Limit-Problem
- grosses Context-window, dafür das es gratis ist
- Gut geeignet für Brainstorming und konzeptionelle Fragen

**Schwächen:**
- Code-Qualität ist nicht so hoch wie bei Claude Code
- Nicht ideal für komplexe Coding-Aufgaben

---

### Vergleich

| Kriterium | Claude Code | Google Gemini |
|---|---|---|
| Code-Qualität | Sehr gut | Mittel |
| Token-Limits | Begrenzt | sehr viel |
| Coding-Aufgaben | Empfohlen | Nicht ideal |
| Nicht-Code-Aufgaben | Möglich | Empfohlen |
| Wireframes/Design-Ideen | Möglich | Besser geeignet |

**Fazit:** Claude Code habe ich für alle Coding-Aufgaben benutzt. Google Gemini kam für konzeptionelle und nicht-technische Fragen zum Einsatz. Die Kombination beider Tools hat den Entwicklungsprozess unterstützt.

---

### Nutzungsweise der Tools

Google Gemini habe ich ganz normal im Web als Chatbot genutzt.

 Claude Code hingegen habe ich im Terminal als CLI (Command Line Interface) verwendet, da es dort direkten Zugriff auf meine Dateien hat und Änderungen direkt im Projekt vornehmen kann.

Ich habe mich bewusst für Claude Code im Terminal entschieden und nicht für die VS Code Extension, weil:
- Ich das CLI schon länger benutze und damit vertraut bin
- Die Extension viele `/befehle` nicht unterstützt, die im Terminal funktionieren
- Ich es einfach cooler finde, im Terminal zu arbeiten
