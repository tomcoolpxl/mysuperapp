# Four in a Row Static Web App Requirements

## Overview

Build a static browser-based Four in a Row game. The app should run locally by opening `index.html` or by serving the folder with any static file server. It should not require a backend, database, account system, or build pipeline for the first version.

## Goals

- Provide a complete two-player local game of Four in a Row.
- Use a simple, responsive interface that works on desktop and mobile browsers.
- Keep implementation lightweight and understandable with plain HTML, CSS, and JavaScript unless a future decision introduces a framework.
- Make the game state clear at all times: current player, valid moves, win/draw result, and reset control.

## Core Gameplay

- Render a standard 7-column by 6-row board.
- Allow two local players to alternate turns.
- Let players choose a column; the piece must fall to the lowest available row in that column.
- Reject moves in full columns.
- Detect wins with four matching pieces horizontally, vertically, and diagonally.
- Detect a draw when the board is full and no player has won.
- Stop accepting moves after a win or draw until the game is reset.
- Provide a reset/new game action.

## User Interface Requirements

- Display the board as a clear grid with circular slots.
- Use distinct player colors, for example red and yellow.
- Show the active player before each move.
- Show a visible result message after a win or draw.
- Provide hover, focus, or tap feedback for playable columns.
- Use accessible labels for controls and status messages.
- Ensure text and controls remain readable on small screens.

## Technical Requirements

- Initial file structure:
  - `index.html`: page markup and app entry point.
  - `styles.css`: layout, board, and responsive styling.
  - `script.js`: game state, move handling, and win detection.
- Avoid external runtime dependencies for version 1.
- Keep all logic client-side.
- Use semantic HTML where practical.
- Store game state in JavaScript memory; persistence is not required.

## Testing Requirements

- Manually verify:
  - Horizontal, vertical, and both diagonal wins.
  - Draw state.
  - Full-column rejection.
  - Reset behavior.
  - Mobile and desktop layout.
- If automated tests are added, cover win detection and move validation first.

## Out of Scope for Version 1

- Online multiplayer.
- User accounts.
- AI opponent.
- Score history across browser sessions.
- Animations beyond simple visual feedback.
- Audio effects.

## Acceptance Criteria

- A user can start a game immediately in the browser.
- Two players can complete a legal Four in a Row match.
- The app correctly announces wins and draws.
- The board can be reset without refreshing the page.
- The app remains usable at common mobile and desktop viewport sizes.
