# Four in a Row Static Web App Requirements

## Overview

This project is a static browser-based Four in a Row game. It runs with plain HTML, CSS, and JavaScript, either by opening `index.html` directly or by serving the repository with a static file server. It has no backend, database, account system, dependency install, or build pipeline.

## Implemented Version 1 Scope

- Local two-player gameplay on one device.
- Standard 7-column by 6-row board.
- Red and yellow player pieces.
- Column controls for dropping pieces.
- Turn status and result messaging.
- Win detection for horizontal, vertical, and diagonal lines.
- Draw detection when the board is full.
- Full-column rejection by disabling unavailable column controls.
- New game reset without refreshing the page.
- Responsive layout for desktop and mobile browsers.

## User Interface Requirements

- Display the game as the first screen with no landing page.
- Show the current player before each move.
- Use clear, distinct piece colors.
- Show a result message after a win or draw.
- Highlight winning cells after a win.
- Provide visible hover and keyboard focus states on controls.
- Keep board, text, and buttons readable on small screens.
- Use accessible labels for the board, cells, column controls, and live status.

## Technical Requirements

- `index.html` contains the document structure and app entry point.
- `styles.css` contains all layout, board, responsive, and visual styling.
- `script.js` contains all client-side game logic.
- Game state is stored in JavaScript memory only.
- Runtime dependencies are not allowed for version 1.
- The app must remain usable from static hosting.

## Testing Requirements

Manual validation is required before release:

- Horizontal win.
- Vertical win.
- Diagonal down-right win.
- Diagonal up-right win.
- Draw state.
- Full-column disabled state.
- Reset after active game, win, and draw.
- Desktop and mobile viewport checks.

Run `node --check script.js` after JavaScript edits.

## Out of Scope

- Online multiplayer.
- AI opponent.
- User accounts.
- Persistent score history.
- Audio effects.
- Backend services.
- Build tooling.

## Acceptance Criteria

- A user can start playing immediately in the browser.
- Two local players can complete a legal match.
- The app correctly announces wins and draws.
- The winning line is visually marked.
- The board can be reset from the New game button.
- The app works at common mobile and desktop viewport sizes.
