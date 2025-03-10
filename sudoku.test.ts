// Imported functions from sudoku.ts
import { boards, facit, is_valid, contains_zero, solve, apply, hint, Board } from './sudoku';

    // A sudoku board 
    const easyBoard = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    // Solution for easyBoard
    const solvedEasyBoard = [ 
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    test('should find the first zero in the board', () => {
        expect(contains_zero(easyBoard)).toEqual([0, 2]); // Looks for the first available 0 (0, 2)
        });

    test('should validate numbers correctly', () => {
        expect(is_valid(easyBoard, 0, 2, 1)).toBe(true); // Valid place
        expect(is_valid(easyBoard, 0, 2, 5)).toBe(false); // Already in the row
        expect(is_valid(easyBoard, 0, 2, 7)).toBe(false); // Already in the column
        expect(is_valid(easyBoard, 0, 2, 8)).toBe(false); // Already in the subgrid
    });

    
    test('should provide a valid hint for an empty cell', () => {
        const originalBoard = easyBoard.map(row => [...row]); // Clone the board
        expect(hint(originalBoard, 0, 2)).toBe(1); // Correct hint for (0, 2)
        expect(hint(originalBoard, 0, 0)).toBe(-1); // Cell already filled
    });

    test('should apply values correctly', () => {
        const originalBoard = easyBoard.map(row => [...row]); // Clone the board

        // Apply a correct value
        expect(apply(originalBoard, 1, 0, 2)).toEqual("Good job, right number!");// Correct value for (0, 2)

        // Apply an incorrect value
        expect(apply(originalBoard, 4, 0, 2)).toEqual("Nope, not this number. Try again");// Incorrect value for (0, 2)

        // Attempt to replace an existing number
        expect(apply(originalBoard, 5, 0, 0)).toEqual("Sorry cannot replace an existing number");// Trying to replace (0, 0) which is already filled

        // Apply an invalid value
        expect(apply(originalBoard, 10, 0, 0)).toEqual("Invalid input: Value must be between 1 and 9"); // Invalid value > 9 

        // Apply an invalid coordinate
        expect(apply(originalBoard, 6, 9, 0)).toEqual("Invalid position: Coordinates must be between 0 and 8"); // Invalid coordinate > 8
    });

    test('should solve the board correctly', () => {
        const solved = facit(easyBoard);
        expect(solve(easyBoard)).toBe(true); // Ensure the board is solvable
        expect(contains_zero(easyBoard)).toBeNull(); // No zeros left after solving
        expect(solved).toEqual(solvedEasyBoard); // Validate the solution
    });

