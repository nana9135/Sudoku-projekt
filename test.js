"use strict";
// const x: number = 2;
// const y: number = 4;
// const x0: number = Math.floor(x/3)*3
// const y0: number = Math.floor(y/3)*3
// console.log(x0);
// console.log(y0);
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("Enter your name: ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });
function drawSudokuBoard() {
    var horizontalLine = "+-------+-------+-------+";
    var emptyRow = "| . . . | . . . | . . . |";
    console.log(horizontalLine);
    for (var i = 0; i < 9; i++) {
        console.log(emptyRow);
        if (i % 3 === 2)
            console.log(horizontalLine);
    }
}
drawSudokuBoard();
