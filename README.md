# Polar Med - Landing Page

Single-page medical landing built with **React + Vite + TailwindCSS**.
Language: **Spanish**.
Goal: **conversion to appointments (WhatsApp / call)**.

## Tech Stack

- React 18
- Vite 5
- TailwindCSS 3

## Getting Started

## 1) Install dependencies

```bash
npm install
```

## 2) Run in development

```bash
npm run dev
```

## 3) Production build

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components/` -> UI sections/components.
- `src/data.js` -> all visible site content and links.
- `src/theme.js` -> editable design tokens (colors, radii, shadows).
- `public/images/` -> hero and gallery image placeholders.

## Editable Content

All visible copy is centralized in:

- `src/data.js`

Update there:

- Brand/title/tagline.
- Navbar labels and CTA text.
- Services (main + detailed).
- Hours.
- Team/responsibles.
- Address and contact cards.
- Contact form labels/placeholders.
- Testimonials placeholders.
- FAQ placeholders.
- Footer text.

## Theme Customization

Edit:

- `src/theme.js`

Main tokens:

- `colors.primary`, `colors.secondary`, `colors.border`, etc.
- `radius.card`, `radius.button`, `radius.pill`
- `shadow.card`, `shadow.soft`

## Contact and External Links

In `src/data.js` (`contact` and related sections), update:

- Phone (`phoneLabel`, `phoneHref`)
- WhatsApp (`whatsappHref`, `whatsappPrefill`)
- Facebook / Instagram URLs
- Google Maps URL (`mapsQueryHref`)
- Embed URL (`mapsEmbedUrl`)

## WhatsApp Form Behavior

The contact form builds this message and opens WhatsApp:

```text
Hola, quiero agendar una cita en Polar Med.
Nombre: ...
Tel: ...
Servicio: ...
Mensaje: ...
```

## Images

Replace placeholder files in `public/images/`:

- `logo.svg` (principal)
- `logo.png` (fallback)
- `hero.jpg`
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gallery-4.jpg`
- `gallery-5.jpg`
- `gallery-6.jpg`
- `gallery-7.jpg`
- `gallery-8.jpg`
- `gallery-9.jpg`

If an image is missing, the UI uses a safe fallback image to avoid runtime errors.

## Sections Included

1. Sticky navbar with anchor links + WhatsApp CTA
2. Hero
3. Main services cards
4. Detailed services (tabs)
5. Hours
6. Team
7. Location (address + maps button + embed)
8. Contact (cards + form to WhatsApp)
9. Footer

Extra sections:

- Testimonials (placeholder)
- FAQ (placeholder)
- Optional gallery

## Accessibility and UX

- Labeled form fields
- Keyboard-accessible interactive elements
- Visible focus states
- Mobile-first responsive layout
- Mobile floating WhatsApp button
- Mobile sticky bottom CTA (WhatsApp / call)

## SEO

Configured in `index.html`:

- `title`
- `meta description`
- Open Graph placeholders (`og:title`, `og:description`, `og:image`, `og:url`)

Update these meta tags before deployment.
