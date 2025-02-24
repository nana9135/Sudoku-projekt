"use strict";
// Implmentation of a sudoku solver
var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var board1 = [
    [0, 4, 5, 8, 7, 0, 0, 0, 6],
    [0, 2, 6, 0, 4, 0, 0, 0, 1],
    [0, 9, 0, 2, 5, 6, 4, 0, 0],
    [9, 0, 0, 4, 0, 0, 5, 6, 0],
    [2, 0, 4, 6, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 9, 1, 3, 2, 6, 8, 0],
    [1, 6, 0, 0, 0, 8, 0, 3, 4],
    [0, 0, 8, 0, 0, 4, 2, 1, 0]
];
function is_valid(board, row, col, num) {
    for (var i = 0; i < 9; i++) {
        if (board[i][col] === num || board[row][i] === num) { // checks rows and columns
            return false;
        }
    }
    var x0 = Math.floor(row / 3) * 3;
    var y0 = Math.floor(col / 3) * 3;
    for (var k = y0; k < y0 + 3; k++) {
        for (var j = x0; j < x0 + 3; j++) {
            if (board[j][k] === num) {
                return false;
            }
        }
    }
    return true;
}
function contains_zero(board) {
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null;
}
function solve(board) {
    var empty = contains_zero(board);
    if (!empty) {
        return true;
    }
    var row = empty[0], col = empty[1];
    for (var num = 1; num <= 9; num++) {
        if (is_valid(board, row, col, num)) {
            board[row][col] = num;
            if (solve(board))
                return true;
            board[row][col] = 0;
        }
    }
    return false;
}
solve(board1);
console.log(board1);
