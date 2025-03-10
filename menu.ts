import { boards, facit, is_valid, contains_zero, solve, apply, hint, Board } from './sudoku';

import * as promptSync from 'prompt-sync';
const prompt = promptSync();

function menu(): void {
    while (true) {
        console.log("What do you need help with?");
        console.log("A) Solve the Board");
        console.log("B) Apply a value to the board");
        console.log("C) Get a Hint");
        console.log("D) Quit");
        const choice: string = prompt("Enter your choice: ").toUpperCase();

        if(choice === "A"){
            const boardChoice: string = prompt("Which board would you like to solve? (A, B, C): ").toUpperCase();
            if(boards[boardChoice]){
                console.log(facit(boards[boardChoice]));
                
            }
            else{
                console.log("Invalid board choice");
            }
        }
        else if(choice === "B"){
            const boardApply: string = prompt("To which board would you like to apply? (A, B, C): ").toUpperCase();
            if(boards[boardApply]){
                const valueApply: number = parseInt(prompt("What is the value you would like to add? (1 - 9): "));
                if(valueApply >= 1 && valueApply <= 9){
                    const x_coor: number = parseInt(prompt("Enter x coordinates (0 - 8): "));
                    const y_coor: number = parseInt(prompt("Enter y coordinates (0 - 8): "));
                    if(x_coor >= 0 && x_coor <= 8 && y_coor >= 0 && y_coor <= 8){
                        const answer = apply(boards[boardApply], valueApply, x_coor, y_coor);
                        console.log(answer);
                    }
                    else{
                        console.log("Invalid Coordinates");
                    }
                }
                else{
                    console.log("Invalid Value");
                }
            }
            else{
                console.log("Invalid board choice");
            }
        }
        else if(choice === "C"){
            const boardHint: string = prompt("For which board would you like a hint? (A, B, C): ").toUpperCase();
            if (boards[boardHint]) {
                const x: number = parseInt(prompt("Enter x coordinate (0 - 8): "));
                const y: number = parseInt(prompt("Enter y coordinate (0 - 8): "));

                if(x >= 0 && x <= 8 && y >= 0 && y <= 8){
                    const hintValue = hint(boards[boardHint], x, y);
                    if (hintValue === -1) {
                        console.log("This cell already has a number!");
                }   else {
                        console.log(`Hint: Try placing ${hintValue} at (${x}, ${y})`);
                }
                }
                else{
                    console.log("Invalid Coordinates");
                }
                
            } else {
                console.log("Invalid board choice");
            }
        }
        else if(choice === "D"){
            break;
        }
        else{
            console.log("Invalid Input");
        }  
    }
}
menu();