---
name: Warm Merchant POS
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#4f4632'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#817660'
  outline-variant: '#d3c5ac'
  surface-tint: '#775a00'
  primary: '#775a00'
  on-primary: '#ffffff'
  primary-container: '#ffc61a'
  on-primary-container: '#6e5400'
  inverse-primary: '#f6be0a'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006c4a'
  on-tertiary: '#ffffff'
  tertiary-container: '#70e3b0'
  on-tertiary-container: '#006445'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf98'
  primary-fixed-dim: '#f6be0a'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  headline-md:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-sm:
    fontFamily: Outfit
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 0.75rem
  gutter-desktop: 1.25rem
  margin: 1rem
  margin-tablet: 1.25rem
  margin-desktop: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system blends purposeful minimalism with high-contrast functional retail design. Designed specifically for daily point-of-sale operations in retail kiosks, neighborhood warungs, and busy convenience stores, the visual aesthetic prioritizes instant legibility, ergonomic tap zones, and fatigue-free contrast.

The emotional goal is energetic efficiency: bright enough to evoke optimism and warmth through warm golden tones, yet grounded by deliberate, heavy slate ink surfaces for mission-critical order figures, payment summaries, and barcode scans. Tactile micro-interactions and crisp border structures ensure cashiers can navigate split-second checkouts accurately under varied ambient store lighting.

## Colors

The color palette centers on a three-tier utilitarian logic:
- **Primary Accent (`#FFC61A`):** Applied exclusively to major workflow prompts, active selection highlights, category navigation badges, and primary payment confirmation bars. Text placed over the primary tone defaults to deep Slate-900 (`#0F172A`) for strict WCAG AAA conformance.
- **Secondary / Ink (`#0F172A`):** Serves as structural grounding—primary buttons, order totals, high-priority receipts, modals, and sticky checkout summaries.
- **Tertiary / Success (`#059669`):** Indicates inventory stock states, completed transactions, active register status, and successful barcode scans.
- **Destructive / Error (`#E11D48`):** Reserved for deletions, cart clearance, voids, and payment timeouts.
- **Surface & Backgrounds:** The base layout sits on soft cool canvas (`#F8FAFC`). Cards use pure `#FFFFFF` with structural boundary borders in `#E2E8F0` to clearly define quick-touch boundaries.

## Typography

The typography system sets clean, rounded geometric titles using Outfit to evoke friendlier merchant interfaces, while utilizing Inter across all dense transactional numbers, stock counts, SKU identifiers, and body blocks. 

Tabular numerals (`font-feature-settings: 'tnum' 1`) must be enforced globally for all monetary values, invoice codes, and cart quantities to eliminate horizontal shifting during instant quantity adjustments.

## Layout & Spacing

The layout model is divided into a responsive POS screen architecture:
- **Tablet / Desktop Screens (Landscape POS):** Split-view workspace featuring a multi-column fluid product grid (taking roughly 60–65% width) and a persistent sticky order panel (taking 35–40% width).
- **Mobile Handheld Mode:** Single-column layout with a pinned bottom checkout tray showing item totals and an expand trigger.
- **Touch Ergonomics:** All actionable POS buttons, keypad keys, and grid items honor a minimum touch bounding box of 44×44px (preferring 48px to 56px on primary actions).

## Elevation & Depth

This design system uses an intentional combination of structural low-contrast borders and subtle, grounded shadows:
- **Base Level (Canvas):** Flat `#F8FAFC`.
- **Level 1 (Product Cards, Category Badges):** Pure white `#FFFFFF` surface with an explicit 1px outline in `#E2E8F0`. Layered with ambient diffuse shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
- **Level 2 (Active Cart Tray, Quick Filter Bar):** Surface `#FFFFFF`, border `#CBD5E1`, with shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Payment Pad, Cash Tender Modals, Barcode Dialogs):** Elevated modal overlay with ambient depth: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.
- **Hover & Press Depth:** Pressed elements visually compress using a subtle scale (`scale-[0.98]`) alongside an active border darkening rather than large dimensional shifts, keeping the interface snappy and tactile.

## Shapes

The interface embraces a balanced rounded corner language (Radius 2 / 0.5rem base) which provides an approachable, contemporary look while maintaining high spatial efficiency for dense catalog items and inventory sheets.

- **Item Cards & Keypad Tiles:** 0.5rem (8px) for clean alignment in tightly spaced grids.
- **Summary Trays & Modal Containers:** 1rem (16px) for distinct structural separation.
- **Badges, Quantities, and Quick Filter Chips:** 9999px (full pill shape) to stand out against rectangular product tiles.

## Components

### Buttons
- **Primary CTA ("Bayar / Charge"):** Filled `#FFC61A` with bold `#0F172A` text. Font weight 600. Large height (48px to 52px). High tap target.
- **Secondary CTA ("Hold Order", "Print Struk"):** Deep slate background `#0F172A` with `#FFFFFF` text, or transparent with a 1.5px `#0F172A` border.
- **Ghost / Utility:** `#F1F5F9` background, `#334155` text for minor controls (discount, void item, clear cart).

### Product Cards
- Contained white boxes with 1px border `#E2E8F0`. 
- Displays product image (or vibrant letter initials placeholder), title in 2-line clamp, SKU in `body-sm` muted slate, price prominently displayed in `title-sm` Slate-900, and a floating plus button or quick counter pill when active.

### Chips & Category Tabs
- Pill-shaped (`rounded-full`) horizontally scrolling tags.
- Inactive: `#FFFFFF` surface with `#E2E8F0` border and `#475569` text.
- Active: `#FFC61A` fill with `#0F172A` bold text and zero drop-shadow.

### Inputs & Number Pad
- Search bar features an integrated barcode scanner trigger icon, 44px height, light background `#FFFFFF`, and a 1.5px outline focused in `#FFC61A`.
- Numeric keypad tiles for cash payment entry: `#FFFFFF` keycaps with clear `#0F172A` figures, 1px `#E2E8F0` border, active tap feedback via `#F8FAFC`.

### Cart List Items
- Compact horizontal rows separated by 1px `#F1F5F9` dividers.
- Quantity adjustment using segmented steppers (`-`, number, `+`) with minimum 36px touch boundaries.

### Status Badges
- High-contrast micro pills with tinted background and saturated solid text:
  - In Stock: `#DCFCE7` with `#15803D` text.
  - Low Stock: `#FEF9C3` with `#A16207` text.
  - Out of Stock: `#FFE4E6` with `#BE123C` text.