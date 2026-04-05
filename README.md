# Wonders of the World

This is a microsite featuring reimaginings of the Wonders of the World.

It is based on the **Multiverse** template from HTML5 UP, converted into an [Astro](https://astro.build) project. It retains the slick, one-page gallery design and custom panel system while leveraging Astro's component-based architecture and optimized build pipeline.

## Features

- **Lightweight Logic**: jQuery has been removed and replaced with [Alpine.js](https://alpinejs.dev) for state management and interactivity.
- **Component-Based**: Modularized into `Header`, `Footer`, `Gallery`, and `GalleryItem` Astro components.
- **Content Collections**: Gallery items are driven by an Astro [Content Collection](https://docs.astro.build/en/guides/content-collections/) (`src/content/pages/`). Each page is a Markdown file with frontmatter for `title`, `description`, `image`, and an optional `dataPosition`. The collection is defined in `src/content.config.ts` using a glob loader and Astro's `image()` schema helper for validated, optimized image references.
- **Individual Pages**: Each gallery item has a corresponding page at `/pages/[id]` (e.g. `/pages/01`) generated from the content collection via `src/pages/pages/[id].astro`.
- **Astro Image Optimization**: Images are processed using Astro's built-in optimization (via `sharp`). This includes automatic format conversion (WebP), resizing, and optimized delivery for both thumbnails and high-resolution views.
- **Optimized Sass**: Modern SCSS structure using component-scoped styles within `.astro` files. Legacy manual prefixing has been removed in favor of standard CSS and modern build tools.
- **Modern Iconography**: Replaced self-hosted, monolithic Font Awesome with [astro-icon](https://github.com/natemoo-re/astro-icon). It uses the latest Font Awesome 6 icon sets, delivering only the necessary SVGs for a smaller, faster build.
- **Unified Design System**: A centralized `libs` module provides shared variables, functions, and mixins across all components via a clean `@use '../styles/libs' as *;` interface.
- **Lightbox**: Fully functional PhotoSwipe lightbox integrated into the `Gallery` component.
- **Responsive**: Mobile-first design with synchronized breakpoints between CSS and JS.

## Design Inspiration

**Original Design by [html5up.net](https://html5up.net) | @ajlkn**
**Astro Migration by Gemini CLI**

*Free for personal and commercial use under the CCA 3.0 license ([html5up.net/license](https://html5up.net/license))*

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- `pnpm` (preferred) or `npm`

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm run dev
```

### Build

```bash
# Build for production
pnpm run build
```

## Credits

### Original Template
- **Design & Original Code**: AJ at [HTML5 UP](https://html5up.net)
- **Icons**: [Font Awesome](https://fontawesome.io)
- **Scripts**: [jQuery](https://jquery.com), [Poptrox](https://github.com/ajlkn/jquery.poptrox), and [Responsive Tools](https://github.com/ajlkn/responsive-tools)

### Astro Migration
- **Conversion**: Gemini CLI
