# Multiverse Project Overview

Multiverse is a sleek, responsive, one-page gallery website template designed by [HTML5 UP](https://html5up.net). It features a fully functional lightbox and a custom, reusable "panel" system.

## Technologies

- **HTML5**: Semantic structure for the one-page layout.
- **CSS/Sass (SCSS)**: Modular styling with support for variables, mixins, and breakpoints.
- **JavaScript (jQuery)**: Core functionality for the gallery and panels.
- **Poptrox**: A jQuery plugin used for the lightbox/popup gallery.
- **Font Awesome**: Iconography support.
- **Responsive Tools**: `breakpoints.js` and `browser.js` for handling device-specific adjustments.

## Directory Structure

- `index.html`: The main entry point for the website.
- `assets/`:
    - `css/`: Contains generated and minified CSS files.
    - `js/`: Contains main logic (`main.js`) and vendor libraries (jQuery, Poptrox, etc.).
    - `sass/`: Source SCSS files organized by `base`, `components`, `layout`, and `libs`.
    - `webfonts/`: Font Awesome webfont files.
- `images/`:
    - `fulls/`: High-resolution images for the lightbox.
    - `thumbs/`: Thumbnail images for the gallery grid.

## Building and Running

### Running
Since this is a static website, you can view it by opening `index.html` directly in any modern web browser. No local server is strictly required, although using one (e.g., Live Server in VS Code) is recommended for development.

### Building CSS
The CSS is authored using Sass. To compile changes made in the `assets/sass/` directory, you can use the Sass CLI:

```bash
# Install Sass if not already installed
# npm install -g sass

# Compile SCSS to CSS
sass assets/sass/main.scss assets/css/main.css

# Watch for changes during development
sass --watch assets/sass/main.scss:assets/css/main.css
```

## Development Conventions

### Styling
- **Modular SCSS**: Add new components to `assets/sass/components/` and import them in `main.scss`.
- **Breakpoints**: Use the `@include breakpoints()` mixin for responsive styles. Breakpoints are defined in `assets/sass/main.scss` and synchronized with `assets/js/main.js`.

### Logic
- **Gallery Items**: New images should be added as `<article class="thumb">` elements within `<div id="main">`.
- **Lightbox**: The lightbox is initialized on `.thumb > a.image` elements using the Poptrox plugin in `main.js`.
- **Panels**: The "About" section uses a custom panel system. Any element with a class of `panel` can be toggled by a link whose `href` matches the panel's `id`.

### Images
- Place full-sized images in `images/fulls/` and their corresponding thumbnails in `images/thumbs/`.
- Maintain consistent naming conventions (e.g., `01.jpg`, `02.jpg`) to match the existing structure.
