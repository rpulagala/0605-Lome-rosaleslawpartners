# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for **Rosales Law Partners LLP** — a San Francisco law firm serving three distinct audiences: government agencies (primary), small businesses (secondary), and small business consortiums/advocacy groups (tertiary). Core differentiator: Managing Partner Mara E. Rosales was General Counsel of SFO for 10+ years.

- **Live deployment:** GitHub Pages (`https://rpulagala.github.io/0605-Lome-rosaleslawpartners/`)
- **Target domain:** `rosaleslawpartners.com` (DNS not yet pointed)
- **GitHub repo:** `https://github.com/rpulagala/0605-Lome-rosaleslawpartners.git`

## Development

No build tools, bundlers, or package managers. Open any `.html` file directly in a browser, or serve locally:

```
# Python (any directory)
python -m http.server 8080

# Node
npx serve .
```

## Architecture

Pure vanilla HTML/CSS/JS — no frameworks. `.nojekyll` at root enables GitHub Pages static serving.

```
index.html                       Homepage (3-audience split + audience popup — 3 choices)
whyus.html / our-team.html       Firm credibility pages (whyus has 120+ stat, awards placeholders)
areas-of-practice.html           Services (3 core + 3 specialized + 4 general pending confirmation)
for-agencies.html                Dedicated page for government agency audience
for-consortiums.html             Dedicated page for consortiums & advocacy groups (added 2026-06-07)
news.html                        News index
news/*.html                      Three full articles (drafted, pending client review)
faq.html / resources.html        Added pages (not on original site)
contact.html                     Contact form (submission not yet wired)
css/styles.css                   Single shared stylesheet
js/main.js                       Mobile nav, FAQ accordion, audience popup, contact form stub
images/                          4 locally-hosted images (Unsplash license, from original site)
```

Every page shares the same header/footer HTML. No templating — nav or footer changes must be applied to every `.html` file manually.

## CSS conventions

All design tokens are CSS custom properties at the top of `css/styles.css`:

| Variable | Value | Use |
|---|---|---|
| `--navy` / `--navy-dark` / `--navy-light` | `#1c3557` / `#122540` / `#2e5fa3` | Primary brand, dark headers, link color |
| `--gold` / `--gold-light` | `#c9a84c` / `#f5e9c8` | Accent, CTA highlights |
| `--light-bg` / `--mid-bg` | `#f7f9fc` / `#edf1f7` | Alternating section backgrounds |
| `--ph-bg` / `--ph-border` / `--ph-text` | `#fff8e1` / `#f59e0b` / `#7c5c00` | Placeholder card styling |

Layout: `.container` (max 1140px), `.grid-2/3/4`, `.section` / `.section-light` / `.section-mid` / `.section-navy`. Responsive breakpoints are in `styles.css` — check before adding new layout rules.

## Placeholders

Content awaiting client input uses this pattern:

```html
<div class="placeholder-card">
  <div class="placeholder-label">✏ Client Input Needed</div>
  <p>Description of what goes here.</p>
</div>
```

Inline `<!-- PLACEHOLDER: ... -->` comments also mark pending spots. Full inventory is in `PROJECT_CONTEXT.md`.

## JS responsibilities (`js/main.js`)

- Mobile hamburger nav toggle (`.hamburger` → `nav ul.open`)
- Active nav link highlighting based on `window.location.href`
- FAQ accordion (`.faq-item` / `.faq-question` / `.open` class)
- Audience popup on homepage — fires once per session after user scrolls 65% past hero; controlled by `#audiencePopup`, `#audienceOverlay`, `sessionStorage('audienceSeen')`; has 3 choices (agencies, small business, consortiums)
- Contact form stub — prevents default and shows success state; **not wired to any backend**

## Pending integrations

- **Contact form:** Wire `#contactForm` to Formspree or EmailJS
- **Calendly:** Embed code goes in `contact.html` (client to create account)
- **Social links:** Footer and `contact.html` have placeholder URLs
- **Custom domain:** Add `CNAME` file with `rosaleslawpartners.com` when DNS is ready
