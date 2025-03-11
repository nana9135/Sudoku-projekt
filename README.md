# Sudoku Solver

## Overview
This project is a command-line Sudoku solver implemented in TypeScript. It allows users to solve predefined Sudoku puzzles, apply values to the board, get hints, and interactively play with the puzzles.

## Features
- Solve a Sudoku board using a **backtracking algorithm**
- Validate if a number can be placed in a specific cell
- Check if a board contains an empty cell
- Get hints for the correct number in a cell
- Interactive **menu** user interface

## Usage
When running the program, you will be presented with a menu:
```
What do you need help with?
A) Solve the Board
B) Apply a value to the board
C) Get a Hint
D) Quit
```
You can choose an option to either solve the board, input a value, request a hint, or exit the program.

### Example Usage
- To solve a board, select **A**, then choose a board (A, B, or C) to solve.
- To apply a value, select **B**, choose a board, enter a number (1-9), and specify coordinates (x, y).
- To get a hint, select **C**, choose a board, and enter coordinates (x, y).

## Board Representation
The Sudoku boards are represented as **9x9 matrices**, where `0` represents an empty cell.
Example Board:
```ts
const board = [
  [0, 4, 5, 8, 7, 0, 0, 0, 6],
  [0, 2, 6, 0, 4, 0, 0, 0, 1],
  [0, 9, 0, 2, 5, 6, 4, 0, 0],
  [9, 0, 0, 4, 0, 0, 5, 6, 0],
  [2, 0, 4, 6, 0, 0, 0, 0, 0],
  [0, 8, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 9, 1, 3, 2, 6, 8, 0],
  [1, 6, 0, 0, 0, 8, 0, 3, 4],
  [0, 0, 8, 0, 0, 4, 2, 1, 0]
];
```

## Functions
### `facit(board: Board): Board`
Solves the Sudoku board using a backtracking algorithm and returns the solved board.

### `is_valid(board: Board, row: number, col: number, num: number): boolean`
Checks whether a number can be placed in a given cell based on Sudoku rules.

### `contains_zero(board: Board): [number, number] | null`
Finds the first empty cell (0) on the board and returns its coordinates.

### `solve(board: Board): boolean`
Recursively solves the board using backtracking.

### `apply(board: Board, value: number, x: number, y: number): Board | void`
Attempts to place a number on the board and verifies its correctness.

### `hint(board: Board, x: number, y: number): number`
Provides a hint by revealing the correct number for a given cell.

### `menu()`
Displays an interactive menu for user interaction.
