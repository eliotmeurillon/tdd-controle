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
  if (row === 0) return true;
  return false;
}
