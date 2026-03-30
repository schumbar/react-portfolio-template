# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at localhost:3000
npm run build    # Production build
npm test         # Run tests
npm run deploy   # Build + deploy to GitHub Pages (gh-pages)
```

## Architecture

Single-page React application (Create React App + TypeScript). No routing — sections are navigated via smooth-scroll to DOM IDs (`#expertise`, `#history`, `#projects`, `#contact`).

**Component hierarchy:**
```
App.tsx
├── Navigation.tsx     — sticky header; dark/light toggle; mobile drawer
├── FadeIn.tsx         — wraps sections with staggered opacity/transform animation
│   ├── Main.tsx       — hero/about
│   ├── Expertise.tsx  — skills (3 label arrays)
│   ├── Timeline.tsx   — career history (react-vertical-timeline-component)
│   ├── Project.tsx    — project grid with mock images
│   └── Contact.tsx    — contact form (email integration commented out)
└── Footer.tsx
```

`src/components/index.js` is a barrel that re-exports all components.

## Content

All portfolio content is **hardcoded directly in component files** — there is no CMS, data file, or API. To customize:
- **Skills:** Edit the `labelsFirst/Second/Third` arrays in `Expertise.tsx`
- **Career:** Edit the `VerticalTimelineElement` entries in `Timeline.tsx`
- **Projects:** Edit imports and card content in `Project.tsx` (mock images are in `src/assets/images/`)
- **Hero/About:** Edit text and social links directly in `Main.tsx`

## Styling

Each component has a corresponding SCSS file in `src/assets/styles/`. Dark/light mode is implemented via CSS class switching (`.dark-mode` / `.light-mode`) — the mode state lives in `App.tsx` and is passed to `Navigation.tsx` as a prop. Material-UI (MUI) is used for UI primitives; responsive breakpoints use MUI's `sx` prop (`xs`, `sm`, `md`, `lg`).
