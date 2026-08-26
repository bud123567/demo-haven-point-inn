---
version: alpha
name: Haven Point Tidal Field Guide
description: Editorial gallery-meets-marina system for a four-room Rock Hall inn.
colors:
  ink: "#162D30"
  primary: "#123F46"
  bay-dark: "#0A3036"
  salt: "#F7F8F4"
  foam: "#E7EFEC"
  potager: "#526B52"
  coral: "#E6A06B"
  line: "#C9D7D2"
  muted: "#526764"
  white: "#FFFFFF"
typography:
  display-xl:
    fontFamily: Newsreader
    fontSize: 108px
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: -0.045em
  display-lg:
    fontFamily: Newsreader
    fontSize: 80px
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: -0.035em
  body-lg:
    fontFamily: Manrope
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.14em
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 72px
  4xl: 112px
  content-max: 1280px
  reading-max: 672px
rounded:
  small: 3px
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.bay-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: 16px 24px
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.salt}"
    typography: "{typography.label}"
    rounded: "{rounded.small}"
    padding: 16px 24px
  surface-page:
    backgroundColor: "{colors.salt}"
    textColor: "{colors.ink}"
  surface-soft:
    backgroundColor: "{colors.foam}"
    textColor: "{colors.muted}"
  section-marker:
    backgroundColor: "{colors.potager}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
  divider:
    backgroundColor: "{colors.line}"
    height: 1px
---

# Haven Point Inn & Gallery — design direction

## North Star

A small Eastern Shore inn presented like an independent gallery field guide: salt-clean, garden-aware, and close to the marina without resorting to nautical clichés.

Audience: Rock Hall visitors who want a personal four-room stay near the water, including couples, boaters, wildlife visitors, and sailing students.  
Page job: move a guest from a clear sense of place to the verified Eviivo availability page, with phone and email as direct alternatives.

## Register and anti-references

This is a one-page hospitality concept, not a booking platform. Avoid generic boutique-hotel tropes: no warm beige template, script logo, stock lifestyle image, fake review total, invented rating, “luxury escape” language, floating pill-card collection, or simulated reservation form.

The voice is personal and observant. It uses only details published by Haven Point Inn & Gallery: four private rooms, the central marina district, the gallery café, the potager garden, complimentary breakfast, room amenities, and nearby Rock Hall activities.

## Runtime tokens

`css/styles.css` is the canonical runtime owner. The accepted design tokens are:

### Color

- `--color-ink: #162D30` — primary text and editorial structure.
- `--color-bay: #123F46` — deep bay teal for the hero, footer, and primary actions.
- `--color-bay-dark: #0A3036` — hover and high-contrast depth.
- `--color-salt: #F7F8F4` — crisp page ground; intentionally cooler than cream.
- `--color-foam: #E7EFEC` — quiet section contrast.
- `--color-potager: #526B52` — garden-derived secondary accent.
- `--color-coral: #E6A06B` — warm action marker inspired by painted harbor details.
- `--color-line: #C9D7D2` — frames, rules, and dividers.
- `--color-muted: #526764` — secondary copy.
- `--color-white: #FFFFFF` — accessible reverse text and image labels.
- `--focus-ring-on-light: var(--color-bay-dark)` — focus on salt and foam surfaces; 13.22:1 and 12.06:1 respectively.
- `--focus-ring-on-dark: var(--color-coral)` — focus on bay and bay-dark surfaces; 5.26:1 and 6.45:1 respectively.
- `--focus-ring-on-coral: var(--color-bay-dark)` — focus on coral surfaces; 6.45:1.
- `--text-index-on-light: var(--color-potager)` — small field-guide indices on salt; 5.49:1.
- `--text-on-coral: var(--color-bay-dark)` — small utility text on coral; 6.45:1.
- `--focus-ring-color` is the contextual alias inherited by controls; light surfaces are the default, with dark and coral sections overriding it.

### Typography

- `--font-display: "Newsreader", Georgia, serif` — editorial display face for the inn/gallery character.
- `--font-body: "Manrope", "Helvetica Neue", Arial, sans-serif` — clear utility and body face.
- Display range: `clamp(3.7rem, 6.4vw, 6.75rem)` for the desktop hero and `clamp(2.7rem, 5.3vw, 5rem)` for section titles, with explicit tablet and mobile reductions.
- Body range: `1rem` to `1.1875rem`, with a maximum readable line length of about 66 characters.
- Utility labels: `0.75rem`, 700 weight, uppercase, with `0.14em` tracking; never used for long copy.

Both families are self-hosted as WOFF2 files. No font CDN is required at runtime.

### Space, width, and shape

- `--space-1: 0.25rem`
- `--space-2: 0.5rem`
- `--space-3: 0.75rem`
- `--space-4: 1rem`
- `--space-5: 1.5rem`
- `--space-6: 2rem`
- `--space-7: 3rem`
- `--space-8: 4.5rem`
- `--space-9: 7rem`
- `--content-max: 80rem`
- `--reading-max: 42rem`
- `--radius-small: 0.1875rem`

The geometry is mostly square. The single small radius softens controls without turning the page into a collection of rounded cards.

## Layout concept

The page is an offset harbor log: precise text rails meet photographic “windows,” and a coral tide line moves from the hero into the section labels.

```text
┌ concept note ──────────────────────────────────────────────┐
├ text mark ── story / rooms / around Rock Hall ─ availability┤
├ bay-teal story ───────────────┬ exterior harbor window ────┤
│ four rooms + primary action   │ proof rail / location      │
├ short positioning statement ─┴──────────────────────────────┤
├ room image ─────────────── room details / sunroom inset ────┤
├ gallery café + potager: staggered photographic field guide ┤
├ around Rock Hall ───────── marina image / activity notes ──┤
├ direct booking panel: availability / phone / email ─────────┤
└ address / concept disclaimer / source note ─────────────────┘
```

Desktop uses deliberate asymmetry rather than a repeated card grid. Tablet collapses the hero and rooms into balanced two-column bands. Mobile keeps the proposition and availability action before the first image, then turns the photo atlas into a clean vertical narrative.

## Signature

The signature element is the **tide line**: a thin coral rule that begins beside the hero eyebrow, passes through numbered field-guide labels, and returns as an edge marker on photography. It evokes chart marks and garden rows without drawing literal anchors, waves, or leaves.

The favicon is a non-logo utility tile derived from the same bay-and-coral tide-line motif; the typographic wordmark remains the only business mark.

## Interaction and accessibility

- Sticky navigation with a text mark; no fabricated logo.
- Primary action always opens the verified Eviivo availability URL. Phone and email are real links.
- Mobile navigation is a modal drawer with an inert background, focus trap, Escape close, backdrop close, and focus restoration.
- Native anchors and buttons only; no clickable `div` elements and no placeholder links.
- Visible `:focus-visible` treatment uses semantic surface tokens with at least 3:1 adjacent-color contrast; small index text maintains at least 4.5:1. Controls use 44-pixel minimum touch targets, semantic landmarks, descriptive image alternatives, and a skip link.
- Explicit image dimensions and aspect ratios prevent layout shift.
- Scroll reveals are progressive enhancement only; all content remains visible if JavaScript is unavailable.
- `prefers-reduced-motion: reduce` removes animated transitions and smooth scrolling.
- Global scrollbar styling includes both standards-based properties and a WebKit fallback.
- No horizontal overflow is used to conceal layout defects.

## Pre-code critique and revision

The first concept used a polished split hero followed by equal amenity cards. That solved the old site’s hierarchy problem but risked looking like a generic hotel template. It also gave the small `home-breakfast.jpg` too much visual responsibility.

Revision:

1. Keep the split hero, but turn the rest of the page into a staggered editorial field guide rather than repeated cards.
2. Use the exterior as the large hero image and reserve the 287 × 173 breakfast photo for a compact inset no wider than its useful resolution.
3. Make the inn’s unusual combination—guest rooms, gallery café, potager garden, and marina district—the organizing idea.
4. Put the verified availability action in the first mobile screen and repeat it only at the final decision point.
5. Exclude reviews, star ratings, awards, price claims, and an on-page booking form because the available source set does not support a current, independently verified presentation of them.

This revision is more specific to Haven Point Inn & Gallery, improves source integrity, and preserves the direct conversion path.
