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


function contains_zero(board){
        for (let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                if (board[row][col] === 0){
                    return [row,col]; }
            }
        }
        return null;
    }
 
function solve(board){
        let empty = contains_zero(board);
        
        if(!empty){
        return true;}
        
        let [row, col] = empty;

        for(let num = 1; num = 9; num++){
            if(is_valid(board, row, col, num)){
                board[row][col] = 0; 
                }
            }
    return false;
}
