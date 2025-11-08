# Design System & Figma Sync

This document explains how the Figma integration and design tokens work for Pet Choice India.

## Overview
We pull design tokens (currently colors) and component image assets from a Figma file using two Node scripts:

- `scripts/figma/fetch-tokens.mjs` – merges brand defaults with Figma color styles into CSS variables (`frontend/styles/tokens.css`) and a TS map (`frontend/utils/designTokens.ts`).
- `scripts/figma/fetch-assets.mjs` – downloads PNG renders of up to 20 component nodes into `frontend/public/assets/figma`.

## Setup
1. Create a Figma Personal Access Token in your Figma account settings.
2. Obtain the File ID from the Figma file URL (`https://www.figma.com/file/<FILE_ID>/...`).
3. Add to environment:
   - In `infra/.env.example` (and your local `.env`):
     - `FIGMA_FILE_ID=xxxxx`
     - `FIGMA_TOKEN=xxxxx`
   - In `frontend/.env.local` (copy `.env.local.example`).

## Running Sync
```bash
# From repository root (ensuring env vars are loaded)
FIGMA_TOKEN=xxx FIGMA_FILE_ID=yyy npm run figma:tokens --prefix frontend
FIGMA_TOKEN=xxx FIGMA_FILE_ID=yyy npm run figma:assets --prefix frontend
```

Or add to your shell profile for convenience.

## Tokens Usage
`globals.css` imports `tokens.css` so any CSS can use `var(--color-brand-terracotta)` etc.
React components can import the TS map from `designTokens.ts` for programmatic usage.

## Extending
- Add typography, spacing, radius, and shadow tokens by expanding the script to parse relevant nodes.
- Introduce a semantic token layer (e.g., `--color-bg-primary: var(--color-brand-white);`).
- Consider style dictionary or Token Studio export for more robust token management.

## Fallback Behavior
If Figma fetch fails, brand defaults remain in place so the app displays consistently.

## Roadmap
- [ ] Add font loading strategy and variable fonts.
- [ ] Add dark mode tokens with a `data-theme="dark"` attribute.
- [ ] Add automated GitHub Action to refresh tokens nightly.

## Troubleshooting
| Issue | Cause | Fix |
|-------|-------|-----|
| 401 Unauthorized | Invalid token | Regenerate token and update env |
| Empty assets folder | No components or permissions issue | Ensure components exist and token has file access |
| Missing colors | Styles not defined as shared color styles | Convert local fills to shared styles in Figma |

