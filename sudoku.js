"use strict";
// Implmentation of a sudoku solver
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var boards = {
    B: [
        [0, 4, 5, 8, 7, 0, 0, 0, 6],
        [0, 2, 6, 0, 4, 0, 0, 0, 1],
        [0, 9, 0, 2, 5, 6, 4, 0, 0],
        [9, 0, 0, 4, 0, 0, 5, 6, 0],
        [2, 0, 4, 6, 0, 0, 0, 0, 0],
        [0, 8, 0, 0, 0, 0, 3, 0, 0],
        [0, 0, 9, 1, 3, 2, 6, 8, 0],
        [1, 6, 0, 0, 0, 8, 0, 3, 4],
        [0, 0, 8, 0, 0, 4, 2, 1, 0]
    ],
    C: [
        [0, 0, 0, 0, 0, 0, 0, 0, 7],
        [7, 0, 6, 0, 8, 0, 4, 0, 2],
        [0, 0, 0, 0, 0, 3, 0, 1, 0],
        [1, 0, 5, 6, 9, 0, 8, 0, 0],
        [0, 0, 9, 0, 0, 0, 0, 5, 0],
        [0, 4, 8, 0, 5, 0, 0, 6, 0],
        [0, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 1, 0, 0, 0, 6, 0, 0, 5],
        [0, 0, 0, 7, 0, 8, 6, 3, 1]
    ],
    D: [
        [0, 6, 0, 0, 0, 0, 0, 4, 0],
        [0, 9, 0, 1, 7, 0, 0, 0, 0],
        [0, 0, 5, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 3, 0, 5, 0, 0],
        [0, 0, 0, 0, 5, 9, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 8, 2, 4],
        [8, 0, 2, 5, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0],
        [4, 0, 0, 0, 0, 8, 0, 0, 6]
    ]
};
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
//const facit_easy_board = [];
function apply(board, value, x, y) {
    // if (value > 9 || value < 1) {
    //     console.log("Invalid input: Value must be between 1 and 9");
    //     return;
    // }
    // if (x > 8 || x < 0 || y > 8 || y < 0) {
    //     console.log("Invalid position: Coordinates must be between 0 and 8");
    //     return;
    // }
    if (board[y][x] !== 0) { // När spelaren skriver in en position som redan har en siffra
        console.log("Sorry cannot replace an existing number");
        return;
    }
    else if (board[y][x] === 0) {
        var answerboard = facit(board); // Assuming facit_easy_board is defined somewhere
        if (value !== answerboard[y][x]) { // När siffrorna inte är samma
            console.log("Nope, not this number. Try again");
            return;
        }
        else {
            console.log("Good job, right number!");
        }
    }
    // else if (value !== answerboard[y][x]) { // När siffrorna inte är samma
    //     console.log("Nope, not this number. Try again");
    //     return;
    // }
    // else if (value === answerboard[y][x]) { // När det är rätt siffra
    //     console.log("Good job, right number!");
    // }
    // function is_game_complete(board1: Board, board2: Board): boolean {
    //     for (let i = 0; i < 9; i++) {
    //         for (let j = 0; j < 9; j++) {
    //             if (board1[i][j] === board2[i][j]) {
    //                 return true;  // Return true when the game is complete
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }
    //     return false;
    // }
    // if (is_game_complete(playeraboard, answerboard)) {
    //     console.log("Congrats, you have finished the game");
    //     return playeraboard;
    // }
}
function hint(board, x, y) {
    if (board[y][x] !== 0) {
        return -1; // indicates that the cell is occupied and no hint could be given
    }
    var solved = facit(board);
    return solved[y][x];
}
// solve(easyboard);
// console.log(easyboard);
// console.log(hint(easyboard, 0, 4));
function menu() {
    while (true) {
        console.log("What do you need help with?");
        console.log("A) Solve the Board");
        console.log("B) Apply a value to the board");
        console.log("C) Get a Hint");
        console.log("D) Quit");
        var choice = prompt("Enter your choice: ").toUpperCase();
        if (choice === "A") {
            var boardChoice = prompt("Which board would you like to solve? (A, B, C, D): ").toUpperCase();
            if (boards[boardChoice]) {
                console.log(facit(boards[boardChoice]));
            }
            else {
                console.log("Invalid board choice");
            }
        }
        else if (choice === "B") {
            var boardApply = prompt("To which board would you like to apply? (A, B, C, D): ").toUpperCase();
            if (boards[boardApply]) {
                var valueApply = parseInt(prompt("What is the value you would like to add? (1 - 9): "));
                if (valueApply >= 1 && valueApply <= 9) {
                    var x_coor = parseInt(prompt("Enter x coordinates (0 - 8): "));
                    var y_coor = parseInt(prompt("Enter y coordinates (0 - 8): "));
                    if (x_coor >= 0 && x_coor <= 8 && y_coor >= 0 && y_coor <= 8) {
                        var answer = apply(boards[boardApply], valueApply, x_coor, y_coor);
                        console.log(answer);
                    }
                    else {
                        console.log("Invalid Coordinates");
                    }
                }
                else {
                    console.log("Invalid Value");
                }
            }
            else {
                console.log("Invalid board choice");
            }
        }
        else if (choice === "C") {
            var boardHint = prompt("For which board would you like a hint? (A, B, C): ").toUpperCase();
            if (boards[boardHint]) {
                var x = parseInt(prompt("Enter x coordinate (0 - 8): "));
                var y = parseInt(prompt("Enter y coordinate (0 - 8): "));
                if (x >= 0 && x <= 8 && y >= 0 && y <= 8) {
                    var hintValue = hint(boards[boardHint], x, y);
                    if (hintValue === -1) {
                        console.log("This cell already has a number!");
                    }
                    else {
                        console.log("Hint: Try placing ".concat(hintValue, " at (").concat(x, ", ").concat(y, ")"));
                    }
                }
                else {
                    console.log("Invalid Coordinates");
                }
            }
            else {
                console.log("Invalid board choice");
            }
        }
        else if (choice === "D") {
            break;
        }
        else {
            console.log("Invalid Input");
        }
    }
}
menu();
