# Four in a Row

A static browser-based Four in a Row game for two local players. The app is built with plain HTML, CSS, and JavaScript and does not require installation, a backend, or a build step.

## Features

- Standard 7x6 Four in a Row board.
- Two-player local turns with red and yellow pieces.
- Column controls that drop pieces to the lowest open slot.
- Horizontal, vertical, and diagonal win detection.
- Draw detection.
- Disabled full columns.
- Winning-cell highlight.
- New game reset.
- Responsive layout for desktop and mobile screens.

## Project Structure

```text
.
├── index.html       # App markup and entry point
├── styles.css       # Responsive layout and visual styling
├── script.js        # Game state, rendering, and rules
├── REQUIREMENTS.md  # Product and technical requirements
├── AGENTS.md        # Contributor guidelines
└── LICENSE          # MIT license
```

## Run Locally

Open `index.html` in a browser.

For a local server, run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Development

There are no dependencies or build commands. Edit the static files directly.

Check JavaScript syntax with:

```bash
node --check script.js
```

Manual gameplay checks should cover horizontal, vertical, and diagonal wins; draw state; full-column behavior; reset behavior; and mobile layout.

## License

MIT. See `LICENSE`.
