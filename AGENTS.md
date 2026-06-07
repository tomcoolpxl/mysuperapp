# Repository Guidelines

## Project Structure & Module Organization

This repository contains a dependency-free static Four in a Row game.

- `index.html`: semantic page structure, game container, status area, controls, and script/style references.
- `styles.css`: responsive layout, board styling, player colors, focus states, and mobile adjustments.
- `script.js`: game state, rendering, move validation, turn switching, win detection, draw detection, and reset behavior.
- `REQUIREMENTS.md`: product and technical requirements for the game.
- `README.md`: project overview and local usage instructions.

Keep new static assets in an `assets/` directory if they are added later. Avoid introducing build tooling unless the app requirements justify it.

## Build, Test, and Development Commands

No install or build step is required.

- Open `index.html`: run the app directly in a browser.
- `python3 -m http.server 8000`: serve the folder locally at `http://localhost:8000`.
- `node --check script.js`: validate JavaScript syntax.

There is currently no automated test suite. If tests are added, document the command here and keep it runnable from the repository root.

## Coding Style & Naming Conventions

Use plain HTML, CSS, and JavaScript. Keep indentation at two spaces for HTML/CSS and JavaScript blocks. Use `camelCase` for JavaScript variables and functions, `UPPER_CASE` for constants, and hyphenated CSS class names such as `game-shell` and `column-button`. Prefer descriptive names over abbreviations. Keep DOM updates centralized in rendering helpers where practical.

## Testing Guidelines

Before committing gameplay changes, manually verify horizontal, vertical, and both diagonal wins; draw state; full-column rejection; reset behavior; and mobile layout. Run `node --check script.js` after JavaScript edits. If automated tests are introduced, prioritize pure tests for `findWin`, `lowestOpenRow`, and move validation.

## Commit & Pull Request Guidelines

Project history uses concise imperative commit messages, for example `Add contributor and game requirements docs` and `Initial implementation of the Four in a Row game with HTML, CSS, and JavaScript`. Continue that style. Pull requests should include a short summary, testing performed, linked issues when relevant, and screenshots or recordings for visible UI changes.

## Security & Configuration Tips

Do not commit secrets, generated caches, editor-specific settings, or machine-specific configuration. This app has no backend and should remain safe to host from static file hosting such as GitHub Pages.
