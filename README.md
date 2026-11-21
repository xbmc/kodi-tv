# Kodi Website

This is the repo for the kodi.tv website, built with [Astro](https://astro.build/).

## Getting Started

```bash
pnpm install

# Run the development server
pnpm dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser to see the site.

## Scripts

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start the development server         |
| `pnpm build`      | Build the production site to `dist/` |
| `pnpm preview`    | Preview the production build locally |
| `pnpm check:lint` | Check for lint errors                |
| `pnpm fix:lint`   | Auto-fix lint errors                 |
| `pnpm test`       | Run tests                            |

## Issues

If you are having issues with the site, please submit a GitHub issue.

## Content

For team members who need to do content or programmatic maintenance, please see the wiki for instructions and documentation.

## Internationalization

The site has locale-aware routing. English is the default at `/`; Swedish is served
under `/sv/`. The middleware strips the locale prefix before resolving the existing
Astro route, while `Astro.locals.locale` preserves the chosen locale for layouts and
components.

Use `localizePath()` for every internal link and `getMessages()` for shared UI text.
Add a locale to `src/i18n/index.ts` before adding translated content. Pages should
move prose into locale-specific content files incrementally; do not translate URLs
or external links.
