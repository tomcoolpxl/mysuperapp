# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a minimal scaffold with only `LICENSE` at the root. Keep contributor-facing documentation, including this file, in the repository root. When source code is added, prefer a conventional layout such as `src/` for application code, `tests/` for automated tests, and `assets/` or `public/` for static files. Keep test fixtures near the tests that use them unless they are shared broadly.

## Build, Test, and Development Commands

No build system or package manager configuration is present yet. Add commands here when tooling is introduced, and keep them runnable from the repository root. Recommended examples:

- `npm install`: install JavaScript dependencies when a `package.json` exists.
- `npm run dev`: start a local development server.
- `npm test`: run the full automated test suite.
- `npm run lint`: check formatting and code quality.

If another stack is chosen, use equivalent commands such as `make test`, `pytest`, `cargo test`, or `go test ./...`.

## Coding Style & Naming Conventions

Match the conventions of the language and framework introduced into the repository. Use consistent indentation across each file type, descriptive names, and small modules with clear responsibilities. Prefer lower-case, hyphenated names for documentation files when adding new guides, for example `deployment-notes.md`. For code, follow the ecosystem norm, such as `camelCase` for JavaScript variables, `PascalCase` for React components, or `snake_case` for Python functions.

## Testing Guidelines

Add tests alongside new functionality. Use a dedicated `tests/` directory for integration or end-to-end coverage, and colocate small unit tests when that is idiomatic for the chosen framework. Name test files predictably, such as `*.test.js`, `*_test.py`, or `*_test.go`. Every behavioral change should include either a test or a clear explanation in the pull request for why manual validation is sufficient.

## Commit & Pull Request Guidelines

The current history uses a short imperative commit message: `Add MIT License to the project`. Continue using concise, imperative subjects, for example `Add user settings model` or `Fix login validation`. Pull requests should include a short summary, testing performed, linked issues when applicable, and screenshots or recordings for user-facing UI changes.

## Security & Configuration Tips

Do not commit secrets, API keys, local credentials, generated dependency caches, or machine-specific configuration. If environment variables become necessary, document required keys in a checked-in example file such as `.env.example` and keep real values local.
