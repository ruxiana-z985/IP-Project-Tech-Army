let canvas = document.querySelector("#tetris");
let scoreboard = document.querySelector("h2");
let startButton = document.querySelector("#startBtn");
let ctx = canvas.getContext("2d");
ctx.scale(30, 30);

const SHAPES = [
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1],
    [1, 1],
  ],
];

const COLORS = [
  "#fff",
  "#9b5fe0",
  "#16a4d8",
  "#60dbe8",
  "#8bd346",
  "#efdf48",
  "#f9a52c",
  "#d64e12",
];

const ROWS = 20;
const COLS = 10;

let grid = generateGrid();
let fallingPieceObj = null;
let score = 0;
let gameInterval = null;
// Start the game when the start button is clicked
startButton.addEventListener("click", () => {
  if (gameInterval) return; // Prevent multiple intervals
  gameInterval = setInterval(newGameState, 500);
  startButton.style.display = "none"; // Hide the start button after clicking
});

function newGameState() {
  checkGrid();
  if (!fallingPieceObj) {
    fallingPieceObj = randomPieceObject();
    renderPiece();
  }
  moveDown();
}

function checkGrid() {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let allFilled = true;
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) {
        allFilled = false;
      }
    }
    if (allFilled) {
      count++;
      grid.splice(i, 1);
      grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }
  if (count == 1) {
    score += 10;
  } else if (count == 2) {
    score += 30;
  } else if (count == 3) {
    score += 50;
  } else if (count > 3) {
    score += 100;
  }
  scoreboard.innerHTML = "Score: " + score;
}

function generateGrid() {
  let grid = [];
  for (let i = 0; i < ROWS; i++) {
    grid.push([]);
    for (let j = 0; j < COLS; j++) {
      grid[i].push(0);
    }
  }
  return grid;
}

function randomPieceObject() {
  let ran = Math.floor(Math.random() * 7);
  let piece = SHAPES[ran];
  let colorIndex = ran + 1;
  let x = 4;
  let y = 0;
  return { piece, colorIndex, x, y };
}

function renderPiece() {
  let piece = fallingPieceObj.piece;
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j] == 1) {
        ctx.fillStyle = COLORS[fallingPieceObj.colorIndex];
        ctx.fillRect(fallingPieceObj.x + j, fallingPieceObj.y + i, 1, 1);
      }
    }
  }
}
let canvas = document.querySelector("#tetris");
let scoreboard = document.querySelector("h2");
let startButton = document.querySelector("#startBtn");
let ctx = canvas.getContext("2d");
ctx.scale(30, 30);

const SHAPES = [
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1],
    [1, 1],
  ],
];

const COLORS = [
  "#fff",
  "#9b5fe0",
  "#16a4d8",
  "#60dbe8",
  "#8bd346",
  "#efdf48",
  "#f9a52c",
  "#d64e12",
];

const ROWS = 20;
const COLS = 10;

let grid = generateGrid();
let fallingPieceObj = null;
let score = 0;
let gameInterval = null;
