
# Shama Legal Solutions — Website Plan

A premium, fully responsive bilingual (English ⇄ Urdu) website for Advocate Shama Moazzam, with a navy + ivory + gold "scales of justice" identity inspired by your logo. Elegant scroll animations, hero video, and a WhatsApp-first contact flow.

## Brand & Design Direction

- **Palette**: Deep navy `#0E2A47` (logo), ivory `#F5F1E8` (logo bg), warm gold `#C9A96E` accent, charcoal text, soft white surfaces.
- **Typography**: Playfair Display (serif headings — authoritative legal feel), Inter (clean body), Noto Nastaliq Urdu (for Urdu mode).
- **Identity touches**: Scales-of-justice motif, subtle gavel/column SVG dividers, parchment textures, gold hairlines.
- **Animations (subtle & elegant)**: Fade-up on scroll, parallax hero, animated counters (cases won, clients), gentle hover lifts, animated gradient borders on service cards, smooth page transitions, animated mobile menu reveal.

## Pages

```text
/              Home
/about         About Us (Adv. Shama, mission, panel)
/services      All 9 services in detail
/reviews       Client testimonials
/contact       Contact form + WhatsApp + map
/locations     Lahore & Hyderabad offices
/jobs          Career openings (lawyers, staff)
/register      Lawyer / Aspirant / Tuition registration
/pricing       Transparent fee structure
```

## Home Page Sections

1. **Hero** — Attached cinematic lawyer video as background (muted, looped), navy overlay, animated headline "Justice. Integrity. Results." + Urdu tagline, primary CTA "Free Consultation on WhatsApp", secondary "Our Services". Floating scales-of-justice 3D-feel SVG.
2. **Trust strip** — 24/7 Service • Panel of Advocates • 50% Discount • Lahore & Hyderabad
3. **Services grid** — 9 service cards with icons (Civil, Criminal, Family, Banking, Labour, NTN, Company Registration, Child Custody, Bail) — hover-lift, gold border animation.
4. **About preview** — Photo of Adv. Shama placeholder + bio snippet + "Read more".
5. **Why Choose Us** — Animated stat counters (Years experience, Cases handled, Client satisfaction).
6. **Pricing snapshot** — Legal advice 500 PKR • Lawyer registration 3500 PKR • 50% discount banner.
7. **Process** — 4-step timeline: Consult → Case Review by Panel → Strategy → Resolution.
8. **Testimonials carousel** — Pakistani client names, star ratings.
9. **Locations** — Lahore + Hyderabad cards with embedded Google Maps.
10. **Final CTA** — "Talk to a lawyer now" → WhatsApp.
11. **Footer** — Links, services, contact, social, language toggle.

## Bilingual System (English ⇄ Urdu)

- Language toggle in header (EN | اردو) and mobile menu.
- React Context stores language; all copy lives in a `translations.ts` dictionary with `en` + `ur` keys for every string.
- Switching to Urdu sets `dir="rtl"`, swaps font to Noto Nastaliq Urdu, mirrors layout (flex reverses, nav alignment).
- Persisted to localStorage.

## Header & Mobile Menu

- **Desktop**: Sticky transparent-on-hero → solid-navy on scroll. Logo left, nav center, language toggle + WhatsApp button right.
- **Mobile**: Compact navy bar with logo + hamburger. Tapping hamburger opens a **full-screen ivory drawer** with: animated scales icon, large serif nav links staggered fade-in, language toggle, WhatsApp CTA, social icons at bottom, gold hairline dividers — feels like opening a law firm folio.

## WhatsApp Integration

- Floating green WhatsApp FAB on every page (bottom-right, pulse animation).
- All "Get Consultation", "Register", "Apply" buttons open `https://wa.me/923163814166?text=<prefilled>` with context-aware prefilled message (e.g., "Hello, I need help with a Family case").
- Forms (consultation, registration, jobs, tuition) collect fields client-side and on submit open WhatsApp with the formatted message — no backend.

## SEO (Lahore & Hyderabad focus)

- Per-route `head()` with unique title, description, og:title, og:description, og:image.
- Targeted titles: "Top Family Lawyer in Lahore | Shama Legal Solutions", "Best Advocate in Hyderabad for Civil & Criminal Cases", etc.
- Keyword-rich service page H1s, semantic HTML, structured FAQ section, JSON-LD `LegalService` schema with both city addresses, sitemap.xml, robots.txt.
- Alt text on all images mentioning Lahore/Hyderabad/Pakistan + service.

## Imagery (Pakistan-relevant)

AI-generated hero/section images depicting: Pakistani courtroom, female advocate in formal black coat, Lahore High Court exterior, family consultation scene, scales/gavel still life, Hyderabad cityscape. Stored under `src/assets/`. Logo placed in header + footer.

## Pricing Page

Transparent table:
- Legal Advice (advance): **PKR 500**
- Lawyer Registration: **PKR 3,500**
- Aspirant Registration: **PKR (TBD)**
- 50% discount banner across every case
- Note: "Payment made directly to advocate after consultation" — no online checkout.

## Technical Notes

- TanStack Start file-based routes under `src/routes/` (one file per page).
- Language context in `src/contexts/LanguageContext.tsx`, dictionary in `src/lib/translations.ts`.
- Reusable `<Section>`, `<ServiceCard>`, `<WhatsAppButton>`, `<LanguageToggle>`, `<AnimatedCounter>`, `<MobileMenu>` components.
- Hero video copied from upload to `public/videos/hero.mp4`.
- Logo copied to `src/assets/logo.png`.
- Tailwind v4 design tokens added to `src/styles.css` (navy, gold, ivory, fonts).
- Framer-motion-free: animations via Tailwind keyframes + IntersectionObserver hook for scroll-reveal (keeps bundle light).
- Google Fonts loaded via `<link>` in `__root.tsx` head.
- JSON-LD schema injected per page via `head()`.

## Out of Scope (per your answers)

- No backend / database / admin panel.
- No online payments.
- No 3D/Three.js scenes — staying with elegant subtle animations.
