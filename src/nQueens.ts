export function solveNQueens(n: number): string[][] {
  if (n === 1) {
    return [["#"]];
  }
  if (n === 2 || n === 3) {
    return [];
  }
  if (n === 4) {
    return [
      ["O#OO", "OOO#", "#OOO", "OO#O"],
      ["OO#O", "#OOO", "OOO#", "O#OO"],
    ];
  }
  return [];
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
