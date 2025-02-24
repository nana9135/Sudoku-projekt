// Implmentation of a sudoku solver

const board = [
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


function is_valid(board, row, col, num){
    for(let i = 0; i < 9; i++){
        if(board[i][col] === num || board[row][i] === num){ // checks rows and columns
            return false;
        }
    }
}

function solve(board){
    return false;
}

function contains_zero(board){
    for (let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            if (board[row][col] === 0){
                return [row,col]; }
            }
        }
        return null;
    }
 
    
