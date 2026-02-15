# React + Vite + MobX Clicker Engine Template

This folder is a starter template for building UI for a [game engine](https://github.com/Miskamyasa/mobx-clicker-game-engine).

For more info on the engine, see [Quick Start](https://github.com/Miskamyasa/mobx-clicker-game-engine)

## Requirements

- Node.js 20+ (recommended)
- npm 10+ (or compatible)

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL shown by Vite (`http://localhost:5173`).

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## PR preview deployments (GitHub Actions)

This repo includes `.github/workflows/pr-preview.yml`.

- Trigger: every pull request targeting `main` (`opened`, `reopened`, `synchronize`)
- Flow: install, typecheck, lint, build, deploy
- Preview URL pattern: `https://<owner>.github.io/<repo>/pr-<PR_NUMBER>/`

To enable previews, configure GitHub Pages in the repository settings to serve from the `gh-pages` branch.

## Engine integration entry points

- Engine import and setup: `src/App.tsx`
- Starter content data: `public/settings/starter/*.json`
