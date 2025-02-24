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

const board1 = [
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


function is_valid(board, row, col, num){
        for(let i = 0; i < 9; i++){
            if(board[i][col] === num || board[row][i] === num){ // checks rows and columns
                return false;
            }

            const x0 = Math.floor(x / 3) * 3;
            const y0 = Math.floor(y / 3) * 3;

        for(let k = y0; k < y0 + 3; k++){
            for(let j = x0; j < x0 + 3; j++){
                if(board[y0][x0] === num){
                    return false;
                }
            }
        }
    }
}

function solve(board){
    let empty = contains_zero(board)

    while (contains_zero(board)){

        
    }
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
 
    
