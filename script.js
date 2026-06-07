const ROWS = 6;
const COLUMNS = 7;
const PLAYERS = [
  { id: 1, name: "Red", className: "red" },
  { id: 2, name: "Yellow", className: "yellow" },
];

const boardElement = document.querySelector("#board");
const controlsElement = document.querySelector("#columnControls");
const statusText = document.querySelector("#statusText");
const turnChip = document.querySelector("#turnChip");
const resetButton = document.querySelector("#resetButton");

let board;
let currentPlayerIndex;
let gameOver;
let winningCells;

function createBoard() {
  return Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0));
}

function startGame() {
  board = createBoard();
  currentPlayerIndex = 0;
  gameOver = false;
  winningCells = [];
  render();
  setStatus(`${currentPlayer().name} starts. Choose a column.`);
}

function currentPlayer() {
  return PLAYERS[currentPlayerIndex];
}

function switchPlayer() {
  currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
}

function setStatus(message) {
  statusText.textContent = message;
  turnChip.className = `player-chip ${currentPlayer().className}`;
}

function render() {
  boardElement.innerHTML = "";
  controlsElement.innerHTML = "";

  for (let column = 0; column < COLUMNS; column += 1) {
    const button = document.createElement("button");
    button.className = "column-button";
    button.type = "button";
    button.textContent = column + 1;
    button.disabled = gameOver || isColumnFull(column);
    button.setAttribute("aria-label", `Drop piece in column ${column + 1}`);
    button.addEventListener("click", () => playMove(column));
    controlsElement.append(button);
  }

  for (let row = 0; row < ROWS; row += 1) {
    for (let column = 0; column < COLUMNS; column += 1) {
      const playerId = board[row][column];
      const cell = document.createElement("div");
      const player = PLAYERS.find((item) => item.id === playerId);
      const isWinningCell = winningCells.some(([winRow, winColumn]) => winRow === row && winColumn === column);

      cell.className = `cell${player ? ` ${player.className}` : ""}${isWinningCell ? " win" : ""}`;
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", describeCell(row, column, player));

      const piece = document.createElement("span");
      piece.className = "piece";
      cell.append(piece);
      boardElement.append(cell);
    }
  }
}

function describeCell(row, column, player) {
  const location = `row ${row + 1}, column ${column + 1}`;
  return player ? `${player.name} piece at ${location}` : `Empty slot at ${location}`;
}

function playMove(column) {
  if (gameOver || isColumnFull(column)) {
    return;
  }

  const row = lowestOpenRow(column);
  board[row][column] = currentPlayer().id;

  const result = findWin(row, column);
  if (result.length > 0) {
    winningCells = result;
    gameOver = true;
    render();
    setStatus(`${currentPlayer().name} wins. Start a new game?`);
    return;
  }

  if (isBoardFull()) {
    gameOver = true;
    render();
    setStatus("Draw game. Start a new game?");
    return;
  }

  switchPlayer();
  render();
  setStatus(`${currentPlayer().name}'s turn. Choose a column.`);
}

function lowestOpenRow(column) {
  for (let row = ROWS - 1; row >= 0; row -= 1) {
    if (board[row][column] === 0) {
      return row;
    }
  }
  return -1;
}

function isColumnFull(column) {
  return board?.[0][column] !== 0;
}

function isBoardFull() {
  return board[0].every((slot) => slot !== 0);
}

function findWin(row, column) {
  const playerId = board[row][column];
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (const [rowDelta, columnDelta] of directions) {
    const cells = [
      ...collectCells(row, column, -rowDelta, -columnDelta, playerId).reverse(),
      [row, column],
      ...collectCells(row, column, rowDelta, columnDelta, playerId),
    ];

    if (cells.length >= 4) {
      return cells.slice(0, 4);
    }
  }

  return [];
}

function collectCells(row, column, rowDelta, columnDelta, playerId) {
  const cells = [];
  let nextRow = row + rowDelta;
  let nextColumn = column + columnDelta;

  while (
    nextRow >= 0 &&
    nextRow < ROWS &&
    nextColumn >= 0 &&
    nextColumn < COLUMNS &&
    board[nextRow][nextColumn] === playerId
  ) {
    cells.push([nextRow, nextColumn]);
    nextRow += rowDelta;
    nextColumn += columnDelta;
  }

  return cells;
}

resetButton.addEventListener("click", startGame);
startGame();
