# Sabaoth Church Bologna — Website Handoff

## Project
Single-page institutional website for Sabaoth Church Bologna, a congregation of Sabaoth Church (mother church in Milan). Phase 1 = static content page. Phase 2 (future) = dynamic events via Firebase, following the same pattern as other Sabaoth Bologna team projects (wallet, game platform).

## Repo
https://github.com/sabaothbologna/website

## Stack
- React (via Vite)
- Deploy: Vercel (live) + GitHub Pages (workflow ready, not yet activated)
- No backend/Firebase needed for v1 — pure static content
- Language: Italian + English, with browser auto-detect and manual switcher

## Deploy status (2026-08-29)
- **Vercel: live.** Root Directory is currently set to `sabaoth-website` in Vercel
  project settings — a workaround because the GitHub repo has all files nested
  one level deep under a `sabaoth-website/` folder (from a manual zip upload via
  the GitHub web UI, instead of `git push`).
- **GitHub repo structure fix: pending.** Local `main` branch already has the
  correct flat structure (files at repo root) plus GitHub Pages support. To fix:
  `git push origin main --force` (this will overwrite the nested-folder commits
  currently on GitHub — safe, since local has all that content plus more).
- **GitHub Pages: not active yet.** `.github/workflows/deploy-pages.yml` is
  already committed and will auto-deploy to `https://sabaothbologna.github.io/website/`
  once (1) the force-push above lands, and (2) repo Settings → Pages → Source is
  set to "GitHub Actions" (one-time manual step).
- After the force-push, reset Vercel's Root Directory back to blank/root.

## Design tokens

### Colors
```
--black: #121212
--dark-green: #30412e
--sage: #9eaf99
--off-white: #f2f3ec
--gray: #a7a398
--terracotta: #91532d
--nude: #d4b49e
```
Usage guide:
- Off-white = default page background
- Black = dark sections (Chi siamo, Vieni a trovarci, Contattaci)
- Gray = eyebrow labels, muted UI text, button hover states
- Terracotta/sage/dark-green/nude = accent-only (photo treatments, event card imagery) — NOT full section backgrounds

### Typography
- Display/headings: **Urbanist** (Google Fonts) — weight 800, uppercase, tight letter-spacing (-0.01em)
- Body: **Montserrat** (Google Fonts) — free alternative to Gotham (do not use unlicensed Gotham files; license Gotham properly from Hoefler&Co if the church wants the original)
- Eyebrow labels: Montserrat, 600 weight, 13px, uppercase, letter-spacing 0.18em, color var(--gray)

### Icons
Use **Lucide** (lucide-react package) — outline style, matches minimalist direction. Needed: instagram, message-circle (whatsapp substitute or use a whatsapp brand svg), map-pin, clock, menu (mobile nav), x (close mobile nav).

### Logo
Use uploaded SVG: `logo-_sabaoth_bologna.svg` — follow brand guidelines from the PDF (never recolor, never rotate, never stretch, keep horizontal, ensure background contrast).

## Site structure (in order)

1. **Header** — fixed, logo left, nav right (Chi siamo / Eventi / Bologna / Vieni a trovarci / Contattaci). Needs a real mobile hamburger menu below 820px (not just hidden nav — build an actual slide-out or dropdown).

2. **Hero**
   - Eyebrow: "Sabaoth Church Bologna"
   - H1: "Un luogo dove la tua vita può cambiare."
   - Body: "Benvenuto in un luogo dove i miracoli accadono ancora oggi. Un luogo che non ti farà uscire come sei entrato. Un luogo pieno di speranza e di gioia. Un luogo che non vede l'ora di conoscerti."
   - CTA button → scrolls to #contatti: "Vieni a trovarci"
   - Social icons: Instagram, WhatsApp

3. **Chi siamo** (dark section, black bg)
   - Image block (left) — real community photo needed
   - Eyebrow: "Chi siamo"
   - H2: "Costruiamo una storia insieme."
   - Paragraph 1: "La nostra chiamata è cambiare la storia religiosa d'Italia e non solo, riportando una fede viva, come quella dei primi cristiani. Oggi, questa storia si scrive anche a Bologna."
   - Paragraph 2: "Crediamo che Dio sta cambiando la storia di questa città, e vogliamo farne parte, insieme a te."

4. **Eventi settimanali** (off-white bg)
   - Eyebrow: "Eventi settimanali"
   - H2: "Ci vediamo qui."
   - Lead: "La nostra settimana è piena di appuntamenti e momenti per stare insieme e conoscerci. Ecco alcuni eventi."
   - 3 cards:
     - **Domenica Gospel** — "Ogni domenica ti aspettiamo per lodare Dio e sentire un messaggio che ti cambierà la vita. Vieni con un amico, sarete i benvenuti."
     - **Life Group** — "Piccoli gruppi di persone che si riuniscono durante la settimana. Condividiamo la vita, preghiamo insieme e facciamo amicizia."
     - **Yous Night** — "Unisciti agli Yous ogni Sabato se hai dai 14 ai 29 anni! Amiamo stare insieme e divertirci. Le Yous Night sono il posto perfetto per noi!"
   - Note: this is a STATIC weekly schedule, not the dynamic Firebase-driven event system planned for Phase 2.

5. **Bologna** (off-white bg)
   - Eyebrow: "Bologna"
   - H2: "La nostra casa"
   - Body: "Portici, torri, una città viva, piena di storia e di persone che cercano ancora un senso più grande. Vogliamo essere qui, portando qualcosa che rimane."
   - Photo grid: 4 photos (large + 3 smaller) — Portici, Torri, Piazza Maggiore, community photo. Use real Unsplash photos for the city shots (search terms: "bologna portici", "bologna towers", "piazza maggiore bologna") and a real community photo if available.

6. **Vieni a trovarci** (dark section, black bg)
   - Eyebrow: "Vieni a trovarci"
   - H2: "Ti aspettiamo."
   - Address: Via Enrico Mattei, 86/10, 40138 Bologna BO
   - Orario: Domenica, ore 10:30
   - Real Google Maps embed (not a placeholder block) pinned to the address above

7. **Contattaci** (dark section, black bg)
   - Eyebrow: "Contattaci"
   - H2: "Siamo qui per te."
   - Body: "Hai domande, vuoi saperne di più o semplicemente vuoi salutarci? Scrivici, ti risponderemo volentieri."
   - CTA buttons: "Scrivici su WhatsApp" (https://wa.me/393757911512) + "Seguici su Instagram" (https://instagram.com/sabaothbologna)

8. **Footer**
   - "Sabaoth Church Bologna © 2026"
   - Social icons: Instagram, WhatsApp

## Contact info
- Instagram: @sabaothbologna
- WhatsApp: +39 375 791 1512 → link format `https://wa.me/393757911512`
- Address: Via Enrico Mattei, 86/10, 40138 Bologna BO
- Service time: Sunday 10:30am

## Responsive requirements
- Full mobile breakpoint at 520px: stacked layout, full-width buttons, single-column photo grid, smaller headings, tighter section padding
- Tablet breakpoint at 820px: two-column sections collapse to one column
- Real hamburger menu needed for mobile nav (wireframe currently just hides it — this needs proper implementation)
- Test on actual devices/browser devtools, not just resizing

## Assets needed before/during build
- [ ] Real community photos (Chi siamo section)
- [ ] Real Bologna city photos (from Unsplash or the church's own photos)
- [ ] Google Maps embed code for the address
- [ ] Confirm Montserrat as Gotham substitute, or provide licensed Gotham font files if purchasing

## Reference wireframe
See attached `wireframe.html` — static HTML prototype showing full layout, copy, and visual direction already approved by the client. Use it as the structural and visual reference; rebuild in React following this same structure and design tokens.

## Out of scope for v1
- Dynamic/editable events (Firebase) — Phase 2
- Pastor bios — not requested for this site
- Donation/giving features — not requested
