# AGENTS.md - ZARA Mockup Webshop

## Project Overview

School project (Modul 293 - PA03 Webshop). A Zara-inspired mockup webshop.
**Pure HTML + CSS. No frameworks, no JavaScript, no build tools.**

## Build / Serve / Test

There is no build system, bundler, linter, or test suite.

```bash
# Serve locally (any static server works)
python -m http.server 8000
npx serve .
# Then open http://localhost:8000

# Validate HTML (optional)
npx html-validate index.html produkte.html kontakt.html produkte/produkt-1.html
```

No CI/CD. No package.json. No node_modules. Just static files.

## File Structure

```
/
├── index.html              # Homepage (hero + 6 featured products)
├── produkte.html           # Product listing (all 25, CSS-only category filter)
├── kontakt.html            # Contact page (team + form + map)
├── produkte/               # 25 product detail pages
│   ├── produkt-1.html      # Satin Kleid (Damen)
│   ├── produkt-2.html      # Oversize Blazer (Damen)
│   └── ...                 # through produkt-25.html
├── css/styles.css          # Single stylesheet (955 lines)
├── assets/                 # Local images (only slim-fit-chino.avif)
├── context.md              # Project context (loaded as CONTEXT.md)
├── DOKUMENTATION.md         # School submission doc
└── WIREFRAMES.md           # ASCII wireframes
```

## Path Conventions (CRITICAL)

Root files (`index.html`, `produkte.html`, `kontakt.html`):
- CSS: `css/styles.css`
- Links: `produkte.html`, `kontakt.html`, `produkte/produkt-X.html`

Product detail pages (`produkte/produkt-X.html`):
- CSS: `../css/styles.css`
- Assets: `../assets/filename.avif`
- Links back: `../index.html`, `../produkte.html`, `../kontakt.html`
- Other products: `produkt-X.html` (same directory)

**Never use absolute paths. Always relative.**

## CSS Architecture

Single file: `css/styles.css`. Organized in numbered sections:

1. CSS Variables (`:root`)
2. Reset & Base
3. Typography
4. Layout (`.container`, `.section`, `.grid`)
5. Buttons
6. Header
7. Hero
8. Product Card
9. Product Grid
10. Category Cards
11. Newsletter
12. Footer
13. Product Detail
14. Forms
15. Contact Page
16. Team Section
17. Filter Bar
18. Section Header
19. Responsive - Tablet (`max-width: 1024px`)
20. Responsive - Mobile Large (`max-width: 768px`)
21. Responsive - Mobile (`max-width: 480px`)
22. Utilities

### CSS Variables

```css
/* Colors - strictly B&W + gray */
--color-primary: #000000;
--color-secondary: #18181B;
--color-bg: #FFFFFF;
--color-bg-alt: #FAFAFA;
--color-text: #09090B;
--color-muted: #71717A;
--color-border: #E4E4E7;
--color-hover: #F4F4F5;

/* Spacing scale: --space-1 through --space-32 */
/* Font sizes: --text-xs through --text-giant */
/* Max width: --max-width: 1440px */
```

### BEM Naming Convention

Block: `.product-card`, `.hero`, `.header`, `.footer`
Element: `.product-card__image`, `.header__logo`, `.hero__title`
Modifier: `.btn--white`, `.btn--outline`, `.section--large`, `.filter-bar__link--active`

**Always follow BEM.** No utility-first approach except the few helpers in section 22.

### Responsive Breakpoints (Desktop-first `max-width`)

| Breakpoint | Target |
|---|---|
| `1024px` | Tablet |
| `768px` | Large mobile |
| `480px` | Small mobile |

## HTML Conventions

- Language: `<html lang="de">`
- Title format: `Produktname | ZARA Mockup` (detail) or `Seitenname | ZARA Mockup`
- Font: Inter via Google Fonts `@import` in CSS (not `<link>` in HTML)
- 4-space indentation
- HTML comments for section labels: `<!-- Header -->`, `<!-- Main Content -->`
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`
- All form elements have `<label>` with `for` attribute
- Buttons have `aria-label` when icon-only

### Shared Header Structure (copy exactly)

```html
<header class="header">
    <div class="container header__inner">
        <a href="[../]index.html" class="header__logo">ZARA</a>
        <nav class="header__nav">
            <a href="[../]produkte.html#damen" class="header__nav-link">Damen</a>
            <a href="[../]produkte.html#herren" class="header__nav-link">Herren</a>
            <a href="[../]produkte.html#kinder" class="header__nav-link">Kinder</a>
            <a href="[../]produkte.html" class="header__nav-link">Alle Produkte</a>
            <a href="[../]kontakt.html" class="header__nav-link">Kontakt</a>
        </nav>
        <button class="header__menu-btn" aria-label="Menu offnen">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>
```

## Images (CRITICAL RULES)

1. **Always use Unsplash** (`images.unsplash.com/photo-XXXXX?w=800&q=80`)
2. **NEVER use Zara CDN** (`static.zara.net`)
3. **Only local image**: `assets/slim-fit-chino.avif` (Produkt 5)
4. **When changing a product image, update ALL files**: `index.html`, `produkte.html`,
   the product's own detail page, AND any other detail pages showing it in "similar products"
5. Product card images: `?w=800&q=80` suffix
6. Hero images: `?w=1920&q=80` suffix
7. Team photos: `?w=300&h=300&fit=crop&crop=face` suffix

## Product Data (25 products)

Categories: Damen (1-3, 9, 11-12, 14-15, 20), Herren (4-6, 10, 13, 16-19), Kinder (7-8, 21-25)

Each product detail page contains:
- One product image
- Category breadcrumb, name, price (CHF)
- Description with material/care/model info
- Order form (size select, quantity input, submit button)
- YouTube video embed
- "Similar products" section (3 related products from same category)

## Design Style

**Exaggerated Minimalism**: oversized typography, black & white, generous whitespace.
- Font: Inter (weights 300-900)
- Colors: strictly `#000`/`#FFF` dominant, `#71717A` for muted text
- Uppercase + letter-spacing for labels and small text
- Large `clamp()`-based font sizes for headings
- Transitions: 150ms/200ms/300ms ease

## Do NOT

- Add JavaScript (pure CSS project)
- Add npm/build tooling
- Use Zara CDN URLs for images
- Use absolute paths
- Break BEM naming
- Add new CSS files (single stylesheet only)
- Change the shared header/footer structure without updating ALL 28 HTML files
- Use inline styles (exception: `produkte.html` has scoped `<style>` for CSS-only filtering)
