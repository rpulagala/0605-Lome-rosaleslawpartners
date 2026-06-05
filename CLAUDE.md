# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for **Rosales Law Partners LLP** — a San Francisco law firm specializing in small business legal services, government contracts, and DBE/SBE/LBE certifications.

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

Pure vanilla HTML/CSS/JS — no frameworks.

```
index.html                       Homepage
whyus.html / our-team.html       Firm credibility pages
areas-of-practice.html           Services (7 practice areas)
news.html                        News index page
news/*.html                      Three full articles (drafted, pending client review)
faq.html / resources.html        New pages added to original site
contact.html                     Contact form (submission not yet wired)
css/styles.css                   Single shared stylesheet
js/main.js                       Mobile nav toggle, FAQ accordion, contact form stub
images/                          4 locally-hosted images (Unsplash license)
```

Every page shares the same header/footer HTML pattern. There is no templating — changes to nav or footer must be applied to every `.html` file manually.

## CSS conventions

All design tokens are CSS custom properties defined at the top of `css/styles.css`:

| Variable | Value | Use |
|---|---|---|
| `--navy` | `#1c3557` | Primary brand color, headings |
| `--gold` | `#c9a84c` | Accent, CTA highlights |
| `--ph-bg / --ph-border` | `#fff8e1 / #f59e0b` | Placeholder card styling |

Layout uses `.container` (max 1140px), `.grid-2/3/4`, and `.section` / `.section-light` / `.section-navy` classes. Responsive breakpoints are in `styles.css` — check before adding new layout.

## Placeholders

Content that awaits client input uses this pattern:

```html
<div class="placeholder-card">
  <div class="placeholder-label">✏ Client Input Needed</div>
  <p>Description of what goes here.</p>
</div>
```

Inline comments `<!-- PLACEHOLDER: ... -->` also mark pending spots throughout the HTML files. See `PROJECT_CONTEXT.md` for the full placeholder inventory.

## JS responsibilities (`js/main.js`)

- Mobile hamburger nav toggle (`.hamburger` → `nav ul.open`)
- Active nav link highlighting based on `window.location.href`
- FAQ accordion (`.faq-item` / `.faq-question` / `.open` class)
- Contact form stub — currently prevents default and shows success state; **not wired to any backend**

## Pending integrations

- **Contact form:** Wire `#contactForm` to Formspree or EmailJS
- **Calendly:** Embed code goes in `contact.html` (client to create account)
- **Social links:** Footer and `contact.html` have placeholder URLs
- **Custom domain:** Add `CNAME` file with `rosaleslawpartners.com` when DNS is ready
