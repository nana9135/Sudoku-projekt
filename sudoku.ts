// Implmentation of a sudoku solver

type Board = number[][];

const board: Board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const easyboard = [ // 55% have finished this board
    [0, 4, 5, 8, 7, 0, 0, 0, 6],
    [0, 2, 6, 0, 4, 0, 0, 0, 1],
    [0, 9, 0, 2, 5, 6, 4, 0, 0],
    [9, 0, 0, 4, 0, 0, 5, 6, 0],
    [2, 0, 4, 6, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 9, 1, 3, 2, 6, 8, 0],
    [1, 6, 0, 0, 0, 8, 0, 3, 4],
    [0, 0, 8, 0, 0, 4, 2, 1, 0]
]

const mediumboard = [ // 59% People have finished this board
    [0, 0, 0, 0, 0, 0, 0, 0, 7],
    [7, 0, 6, 0, 8, 0, 4, 0, 2],
    [0, 0, 0, 0, 0, 3, 0, 1, 0],
    [1, 0, 5, 6, 9, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 5, 0],
    [0, 4, 8, 0, 5, 0, 0, 6, 0],
    [0, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 1, 0, 0, 0, 6, 0, 0, 5],
    [0, 0, 0, 7, 0, 8, 6, 3, 1]
]

const extremeboard = [ // Only 28% have finished this board
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



function is_valid(board: Board, row: number, col: number, num: number): boolean{
        for(let i = 0; i < 9; i++){
            if(board[i][col] === num || board[row][i] === num){ // checks rows and columns
                return false;
            }
        }
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
 
function solve(board: Board): boolean{
        let empty = contains_zero(board);
        
        if(!empty){
            return true;}
            
        
        let [row, col]: number[] = empty;

        for(let num = 1; num <= 9; num++){
            if(is_valid(board, row, col, num)){
                board[row][col] = num;
                if(solve(board))
                    return true;
                board[row][col] = 0;
            }
        }
    return false;
}

solve(board1)
console.log(board1);