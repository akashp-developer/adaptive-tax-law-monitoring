# Adaptive Tax Law Monitoring

An interactive dashboard for exploring a compliance review workflow. Search fictional updates, filter by priority and review status, and mark alerts as reviewed. Review state resets on reload. The demo has no live tax feed, authentication, or external AI service.

## Development

Use Node.js 24.

```sh
npm ci
npm run dev
npm run build
```

The production build is a static Vite site in `dist/`. On Vercel, use the Vite framework preset.
