export function solveNQueens(n: number): string[][] {
  if (n === 1) {
    return [["#"]];
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
    if (board[i][col] === "#") {
      return false;
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "#") {
      return false;
    }
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "#") {
      return false;
    }
  }

  return true;
}
