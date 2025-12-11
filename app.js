const board = document.getElementById("board");

// --- Build 14x14 grid ---
for (let i = 1; i <= 196; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.id = `tile-${i}`;
  tile.addEventListener("click", handleTileClick);
  board.appendChild(tile);
}

document.getElementById("tile-9").classList.add("light-tile");
document.getElementById("tile-11").classList.add("light-tile");
document.getElementById("tile-24").classList.add("light-tile");
document.getElementById("tile-26").classList.add("light-tile");
document.getElementById("tile-37").classList.add("light-tile");
document.getElementById("tile-39").classList.add("light-tile");
document.getElementById("tile-50").classList.add("light-tile");
document.getElementById("tile-52").classList.add("light-tile");
document.getElementById("tile-54").classList.add("light-tile");
document.getElementById("tile-59").classList.add("light-tile");
document.getElementById("tile-61").classList.add("light-tile");
document.getElementById("tile-63").classList.add("light-tile");
document.getElementById("tile-65").classList.add("light-tile");
document.getElementById("tile-67").classList.add("light-tile");
document.getElementById("tile-74").classList.add("light-tile");
document.getElementById("tile-76").classList.add("light-tile");
document.getElementById("tile-78").classList.add("light-tile");
document.getElementById("tile-80").classList.add("light-tile");
document.getElementById("tile-82").classList.add("light-tile");

document.getElementById("tile-87").classList.add("light-tile");
document.getElementById("tile-89").classList.add("light-tile");
document.getElementById("tile-91").classList.add("light-tile");
document.getElementById("tile-93").classList.add("light-tile");
document.getElementById("tile-95").classList.add("light-tile");
document.getElementById("tile-102").classList.add("light-tile");
document.getElementById("tile-104").classList.add("light-tile");
document.getElementById("tile-106").classList.add("light-tile");
document.getElementById("tile-110").classList.add("light-tile");

document.getElementById("tile-115").classList.add("light-tile");
document.getElementById("tile-117").classList.add("light-tile");
document.getElementById("tile-119").classList.add("light-tile");
document.getElementById("tile-121").classList.add("light-tile");
document.getElementById("tile-123").classList.add("light-tile");
document.getElementById("tile-125").classList.add("light-tile");
document.getElementById("tile-130").classList.add("light-tile");
document.getElementById("tile-132").classList.add("light-tile");
document.getElementById("tile-134").classList.add("light-tile");
document.getElementById("tile-136").classList.add("light-tile");
document.getElementById("tile-138").classList.add("light-tile");
document.getElementById("tile-143").classList.add("light-tile");
document.getElementById("tile-145").classList.add("light-tile");
document.getElementById("tile-147").classList.add("light-tile");
document.getElementById("tile-158").classList.add("light-tile");
document.getElementById("tile-160").classList.add("light-tile");
document.getElementById("tile-171").classList.add("light-tile");
document.getElementById("tile-173").classList.add("light-tile");
document.getElementById("tile-186").classList.add("light-tile");
document.getElementById("tile-188").classList.add("light-tile");


document.getElementById("tile-1").classList.add("inactive");
document.getElementById("tile-2").classList.add("inactive");
document.getElementById("tile-3").classList.add("inactive");
document.getElementById("tile-4").classList.add("inactive");
document.getElementById("tile-5").classList.add("inactive");
document.getElementById("tile-6").classList.add("inactive");
document.getElementById("tile-7").classList.add("inactive");
document.getElementById("tile-8").classList.add("inactive");
document.getElementById("tile-13").classList.add("inactive");
document.getElementById("tile-14").classList.add("inactive");
document.getElementById("tile-15").classList.add("inactive");
document.getElementById("tile-16").classList.add("inactive");
document.getElementById("tile-17").classList.add("inactive");
document.getElementById("tile-18").classList.add("inactive");
document.getElementById("tile-20").classList.add("inactive");
document.getElementById("tile-21").classList.add("inactive");
document.getElementById("tile-22").classList.add("inactive");
document.getElementById("tile-27").classList.add("inactive");
document.getElementById("tile-28").classList.add("inactive");
document.getElementById("tile-29").classList.add("inactive");
document.getElementById("tile-30").classList.add("inactive");
document.getElementById("tile-31").classList.add("inactive");
document.getElementById("tile-32").classList.add("inactive");
document.getElementById("tile-33").classList.add("inactive");
document.getElementById("tile-35").classList.add("inactive");
document.getElementById("tile-36").classList.add("inactive");
document.getElementById("tile-41").classList.add("inactive");
document.getElementById("tile-42").classList.add("inactive");
document.getElementById("tile-43").classList.add("inactive");
document.getElementById("tile-44").classList.add("inactive");
document.getElementById("tile-45").classList.add("inactive");
document.getElementById("tile-46").classList.add("inactive");
document.getElementById("tile-47").classList.add("inactive");
document.getElementById("tile-48").classList.add("inactive");
document.getElementById("tile-55").classList.add("inactive");
document.getElementById("tile-56").classList.add("inactive");
document.getElementById("tile-57").classList.add("inactive");
document.getElementById("tile-58").classList.add("inactive");
document.getElementById("tile-69").classList.add("inactive");
document.getElementById("tile-70").classList.add("inactive");
document.getElementById("tile-71").classList.add("inactive");
document.getElementById("tile-72").classList.add("inactive");
document.getElementById("tile-83").classList.add("inactive");
document.getElementById("tile-84").classList.add("inactive");
document.getElementById("tile-89").classList.add("inactive");
document.getElementById("tile-90").classList.add("inactive");
document.getElementById("tile-97").classList.add("inactive");
document.getElementById("tile-98").classList.add("inactive");
document.getElementById("tile-99").classList.add("inactive");
document.getElementById("tile-100").classList.add("inactive");
document.getElementById("tile-107").classList.add("inactive");
document.getElementById("tile-108").classList.add("inactive");
document.getElementById("tile-113").classList.add("inactive");
document.getElementById("tile-114").classList.add("inactive");
document.getElementById("tile-125").classList.add("inactive");
document.getElementById("tile-126").classList.add("inactive");
document.getElementById("tile-127").classList.add("inactive");
document.getElementById("tile-128").classList.add("inactive");
document.getElementById("tile-139").classList.add("inactive");
document.getElementById("tile-140").classList.add("inactive");
document.getElementById("tile-141").classList.add("inactive");
document.getElementById("tile-142").classList.add("inactive");
document.getElementById("tile-149").classList.add("inactive");
document.getElementById("tile-150").classList.add("inactive");
document.getElementById("tile-151").classList.add("inactive");
document.getElementById("tile-152").classList.add("inactive");
document.getElementById("tile-153").classList.add("inactive");
document.getElementById("tile-154").classList.add("inactive");
document.getElementById("tile-155").classList.add("inactive");
document.getElementById("tile-156").classList.add("inactive");
document.getElementById("tile-161").classList.add("inactive");
document.getElementById("tile-162").classList.add("inactive");
document.getElementById("tile-164").classList.add("inactive");
document.getElementById("tile-165").classList.add("inactive");
document.getElementById("tile-166").classList.add("inactive");
document.getElementById("tile-167").classList.add("inactive");
document.getElementById("tile-168").classList.add("inactive");
document.getElementById("tile-169").classList.add("inactive");
document.getElementById("tile-170").classList.add("inactive");
document.getElementById("tile-175").classList.add("inactive");
document.getElementById("tile-176").classList.add("inactive");
document.getElementById("tile-177").classList.add("inactive");
document.getElementById("tile-179").classList.add("inactive");
document.getElementById("tile-180").classList.add("inactive");
document.getElementById("tile-181").classList.add("inactive");
document.getElementById("tile-182").classList.add("inactive");
document.getElementById("tile-183").classList.add("inactive");
document.getElementById("tile-184").classList.add("inactive");
document.getElementById("tile-189").classList.add("inactive");
document.getElementById("tile-190").classList.add("inactive");
document.getElementById("tile-191").classList.add("inactive");
document.getElementById("tile-192").classList.add("inactive");
document.getElementById("tile-193").classList.add("inactive");
document.getElementById("tile-194").classList.add("inactive");
document.getElementById("tile-195").classList.add("inactive");
document.getElementById("tile-196").classList.add("inactive");

document.getElementById("tile-185").classList.add("unlock");
document.getElementById("tile-112").classList.add("unlock-dark");


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
  { id: "tile-59", type: "pawn", color: "black" },
  { id: "tile-60", type: "pawn", color: "black" },
  { id: "tile-63", type: "pawn", color: "black" },
  { id: "tile-64", type: "pawn", color: "black" },
  { id: "tile-25", type: "pawn", color: "black" },
  { id: "tile-26", type: "pawn", color: "black" },
  { id: "tile-11", type: "rook", color: "black" },
  { id: "tile-49", type: "knight", color: "black" },
  { id: "tile-50", type: "knight", color: "black" },
  { id: "tile-12", type: "rook", color: "black" },
  { id: "tile-34", type: "bishop", color: "black" },
  { id: "tile-10", type: "bishop", color: "black" },
  { id: "tile-24", type: "bishop", color: "black" },
  { id: "tile-19", type: "queen", color: "black" },
  { id: "tile-23", type: "queen", color: "black" },
  { id: "tile-9", type: "king", color: "black" },



  // White pieces (mirrored)
  { id: "tile-171", type: "pawn", color: "white" },
  { id: "tile-172", type: "pawn", color: "white" },
  { id: "tile-133", type: "pawn", color: "white" },
  { id: "tile-134", type: "pawn", color: "white" },
  { id: "tile-137", type: "pawn", color: "white" },
  { id: "tile-138", type: "pawn", color: "white" },
  { id: "tile-185", type: "rook", color: "white" }, // mirrored rooks
  { id: "tile-186", type: "rook", color: "white" },
  { id: "tile-147", type: "knight", color: "white" },
  { id: "tile-148", type: "knight", color: "white" },
  { id: "tile-187", type: "bishop", color: "white" },
  { id: "tile-173", type: "bishop", color: "white" },
  { id: "tile-163", type: "bishop", color: "white" },
  { id: "tile-178", type: "queen", color: "white" },
  { id: "tile-174", type: "queen", color: "white" },
  { id: "tile-188", type: "king", color: "white" },
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

