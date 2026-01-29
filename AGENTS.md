# Repository Guidelines

## Project Structure & Module Organization
- Jekyll site. Key dirs: `/_pages` (site pages), `/_layouts` and `/_includes` (templates/partials), `/_sass` (styles), `/_news` (announcements), `/_bibliography` and `_includes/bibfiles/<year>/` (publications), `projects/` and `blog/` (static pages), `assets/` (css, js, images, papers, webfonts), `bin/` (scripts).
- Content conventions: news files in `_news` named `YYYY_topic.md` (e.g., `2025_cvpr.md`); publication entries as HTML in `_includes/bibfiles/<year>/`.
- Configuration: `_config.yml`. Custom domain: `CNAME`. Do not edit `_site/` (build output).

## Build, Test, and Development Commands
- `bundle install` — install Ruby gems from `Gemfile`.
- `bundle exec jekyll serve` or `make preview` — run local dev server at `http://localhost:4000` with live rebuild.
- `bundle exec jekyll build` or `bin/cibuild` — build site into `_site/` and catch build errors.
- `make deploy` or `bin/deploy` — build and push the generated site to the deploy branch. Requires a clean git state and will rewrite the deploy branch history.

## Coding Style & Naming Conventions
- Markdown/HTML: 2-space indentation; use semantic HTML; keep lines ~100 chars. Place pages in `_pages/*.md`.
- SCSS: prefer variables/mixins from `_sass/_variables.scss`; one component per partial when possible.
- JS: keep lightweight, ES5/ES6 without transpile; place in `assets/js/`.
- Assets: images under `assets/img/` or `assets/spotlights/`; papers under `assets/papers/Name_ConfYY.pdf`.

## Testing Guidelines
- No unit tests. Validate with `bundle exec jekyll build` (no errors/warnings).
- Manually verify key pages and links via `jekyll serve`. For news/publications, confirm formatting and links render correctly.

## Commit & Pull Request Guidelines
- Commits: imperative mood, concise context-first. Examples: `news: add 2025 CVPR post`, `styles: tweak header spacing`, `build: bump github-pages`.
- PRs: include summary, rationale, affected pages/sections, screenshots for visual changes, and confirm “Built locally without errors”. Link related issues if any.

## Security & Configuration Tips
- Keep `CNAME` intact unless the domain changes. Edit `_config.yml` cautiously (e.g., `news_limit`).
- Do not commit `_site/`; deployments are handled by `make all`/`bin/deploy`.
