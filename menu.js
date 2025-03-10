"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sudoku_1 = require("./sudoku");
var promptSync = require("prompt-sync");
var prompt = promptSync();
function menu() {
    while (true) {
        console.log("What do you need help with?");
        console.log("A) Solve the Board");
        console.log("B) Apply a value to the board");
        console.log("C) Get a Hint");
        console.log("D) Quit");
        var choice = prompt("Enter your choice: ").toUpperCase();
        if (choice === "A") {
            var boardChoice = prompt("Which board would you like to solve? (A, B, C): ").toUpperCase();
            if (sudoku_1.boards[boardChoice]) {
                console.log((0, sudoku_1.facit)(sudoku_1.boards[boardChoice]));
            }
            else {
                console.log("Invalid board choice");
            }
        }
        else if (choice === "B") {
            var boardApply = prompt("To which board would you like to apply? (A, B, C): ").toUpperCase();
            if (sudoku_1.boards[boardApply]) {
                var valueApply = parseInt(prompt("What is the value you would like to add? (1 - 9): "));
                if (valueApply >= 1 && valueApply <= 9) {
                    var x_coor = parseInt(prompt("Enter x coordinates (0 - 8): "));
                    var y_coor = parseInt(prompt("Enter y coordinates (0 - 8): "));
                    if (x_coor >= 0 && x_coor <= 8 && y_coor >= 0 && y_coor <= 8) {
                        var answer = (0, sudoku_1.apply)(sudoku_1.boards[boardApply], valueApply, x_coor, y_coor);
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
            if (sudoku_1.boards[boardHint]) {
                var x = parseInt(prompt("Enter x coordinate (0 - 8): "));
                var y = parseInt(prompt("Enter y coordinate (0 - 8): "));
                if (x >= 0 && x <= 8 && y >= 0 && y <= 8) {
                    var hintValue = (0, sudoku_1.hint)(sudoku_1.boards[boardHint], x, y);
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
