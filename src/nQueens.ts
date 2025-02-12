function solveBoard(
  board: string[][],
  row: number,
  n: number,
  solutions: string[][]
) {
  if (row === n) {
    solutions.push(board.map((r) => r.join("")));
    return;
  }
  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col, n)) {
      board[row][col] = "#";
      solveBoard(board, row + 1, n, solutions);
      board[row][col] = "O";
    }
  }
}

export function solveNQueens(n: number): string[][] {
  const board = Array.from({ length: n }, () => Array(n).fill("O"));
  const solutions: string[][] = [];

  solveBoard(board, 0, n, solutions);
  return solutions;
}
export function isSafe(
  board: string[][],
  row: number,
  col: number,
  n: number
): boolean {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "#") return false;
    if (col - (row - i) >= 0 && board[i][col - (row - i)] === "#") return false;
    if (col + (row - i) < n && board[i][col + (row - i)] === "#") return false;
  }
  return true;
}
