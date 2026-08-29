# Project TODO / Audit Tracker

Tracking doc for issues found in the repository audit (2026-08-29). Grouped by
theme and ordered roughly by priority. Check items off as they're done.

Legend: 🔴 high · 🟡 medium · 🟢 low/polish · ℹ️ info-only

---

## Security

- [ ] 🔴 **Kill the 72 npm advisories at the source** — 5 critical / 33 high, almost
  all transitive dev deps of the deprecated `react-scripts` (webpack, `ws`,
  `word-wrap`, `yaml`, …). They run at install/build time, not in the shipped
  bundle. **Fixed for free by the Vite migration below** — do NOT chase
  `npm audit fix --force` on CRA. _(root cause: CRA is unmaintained)_
- [ ] 🟡 **Harden external links** — `src/Components/Card.js:20` renders `href={url}`
  from `data.js` with no `rel`. Add `rel="noopener noreferrer"` (and decide on
  `target`). Low impact today since data is trusted, but fix the pattern.
- [ ] 🟢 **Add a Content-Security-Policy** — no CSP; site pulls Bootstrap (jsDelivr,
  has SRI ✅) and Google Fonts. GitHub Pages can't set headers, so use a
  `<meta http-equiv="Content-Security-Policy">` tag. Defense-in-depth.
- [ ] ℹ️ **Email is harvestable** — `kevinpxu21@gmail.com` hardcoded client-side in
  `Mail.js`. Resolved later by moving contact to a backend API (see Backend).
- [x] ✅ Contact.js external links already hardened with `rel="noopener noreferrer"`
  (commit `a2fe29f`).
- [x] ✅ No secrets committed; `.env*` git-ignored.

## Architecture / Design

- [ ] 🔴 **Migrate CRA → Vite** — highest-leverage change. Removes `react-scripts`
  (and its vuln tree), faster dev/build. See migration notes in the PR/chat.
- [ ] 🟡 **Prune unused dependencies** — `react-router-dom` (no routes; single scroll
  page) and `@testing-library/*` (no tests present).
- [ ] 🟡 **Consolidate styling** — currently 5 systems in play: inline `style`, MUI
  `sx`, styled-components, Bootstrap, and global `Styles.css`. Pick one primary
  (recommend MUI `sx` + theme) and retire the rest.
- [ ] 🟡 **Replace fragile absolute positioning** — percentage offsets like
  `top: '315%'` (`Contact.js`), `top: '130%'` (`About.js`), `bottom: '-200%'`
  (`Mail.js`) break across viewports. Move to flexbox/grid per section.
- [ ] 🟢 **Fix page shell** — `public/index.html` still has `<title>React App</title>`
  and the default CRA meta description. Update title/description (SEO/polish).
- [ ] 🟢 **Accessibility** — add `alt` text to `<img>` in `Card.js`.

## Tooling / CI

- [ ] 🟡 **Add CI/CD** — replace manual `npm run deploy` (gh-pages) with a GitHub
  Actions workflow: lint + build (+ tests) on PR, deploy on merge to `main`.
- [ ] 🟢 **Add at least a smoke test** — the testing libraries are installed but
  unused; one render test is a good starting point.

## Backend / Docker / OpenTofu (learning track)

- [ ] **Phase 0 — System design framing** — diagram target arch: static frontend
  (CDN) + tiny stateless contact-form API + email integration. No code.
- [ ] **Phase 1 — Docker fundamentals** — multi-stage build for the frontend; a
  Dockerfile for a small API service; run locally via `docker compose`.
- [ ] **Phase 2 — Pick a cloud landing zone** — start simple (Cloud Run / Fly.io),
  graduate to AWS (S3+CloudFront + Fargate/Lambda) later.
- [ ] **Phase 3 — OpenTofu (`tofu`)** — providers, remote state, plan/apply, vars,
  outputs, modules. Provision incrementally: DNS → hosting → service → secrets.
- [ ] **Phase 4 — Wire & harden** — point frontend at the API, add rate-limiting +
  CORS allow-list, move email server-side, run `tofu plan` on PRs.
