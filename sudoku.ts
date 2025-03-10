// Implmentation of a sudoku solver
export { boards, facit, is_valid, contains_zero, solve, apply, hint, Board };

type Board = number[][];

const boards: Record<string, Board> = {
    A: [ // 55% have finished this board
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
    
    B: [ // 59% People have finished this board
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
    
    C:  [ // Only 28% have finished this board
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
}


/**
 * Solves the given Sudoku board.
 * @example
 * returns a solved version of board B
 * facit(boards.B);
 * @param {Board} board - The Sudoku board to solve.
 * @returns {Board} The solved board.
 */
function facit(board: Board): Board{
    solve(board);
    return board;
}

/**
 * Checks if a number can be placed at a given position.
 * @example
 * // returns true if number 5 can be placed at position (0, 0)
 * is_valid(boards.B, 0, 0, 5);
 * @param {Board} board - The Sudoku board.
 * @param {number} row - The row index.
 * @param {number} col - The column index.
 * @param {number} num - The number to check.
 * @precondition row and col must be between 0 and 8 inclusive
 * @returns {boolean} True if the number is valid, false otherwise.
 */
function is_valid(board: Board, row: number, col: number, num: number): boolean{
        // checks rows and columns for duplicates
        for(let i = 0; i < 9; i++){
            if(board[i][col] === num || board[row][i] === num){ 
                return false;
            }
        }
        
        // checks 3x3 subgird for duplicates
        const x0: number = Math.floor(row / 3) * 3;
        const y0: number = Math.floor(col / 3) * 3;
        for(let k = y0; k < y0 + 3; k++){
            for(let j = x0; j < x0 + 3; j++){
                if(board[j][k] === num){
                    return false;
                }
            }
        }
    return true;
}
/**
 * Finds the first empty cell in the board.
 * @example
 * returns the position of the first empty cell
 * contains_zero(boards.B);
 * @param {Board} board - The Sudoku board.
 * @precondition The board must be a valid sudoku board
 * @returns {[number, number] | null} Coordinates of the empty cell or null if no empty cell is found.
 */
function contains_zero(board: Board): [number, number] | null{
        for (let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                if (board[row][col] === 0){
                    return [row,col]; 
                }
            }
        }
        return null;
    }
 
/**
 * Recursively solves the Sudoku board using backtracking.
 * @example
 * solves the puzzle on board B and returns a boolean if it solvable
 * solve(boards.B);
 * @param {Board} board - The Sudoku board.
 * @precondition The board must be a valid sudoku board
 * @returns {boolean} True if a solution is found, false otherwise.
 */
function solve(board: Board): boolean{
        // Find the next empty cell
        let empty: [number, number] | null = contains_zero(board);
        
        // Base case: if no empty cells available the board is solved
        if(!empty){
            return true;
        }
        
        let [row, col]: number[] = empty;

        // Try placing numbers in an empty cell
        for(let num = 1; num <= 9; num++){
            if(is_valid(board, row, col, num)){
                board[row][col] = num; // Place the number

                // Recursively solve the rest of the board
                if(solve(board)){
                    return true;
                }
                board[row][col] = 0; // Backtrack if solution not found
            }
        }
    return false;
}

/**
 * Applies a value to a cell on the sudoku board, and checks if it is correct.
 * @example
 * // applies value 5 to board B at position (0, 0)
 * apply(boards.B, 5, 0, 0);
 * @param {Board} board - the sudoku board
 * @param {number} value - the value to apply (1-9)
 * @param {number} x - the x coordinate (column)
 * @param {number} y - the y coordinate (row)
 * @precondition The board must be a valid sudoku board
 * @returns {Board | void} Returns the updated board or void if an error occurs
 */
function apply(board: Board, value: number, x: number, y: number): void | string {
    if (value > 9 || value < 1) { // Checks for valid value between 1 and 9
        return "Invalid input: Value must be between 1 and 9";
    }
    else if (x > 8 || x < 0 || y > 8 || y < 0) { // Checks for valid x and y coordinates
        return "Invalid position: Coordinates must be between 0 and 8";
    }
    if (board[y][x] !== 0) { // When the space is occupied
        return "Sorry cannot replace an existing number";
    }
    else if (board[y][x] === 0){
        const answerboard: Board = facit(board.map(row =>[...row]));
        if (value !== answerboard[y][x]) { // When the numbers are not the same
            return "Nope, not this number. Try again";
        }
        else{// Number is correct if none of the above apply
            return "Good job, right number!";
        }
    }
}

/**
 * Provides a hint for a given cell.
 * @example
 * returns a hint for the cell at (0, 0) on board B
 * hint(boards.B, 0, 0);
 * @param {Board} board - The Sudoku board.
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 * @returns {number} The correct value for the given cell, or -1 if the cell is not empty.
 */
function hint(board: Board, x: number, y: number): number{
    if(board[y][x] !== 0){
        return -1; // indicates that the cell is occupied and no hint could be given
    }
    const solved: Board = facit(board.map(row =>[...row])); // creates a clone of the board instead changing the original
    return solved[y][x];
}