function attacks(r1: number, c1: number, r2: number, c2: number): boolean {
  return r1 === r2 || c1 === c2 || Math.abs(r1 - r2) === Math.abs(c1 - c2);
}

export function checkSingleAttack(board: string[][]): boolean {
  const positions: Array<[number, number]> = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "#") {
        positions.push([r, c]);
      }
    }
  }

  if (positions.length < 2) return false;

  for (let i = 0; i < positions.length; i++) {
    const [r1, c1] = positions[i];

    let attackCount = 0;
    let attackedByCount = 0;

    for (let j = 0; j < positions.length; j++) {
      if (i === j) continue;
      const [r2, c2] = positions[j];

      if (attacks(r1, c1, r2, c2)) {
        attackCount++;
      }
      if (attacks(r2, c2, r1, c1)) {
        attackedByCount++;
      }
    }

    if (attackCount !== 1 || attackedByCount !== 1) {
      return false;
    }
  }

  return true;
}

export function solveSingleAttackQueens(n: number): string[][][] {
  return [];
}
