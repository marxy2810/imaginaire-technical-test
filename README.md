# Shopify Developer — Tech Test

Thanks for applying for a Shopify Developer position. We've put together the following task to assess your front-end skills in a headless Shopify context.

This repo is a minimal Next.js boilerplate with TailwindCSS and a Shopify Storefront API client already configured. Your job is to build a page — not wire up infrastructure.

## The task

Build a **homepage** based on the Figma designs below. The page is made up of five sections — navigation, hero, product carousel, text content, and footer. Content for everything except the product carousel can be hardcoded. The product carousel must pull real data from the Shopify Storefront API.

Figma links:

- [Figma designs](https://www.figma.com/design/jVI89HKBZF1CYsEY2V9T2f/Imaginaire-Technical-Test?node-id=4-23&p=f&t=Jo5hhJ2dznYrO171-0)
- **Password:** `scout-bit-scoot-mask`

---

### Section breakdown

#### 1. Navigation

- Logo and navigation links
- Responsive — should collapse to a mobile menu on smaller screens

#### 2. Hero banner

- Full-width hero with heading, body copy, and a CTA button
- Content can be hardcoded
- Hero image can be placed in `public/` or referenced from an external URL

#### 3. Product carousel

- A Storefront API client (`src/lib/shopify.ts`) and a sample products query (`src/lib/queries.ts`) are provided — use them to fetch real product data.
- Product cards should feel interactive — think about what information is useful on hover (e.g. available variants, quick actions, colour options). The Figma only shows the resting state; we want to see your judgement on hover/interaction states.
- The section is a static grid on desktop and a slider on mobile.
- The title and CTA that sit above the carousel should be sticky / "stuck" to the bottom of the viewport on scroll.
- Product imagery can be pulled from the Storefront API or placed in `public/`.

#### 4. Text / content section

- An editorial block with a heading and body copy
- Content can be hardcoded

#### 5. Footer

- Links, social icons, and copyright notice
- Content can be hardcoded

---

### A note on interactions

The Figma designs show resting states only — there are no hover states, transitions, or open menus. We've done this deliberately. We want to see how you approach interaction design: what happens when a user hovers over a button, a nav link, or a product card? How does the mobile menu open and close? Use your judgement and show us what you'd ship.

---

## Before you submit

- **Commit as you go.** We review git history — we want to see how you break down the work, not just the end result.
- **Tell us one thing you'd do differently** if you had more time. A sentence or two in your reply is fine.
- A rough idea of how long it took you.

---

## Getting started

### Requirements

- Node.js 18+
- npm

### Setup

```bash
npm install
cp .env.example .env.local
# The .env.example already contains valid credentials for the test store
npm run dev
```

### Commands

| Command         | Usage                          |
| --------------- | ------------------------------ |
| `npm install`   | Install dependencies.          |
| `npm run dev`   | Start Next.js dev server.      |
| `npm run build` | Production build.              |
| `npm run lint`  | Run ESLint.                    |

---

## What we're looking for

- Clean, well-structured React components and sensible file organisation
- Accurate Figma-to-code translation across every section
- Responsive implementation (desktop-first with mobile adaptations)
- Sensible use of TailwindCSS
- Proper data fetching from the Storefront API
- Semantic HTML and accessible markup
- Attention to interaction details (hover states, sticky positioning, mobile menu)
- Consistent spacing and typography across the full page

## Guidelines

- Build desktop-first. Use `tablet:` breakpoints for mobile overrides.
- For hover/touch behaviour that differs on mobile (e.g. avoiding double-tap issues), use the `supports-hover:` Tailwind variant.
- Use `rem` values instead of `px` for spacing.
