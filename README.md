# Forge — Code Review & Fast-Path CI

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/harshchhabra2612-glitch/forge-landing-page/pulls)

**An ultra-responsive, dark-mode landing experience built with precision hairline aesthetics, bespoke scroll physics, and zero external CSS runtime overhead.**

[Live Demo](#getting-started) • [Key Features](#key-features) • [Architecture](#architecture--design-philosophy) • [Getting Started](#getting-started) • [Project Structure](#project-structure)

</div>

---

## Overview

**Forge** is an engineer-first developer platform combining instant code reviews, speculative CI test execution, and accelerated pull request merging. 

This repository delivers the official landing experience: a performant single-page application built entirely in **React 18** and **TypeScript** via **Vite**. Engineered with meticulous attention to detail, every animation, scroll trigger, terminal emulation, and code-diff interaction is built using modern browser APIs (`IntersectionObserver`, `requestAnimationFrame`, CSS Custom Properties) without relying on heavy third-party animation runtimes.

---

## Key Features

### 💻 Interactive Terminal & Hero Emulation
- **Dynamic Typing Simulation**: Realistic, non-blocking asynchronous terminal loop showcasing live CLI commands (`forge pr view`, speculative CI orchestration).
- **Interactive Command Clipboard**: One-click quick copy with visual confirmation feedback.

### 📜 Scroll-Scrubbed PR Timeline
- **Draw-on-Scroll SVG Line**: Progress tracker tied directly to scroll offset, visualizing steps from pull request initiation to green build confirmation.
- **Milestone Indicators**: Staggered state updates as elements breach the viewport threshold.

### 🔍 Interactive Annotated Diff
- **Side-by-Side Review Experience**: Code hunk rendering with syntax highlights and line numbering.
- **Dynamic Review Comments**: Inline threaded commentary that animates into view, complete with commit-ready code suggestions.

### ⏱️ 90-Second Merge Pipeline (Sticky Scrubbing)
- **Sticky Viewport Pinning**: Smoothly pinned layout with `requestAnimationFrame`-throttled scroll progress calculation.
- **Parallel Gantt Visualization**: Real-time progress bar demonstrating concurrent lint, type-check, unit test, and edge deployment pipelines.

### 🍱 Micro-Visual Bento Grid
- **Live Stack States**: Interactive micro-visuals showcasing branch stacking, flake suppression, and automatic rebase resolution.
- **Dynamic Hover Depth**: Fluid elevation and subtle accent shifts.

### 💡 Spotlight Hairline Integrations Grid
- **Cursor-Follow Radial Illumination**: Dynamic mouse tracking calculating Euclidean distance across grid boundaries for an illuminated hairline border effect.
- **Tooling Support**: Native support indicators for GitHub, GitLab, Bitbucket, Slack, Linear, Datadog, and AWS.

### 🧮 Interactive Per-Seat Pricing Engine
- **Live Slider Computation**: Dynamic volume discounts, annual billing toggles, and instant cost calculations.
- **Tier Breakdown**: Detailed capability breakdown across Developer, Team, and Enterprise plans.

---

## Architecture & Design Philosophy

| Principle | Implementation |
| :--- | :--- |
| **Self-Contained Styling** | Encapsulated CSS architecture with strict namespacing (`fd-frg-*`), zero Tailwind or UI library runtime footprint, and zero style collision. |
| **Bespoke Motion Physics** | Custom bezier curves (`cubic-bezier(0.22, 1, 0.36, 1)` and spring physics) engineered via vanilla CSS variables for fluid 60fps interaction. |
| **Performance-First** | `rAF`-throttled scroll listeners with dual-layered `IntersectionObserver` gating to ensure zero idle CPU overhead. |
| **Universal Accessibility** | Semantic HTML5 landmarks, native button/slider primitives, full keyboard navigation (`:focus-visible`), and automatic `prefers-reduced-motion` & `prefers-contrast` fallbacks. |
| **SSR / Hydration Safe** | Zero unchecked `window` or `document` calls during initial render, ensuring seamless compatibility with Next.js, Remix, and static site generators. |

---

## Project Structure

```text
forge-landing-page/
├── forge-devtool.tsx       # Complete self-contained landing page component & CSS
├── main.tsx                # Client application bootstrap & React 18 root mount
├── index.html              # HTML entrypoint with Geist typography prefetching
├── vite.config.ts          # Vite configuration with React SWC/Babel plugin
├── tsconfig.json           # Strict TypeScript configuration
├── package.json            # Project dependencies & build scripts
└── README.md               # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js 18.0.0** or higher installed:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/harshchhabra2612-glitch/forge-landing-page.git
cd forge-landing-page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Launch Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000` (or the next available port).

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript type checking (`tsc`) and bundles optimized production assets into `dist/`. |
| `npm run preview` | Spins up a local static server to preview production build outputs. |

---

## Tech Stack

- **Core**: [React 18.3](https://react.dev/)
- **Language**: [TypeScript 5.6](https://www.typescriptlang.org/)
- **Bundler**: [Vite 5.4](https://vitejs.dev/)
- **Typography**: [Geist & Geist Mono](https://vercel.com/font)
- **Deployment**: Compatible with Vercel, Netlify, Cloudflare Pages, or AWS S3/CloudFront.

---

## Browser Support

- Chrome / Chromium (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari / WebKit (iOS 15+, macOS Monterey+)
- Edge (Latest 2 versions)

---

## Contributing

Contributions, feature requests, and bug reports are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
