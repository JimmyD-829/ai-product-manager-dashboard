# V9 Learning Engine Release Notes

## Release Goal

V9 turns the existing V8 dashboard into an AI product manager training system without replacing the original content. The upgrade keeps the previous learning modules and adds an evidence-based layer on top.

## Added

- `AI_PM_OS_Dashboard_V9.html`
  - Preserves the original V8 dashboard layout, tabs, content sections, and module scripts.
  - Adds a V9 Learning Engine panel to the existing home page.
  - Adds target role, weekly theme, evidence score, and daily missions.
  - Stores mission artifacts under `v9_missions` and `v9_artifacts`.
  - Adds a product teardown report generator using the existing product database when available.
  - Adds an AI PM workflow template output.
  - Stores V9 portfolio evidence under `v9_portfolio`.
  - Adds the seven-dimension AI PM skill model.
- `AI_PM_OS_Dashboard_V8.html`
  - Preserved copy of the previous dashboard.
- `v9-smoke.test.mjs`
  - Static smoke test for V9 page presence, redirect, storage prefix, sections, workflow functions, and ability model labels.

## Changed

- `index.html` now redirects to `AI_PM_OS_Dashboard_V9.html`.
- `README.md` now documents V9 links, local usage, architecture, and version preservation.

## Verification

Run:

```bash
node v9-smoke.test.mjs
```

Expected:

```text
V9 smoke test passed
```

## Publish Notes

The repo must be pushed to `main` for GitHub Pages to publish the new root and V9 direct links.
