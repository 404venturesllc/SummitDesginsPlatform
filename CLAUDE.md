# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # TypeScript check + Vite production build (outputs to /build)
npm run preview  # Preview production build locally
npx tsc --noEmit # Type-check without emitting files
```

## Architecture Overview

This is a React + TypeScript marketing website for Summit Designs, built with Vite and Tailwind CSS 4.0. The site uses hash-based routing (`#home`, `#portfolio`, `#contact`) managed in `App.tsx`.

### Key Patterns

**Routing**: Simple hash-based navigation via `window.location.hash` in `App.tsx:9-22`. No router library - just conditional rendering based on hash value.

**Styling**:
- Tailwind CSS 4.0 with custom breakpoint `custom-xl` at 1330px (defined in `src/styles/globals.css:2`)
- CSS custom properties for theming in `src/styles/globals.css` (supports dark mode via `.dark` class)
- Primary font: Plus Jakarta Sans

**Component Organization**:
- `src/components/` - Page components and features (ResponsiveLanding, ContactPage, PortfolioPage)
- `src/components/ui/` - Reusable UI primitives (Radix UI wrappers using shadcn/ui pattern)
- `src/components/figma/` - Figma-generated components
- `src/imports/` - SVG path data extracted from Figma designs (e.g., `svg-*.ts` files)

**Animations**: Uses `motion` (Framer Motion) for scroll-triggered animations. `FadeInView` component wraps sections for fade-in effects.

**Image Handling**:
- Figma assets use special import aliases like `figma:asset/[hash].png`
- These are resolved via Vite aliases in `vite.config.ts` to `src/assets/`

**Utility Function**: `cn()` helper in `src/components/ui/utils.ts` merges Tailwind classes using clsx + tailwind-merge.

### Page Structure

- **Home** (`#home` or `/`): ResponsiveLanding.tsx - Hero, integrations, how-it-works, benefits, testimonials
- **Portfolio** (`#portfolio`): PortfolioPage.tsx
- **Contact** (`#contact`): ContactPage.tsx

### Responsive Breakpoints

- Mobile: < 768px (md)
- Tablet: 768px - 1024px
- Desktop: > 1024px (lg)
- Custom XL: > 1330px (custom-xl)
