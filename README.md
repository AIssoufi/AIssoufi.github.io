# AIssoufi.github.io

Redirects the former GitHub Pages address of ADAM Issoufi's portfolio, `https://aissoufi.github.io`, to its new home: **[https://issoufi.fr](https://issoufi.fr/)**.

The portfolio's source code lives in [AIssoufi/issoufi.fr](https://github.com/AIssoufi/issoufi.fr).

## How it works

- `index.html` and `404.html` are the same page. GitHub Pages serves `404.html` for any path that matches no file, so every old URL is handled.
- The page sends the visitor to `https://issoufi.fr` with the same path, query and hash (`/projects` → `https://issoufi.fr/projects`), using `location.replace` so the old URL does not stay in the browser history.
- Without JavaScript, a `meta refresh` falls back to the home page.
- `noindex` and a canonical link to `https://issoufi.fr/` tell search engines to index the new site instead.
- `.nojekyll` makes GitHub Pages serve the files as they are.

Other repositories published as project sites, such as `https://aissoufi.github.io/chess/`, keep working: GitHub Pages serves them before this site's `404.html`.

## Deployment

GitHub Pages deploys the `main` branch from the repository root. There is no build step.
