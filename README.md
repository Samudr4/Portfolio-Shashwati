# Personal Editorial Portfolio Website

A modern, art-directed editorial portfolio website for a journalist, writer, media contributor, and event host. Built based on the 23-page archive `SSP_PORTOFOLIO.docx` and the design specification in `portfolio_website_build_brief.md`.

---

## Design System: "The Editorial Voice"

Inspired by independent cultural magazines, Swiss graphic design, and minimalist typography-driven editorial sites:
- **Warm Ivory Canvas**: `#F7F5F0`
- **Deep Ink Text**: `#202321`
- **Muted Forest Green Accent**: `#315B4C`
- **Warm Grey Surfaces**: `#ECEAE4`
- **Hairline Dividers**: `#D8D5CE`
- **Typography**: Playfair Display (editorial display headings) & Inter (interface and body)

---

## Content & Asset Inventory

All 62 unique items across 23 pages of the original portfolio DOCX have been preserved, extracted, and categorized without synthetic alteration:

| Section | Pages | Count | Description |
|---|---|---|---|
| **Articles** | 1–11 | 31 items | Opinion and editorial newspaper clippings |
| **Creative Writing** | 12–15 | 8 items | Poems and literary pieces |
| **Television Debates** | 16–17 | 5 items | Debate broadcast screenshots |
| **All India Radio** | 18 | 3 items | AIR broadcast photographs |
| **Event Hosting** | 19–20 | 6 items | Anchor and compère photographs |
| **Achievements** | 21–23 | 9 items | Certificates and recognitions (2022–2024) |

---

## Features

- **Interactive Lightbox Viewer**:
  - Full-size image viewing preserving natural aspect ratios (`object-fit: contain`).
  - Next / Previous navigation with loop-around.
  - Keyboard shortcuts (`Escape` to close, `ArrowLeft` / `ArrowRight` to navigate).
  - Background scroll locking while open.
- **Editorial Writing Archive**:
  - Filter by "All work", "Newspaper articles", and "Creative writing" with live item counts.
- **Dedicated Media & Hosting Galleries**:
  - Asymmetric layout honoring broadcast debates and stage presence.
- **Dedicated Print-Friendly `/resume` Route**:
  - Clean typographic resume document.
  - Functional `Print / Save PDF` action triggering native browser print.
  - Print stylesheet (`@media print`) that automatically strips navigation, buttons, and backgrounds for crisp document printing.
- **Single Source of Truth Data Files**:
  - [data/portfolio.ts](file:///c:/UserX/Projects/SSPs/Portfolio/data/portfolio.ts) — easily update portfolio items, captions, and profile details.
  - [data/resume.ts](file:///c:/UserX/Projects/SSPs/Portfolio/data/resume.ts) — manage resume entries and contact information. Empty fields are hidden automatically.

---

## Running the Project

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
