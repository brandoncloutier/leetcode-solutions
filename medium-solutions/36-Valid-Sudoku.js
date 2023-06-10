/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // Validating all the rows
    for (let i = 0; i < board.length; i++) {
        if (!validateRow(board[i])) {
            return false;
        }
    }

    // Validating all the columns;
    for (let i = 0; i < 9; i++) {
        if (!validateColumn(board, i)) {
            return false;
        }
    }

    // Validating all the 3x3 squares
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!validateSquare(board, i * 3, j * 3)) {
                return false;
            }
        }
    }
    return true;
};

var validateRow = function(row) {
    const map = new Map();

    for (let i = 0; i < 9; i++) {
        if (row[i] === ".") {
            continue;
        } else if (map.has(row[i])) {
            return false;
        } 
        map.set(row[i], 0);
    }

    return true;
}

var validateColumn = function(board, column) {
    const map = new Map();

    for (let i = 0; i < 9; i++) {
        if (board[i][column] === ".") {
            continue;
        } else if (map.has(board[i][column])) {
            return false;
        } 
        map.set(board[i][column], 0);
    }
    return true;
}

var validateSquare = function(board, row, column) {
    const map = new Map();

    for (let i = row; i < row + 3; i++) {
        for (let j = column; j < column + 3; j++) {
            if (board[i][j] === ".") {
                continue;
            } else if (map.has(board[i][j])) {
                return false;
            }
            map.set(board[i][j], 0)
        }
    }
    return true;
}
