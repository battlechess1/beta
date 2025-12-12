const board = document.getElementById("board");

// --- Build 14x14 grid ---
for (let i = 1; i <= 144; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.id = `tile-${i}`;
  tile.addEventListener("click", handleTileClick);
  board.appendChild(tile);
}

document.getElementById("tile-4").classList.add("light-tile");



document.getElementById("tile-1").classList.add("inactive");







function spawnDivOnTile(tileNumber, classList = []) {
  const tile = document.getElementById("tile-" + tileNumber);
  if (!tile) return;

  const div = document.createElement("div");
  div.classList.add(...classList);

  // Optional: make it behave like a piece
  if (classList.includes("piece")) {
    div.addEventListener("click", () => selectPiece(div));
  }

  tile.appendChild(div);
  return div;
}

// --- Pieces to spawn ---
const piecesToSpawn = [
  // Black pieces
  { id: "tile-22", type: "pawn", color: "black" },
  { id: "tile-21", type: "pawn", color: "black" },
  { id: "tile-42", type: "pawn", color: "black" },
  { id: "tile-43", type: "pawn", color: "black" },
  { id: "tile-39", type: "pawn", color: "black" },
  { id: "tile-40", type: "pawn", color: "black" },
  { id: "tile-10", type: "rook", color: "black" },
  { id: "tile-30", type: "knight", color: "black" },
  { id: "tile-31", type: "knight", color: "black" },
  { id: "tile-9", type: "rook", color: "black" },
  { id: "tile-17", type: "bishop", color: "black" },
  { id: "tile-20", type: "bishop", color: "black" },
  { id: "tile-32", type: "bishop", color: "black" },
  { id: "tile-8", type: "queen", color: "black" },
  { id: "tile-4", type: "queen", color: "black" },
  { id: "tile-7", type: "king", color: "black" },



  // White pieces (mirrored)
  { id: "tile-71", type: "pawn", color: "white" },
  { id: "tile-72", type: "pawn", color: "white" },
  { id: "tile-73", type: "pawn", color: "white" },
  { id: "tile-74", type: "pawn", color: "white" },
  { id: "tile-87", type: "pawn", color: "white" },
  { id: "tile-88", type: "pawn", color: "white" },
  { id: "tile-85", type: "rook", color: "white" }, // mirrored rooks
  { id: "tile-86", type: "rook", color: "white" },
  { id: "tile-97", type: "knight", color: "white" },
  { id: "tile-98", type: "knight", color: "white" },
  { id: "tile-89", type: "bishop", color: "white" },
  { id: "tile-79", type: "bishop", color: "white" },
  { id: "tile-88", type: "bishop", color: "white" },
  { id: "tile-78", type: "queen", color: "white" },
  { id: "tile-74", type: "queen", color: "white" },
  { id: "tile-88", type: "king", color: "white" },
];



piecesToSpawn.forEach(p => spawnPiece(p.id, p.type, p.color));

let selectedPiece = null;


function spawnPiece(tileId, type, color) {
  const tile = document.getElementById(tileId);
  const piece = document.createElement("div");
  piece.classList.add("piece", type);
  piece.classList.add(color);
  piece.dataset.type = type;
  piece.dataset.color = color;

  // Unicode chess symbols
  const symbols = {
    pawn: color === "black" ? "♟" : "♙",
    rook: color === "black" ? "♜" : "♖",
    bishop: color === "black" ? "♝" : "♗",
    queen: color === "black" ? "♛" : "♕",
    king: color === "black" ? "♚" : "♔",
    knight: color === "black" ? "♞" : "♘",
  };
  piece.textContent = symbols[type];

  piece.addEventListener("click", (e) => {
    e.stopPropagation();
    if (selectedPiece === piece) {
      piece.classList.remove("selected");
      selectedPiece = null;
    } else {
      if (selectedPiece) selectedPiece.classList.remove("selected");
      piece.classList.add("selected");
      selectedPiece = piece;
    }
  });

  tile.appendChild(piece);
}

function handleTileClick(e) {
  const tile = e.currentTarget;

  // Prevent moving onto inactive tiles
  if (tile.classList.contains("inactive")) return;

  if (selectedPiece) {
    tile.appendChild(selectedPiece);
    selectedPiece.classList.remove("selected");
    selectedPiece = null;
  }
}
