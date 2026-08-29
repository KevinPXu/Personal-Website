# CLAUDE.md — Working agreement for this repository

## ⛔ Golden rule: do not write code unless explicitly told to

This repository is a **learning project**. The owner is using it to learn system
design, Docker, and Infrastructure-as-Code (OpenTofu). The value is in
**understanding**, not in having code generated for them.

Therefore, unless the user **explicitly and specifically instructs you to write,
edit, generate, scaffold, or refactor code in a given message**, you must NOT do
so — in any fashion. This includes, but is not limited to:

- Editing, creating, or deleting source files, config files, Dockerfiles,
  OpenTofu/Terraform files, CI workflows, or scripts.
- "Helpfully" applying a fix you just described.
- Writing code inside a plan and then applying it without a separate go-ahead.
- Generating boilerplate "to save time."

**Default mode is: explain, teach, propose, and diagram — then stop and wait.**

A request to *audit*, *review*, *explain*, *compare*, *design*, *plan*, or
*recommend* is **not** permission to write code. When in doubt, ask.

### What you MAY always do without asking
- Read files, search the codebase, and run read-only inspection commands.
- Explain concepts, trade-offs, and how things work.
- Produce written plans, roadmaps, checklists, and architecture diagrams (as
  text/markdown in your response — not as committed files, unless asked).
- Point out risks, bugs, and improvements — described in prose, not applied.

### What requires an explicit instruction first
- Any file write or edit.
- Running commands that mutate state (installs, migrations, deploys, `tofu apply`,
  `docker build/run`, git commits/pushes, package upgrades).

### How to respond when code would help
Describe *what* you would change and *why*, show a **short** illustrative snippet
if it aids understanding, and end with: "Want me to implement this?" Then wait.

---

## Project context

- **What it is:** A single-page personal/portfolio website.
- **Stack:** React 18, bootstrapped with Create React App (`react-scripts`),
  Material UI, styled-components, and Bootstrap. Global CSS in
  `src/Assets/Styles.css`.
- **Structure:** One scrolling page composed of section components —
  `LandingPage`, `About`, `Portfolio`, `Contact` — assembled in `src/App.js`.
  Project data lives in `src/data.js`. The contact form (`src/Components/Mail.js`)
  builds a `mailto:` link; there is **no backend**.
- **Hosting:** Static build deployed to **GitHub Pages** via the `gh-pages`
  package (`npm run deploy`). Custom domain configured through `CNAME`.
- **No secrets** are stored in the repo; `.env*` is git-ignored.

## Learning goals (why this repo exists)

The owner wants to use this project as a sandbox to learn, in roughly this order:
1. System design fundamentals.
2. Containerization with **Docker** (multi-stage builds, local dev vs. prod).
3. **Infrastructure as Code with OpenTofu (`tofu`)** — providers, state, modules.
4. Standing up a small **cloud backend** (e.g., a real contact-form API) and
   provisioning it declaratively.

When helping with these, favor teaching the *concepts and decisions* over
producing finished artifacts. Introduce one idea at a time.

## Conventions

- Keep explanations concrete and tied to this codebase.
- Prefer OpenTofu (`tofu`) over Terraform naming in discussion, though the HCL is
  compatible.
- Call out when a suggestion is a deprecated/unmaintained path (e.g. CRA) versus
  a current best practice.
