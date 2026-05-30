# Emily Gregg Fitness — Ocean Edition

A static-HTML prototype for Emily Gregg's personal training site. Blue/teal ocean palette with movement metaphors ("find your current", "wade in", "set the course").

## Stack

No build step. React 18 + Babel Standalone loaded from unpkg, rendered from JSX files in the browser. Design tokens in `tokens.css`, content in `components/data.js`.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```sh
npx serve .
```

## Deploy

```sh
vercel link
vercel deploy --prod
```

## Structure

- `index.html` — entry point
- `tokens.css` — design tokens + base styles
- `assets/` — icons, photos, video
- `components/` — `data.js` (content) + one `.jsx` per section
