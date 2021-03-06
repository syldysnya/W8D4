// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const startGrid = [];
   for (let col = 0; col < 8; col++) {
     const columns = [];
     for (let row = 0; row < 8; row++){
       columns.push(undefined);
     };
     startGrid.push(columns);
  };

  startGrid[3][4] = new Piece('black');
  startGrid[4][3] = new Piece('black');
  startGrid[3][3] = new Piece('white');
  startGrid[4][4] = new Piece('white');
  return startGrid
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let range = [0, 1, 2, 3, 4, 5, 6, 7];
  return range.includes(pos[0]) && range.includes(pos[1])
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
    if (this.isValidPos(pos)){
      let x = pos[0];
      let y = pos[1];
      return this.grid[x][y];
    } else {
      let error = new Error("Not valid pos!");
      throw error;
    }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let x = pos[0];
  let y = pos[1];
  let myPiece = this.grid[x][y];
  if (myPiece === undefined) {
    return false;
  } else if (myPiece.color === color) {
    return true; 
  } else {
    return false;
  };
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let x = pos[0];
  let y = pos[1];

  return this.grid[x][y] !== undefined;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */

Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  // debugger
  
  if (!piecesToFlip) {
    // debugger
    piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  };
  
  let x = pos[0];
  let y = pos[1];

  let dirX = dir[0];
  let dirY = dir[1];

  let newPos = [x + dirX, y + dirY];
  // debugger
  if (!this.isValidPos(newPos)) {
    return [];
  } else if (!this.isOccupied(newPos)) {
    return [];
  } else if (this.isMine(newPos, color)) {
    return piecesToFlip.length === 0 ? [] : piecesToFlip;
  } else {
    return this._positionsToFlip(newPos, color, dir, piecesToFlip);
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */

// Board.DIRS = [
//   [0, 1], [1, 1], [1, 0],
//   [1, -1], [0, -1], [-1, -1],
//   [-1, 0], [-1, 1]
// ];

Board.prototype.validMove = function (pos, color) {
  Board.DIRS.forEach = function () {
    this._positionsToFlip(newPos, color, dir, piecesToFlip);
  }
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE