# Rosales Law Partners — Website Rebuild Project Context

## Project Overview
Rebuilding the website for **Rosales Law Partners LLP** (`rosaleslawpartners.com`) — a San Francisco law firm specializing in small business legal services, government contracts, and DBE/SBE/LBE certification programs. Founded 2009 by Managing Partner Mara E. Rosales.

**GitHub Repo:** https://github.com/rpulagala/0605-Lome-rosaleslawpartners.git  
**Live Deployment:** GitHub Pages — enable at repo Settings → Pages → main branch / root  
**Original Site:** https://www.rosaleslawpartners.com/

---

## What Was Built

### File Structure
```
index.html                          Homepage
whyus.html                          Why Us
our-team.html                       Our Team (4 attorneys)
areas-of-practice.html              Services (3 existing + 4 new)
news.html                           News index
contact.html                        Contact page
faq.html                            NEW — FAQ page
resources.html                      NEW — Resource Hub
css/styles.css                      Shared stylesheet (responsive)
js/main.js                          Mobile nav, FAQ accordion, form handler
news/dbe-certification-guide.html   NEW — Full article
news/government-contracts-mistakes.html  NEW — Full article
news/lbe-guide.html                 NEW — Full article
images/hero-sf.jpg                  SF skyline (from original site, Unsplash license)
images/airport.jpg                  Airport photo (from original site)
images/cityhall.jpg                 City Hall photo (from original site)
images/diversity.jpg                Diversity photo (from original site)
.nojekyll                           Enables GitHub Pages static serving
```

### Design Decisions
- **Color scheme:** Navy `#1c3557` primary, Gold `#c9a84c` accent, white/light gray backgrounds
- **Fonts:** Inter (body) + Merriweather (headings) via Google Fonts
- **Placeholders:** Amber/yellow dashed boxes labeled "✏ CLIENT INPUT NEEDED" — impossible to miss
- **Images:** All 4 downloaded locally from original Squarespace site (Unsplash-licensed, free to use)
- **Hero:** SF skyline photo with navy overlay for text readability
- **No JS frameworks** — pure vanilla JS, fast-loading

---

## Placeholders — Pending Client Input

| Item | Location | Notes |
|---|---|---|
| Testimonials (3) | index.html, whyus.html | Need real client quotes — name, business, 2–3 sentences |
| Case Highlights (3) | index.html | Need specific outcomes with numbers/dollar amounts |
| Bar Admissions | our-team.html (all 4 attorneys) | Which state bars each attorney is admitted to |
| Languages Spoken | our-team.html (all 4 attorneys) | Per attorney |
| Direct emails | our-team.html (Sanford, Mohit, Culling) | Mara's is known: mara@rosaleslawpartners.com |
| Office Hours | contact.html, index.html footer | Official business hours |
| Calendly embed | contact.html | Client creates Calendly account, paste embed code |
| Pricing / fee policy | faq.html | What to disclose about fees or free consult |
| Languages FAQ answer | faq.html | Depends on attorney languages confirmed above |
| Form submission wiring | contact.html | Connect to Formspree, EmailJS, or backend API |
| Additional practice areas confirmation | areas-of-practice.html | Confirm Business Formation, Contract Review, Employment Law, General Counsel are offered |
| Blog article approval | news/ folder | 3 articles drafted — client must review before publishing |
| Social media links | contact.html, footer | LinkedIn, Twitter/X, Facebook profile URLs |
| Additional notable clients | whyus.html | Any beyond LA Metro, Oakland, Oregon, Mission Neighborhood Center |
| Logo / branding direction | All pages | Keep text logo or create a visual mark? |
| Photography | our-team.html | Replace initials placeholders with real attorney headshots |
| Hosting & domain | Deployment | Who manages rosaleslawpartners.com DNS — needed to go live on custom domain |
| Additional resources | resources.html | Any industry-specific orgs or programs to add |

---

## Firm Information (From Original Site)

### Contact
- **Phone:** (415) 986-4760
- **Email:** mara@rosaleslawpartners.com
- **Address:** 4104 24th Street #1514, San Francisco, CA 94114

### Certifications
- DBE (Federal Disadvantaged Business Enterprise)
- SBE (California Small Business Enterprise)
- LBE (San Francisco Local Business Enterprise)
- M/WBE (Minority/Woman Business Enterprise)

### Attorneys
| Name | Title | Education | Background |
|---|---|---|---|
| Mara E. Rosales | Managing Partner | J.D. UC Hastings 1982; B.A. SFSU 1977 | SFO General Counsel 10+ yrs; Deputy City Attorney SF |
| Robert Sanford | Of Counsel | J.D. UC Berkeley 1987; B.A. Colgate 1982 | 30+ yrs transactional & litigation |
| Ariana Mohit | Of Counsel | J.D. UCLA 2000; B.A. UC Berkeley 1994 | 20+ yrs complex litigation & class actions |
| Greg Culling | Associate | J.D. Univ. of Baltimore 2010; B.A. UCSD 2004 | Contracts, labor, corporate governance |

### Notable Clients
LA Metro, City of Oakland, State of Oregon, Mission Neighborhood Center Inc.

### Core Practice Areas (Existing)
1. Airports, Transit & Transportation Facilities Development
2. Public Law, Governmental Contracts & Procurement
3. Diversity, Equity & Inclusion Policy (DBE, ACDBE, SBE, LBE)

### New Practice Areas (Confirm with Client)
4. Business Formation & Corporate Governance
5. Contract Review & Drafting
6. Employment Law for Small Businesses
7. General Counsel Services

---

## Deployment

### GitHub (Done)
- Repo: https://github.com/rpulagala/0605-Lome-rosaleslawpartners.git
- Branch: `main`
- Commit: `e08cfe8` — Initial build

### GitHub Pages (Ready to Enable)
1. Go to repo → **Settings** → **Pages**
2. Source: **Deploy from branch** → `main` / `/ (root)` → Save
3. Live URL will be: `https://rpulagala.github.io/0605-Lome-rosaleslawpartners/`

### Custom Domain (When Ready)
- Client needs to point `rosaleslawpartners.com` DNS to GitHub Pages
- Add `CNAME` file to repo with domain name
- Configure in repo Settings → Pages → Custom domain

### Note on Streamlit
This is a static HTML site — Streamlit is not applicable. GitHub Pages is the correct free hosting platform for this project.

---

## Recommendations Documents
- `recommendations.doc` — Full website improvement plan sent to client
- `What can be build now.doc` — Build scope document (80% build-now / 20% pending client)

---

## Next Steps
1. **Client review** — Share the GitHub Pages preview URL for client feedback
2. **Collect placeholders** — Send client the placeholder list above
3. **Wire contact form** — Set up Formspree (free) or EmailJS once client approves
4. **Attorney headshots** — Replace initials on Our Team page with real photos
5. **Calendly setup** — Client creates account; embed code goes in contact.html
6. **Blog approval** — Client reviews 3 drafted articles before publishing
7. **Custom domain** — Point DNS to GitHub Pages when ready to go live
8. **Google Business Profile** — Register firm to improve local search visibility
