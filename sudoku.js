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
var easyboard = [
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
var mediumboard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 7],
    [7, 0, 6, 0, 8, 0, 4, 0, 2],
    [0, 0, 0, 0, 0, 3, 0, 1, 0],
    [1, 0, 5, 6, 9, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 5, 0],
    [0, 4, 8, 0, 5, 0, 0, 6, 0],
    [0, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 1, 0, 0, 0, 6, 0, 0, 5],
    [0, 0, 0, 7, 0, 8, 6, 3, 1]
];
var extremeboard = [
    [0, 6, 0, 0, 0, 0, 0, 4, 0],
    [0, 9, 0, 1, 7, 0, 0, 0, 0],
    [0, 0, 5, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 3, 0, 5, 0, 0],
    [0, 0, 0, 0, 5, 9, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 8, 2, 4],
    [8, 0, 2, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0],
    [4, 0, 0, 0, 0, 8, 0, 0, 6]
];
function facit(board) {
    solve(board);
    return board;
}
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
var facit_easy_board = [];
function apply(board, value, x, y) {
    var playeraboard = board;
    var answerboard = facit(board); // Assuming facit_easy_board is defined somewhere
    if (value > 9 || value < 1) {
        console.log("Invalid input: Value must be between 1 and 9");
        return;
    }
    if (x > 8 || x < 0 || y > 8 || y < 0) {
        console.log("Invalid position: Coordinates must be between 0 and 8");
        return;
    }
    if (playeraboard[x][y] !== 0) { // När spelaren skriver in en position som redan har en siffra
        console.log("Sorry cannot replace an existing number");
        return;
    }
    if (playeraboard[x][y] !== answerboard[x][y]) { // När siffrorna inte är samma
        console.log("Nope, not this number. Try again");
        return;
    }
    if (playeraboard[x][y] === answerboard[x][y]) { // När det är rätt siffra
        console.log("Good job, right number!");
        return playeraboard;
    }
    function is_game_complete(board1, board2) {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (board1[i][j] === board2[i][j]) {
                    return true; // Return true when the game is complete
                }
                else {
                    return false;
                }
            }
        }
        return false;
    }
    if (is_game_complete(playeraboard, answerboard)) {
        console.log("Congrats, you have finished the game");
        return playeraboard;
    }
}
function hint(board, x, y) {
    if (board[x][y] !== 0) {
        return -1;
    }
    for (var num = 1; num <= 9; num++) {
        if (is_valid(board, x, y, num)) {
            return num;
        }
    }
    return 0;
}
