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

export function solveSingleAttackQueens(n: number): string[][] {
  const solutions: string[][] = [];
  const totalSquares = n * n;
  const max = 1 << totalSquares;

  for (let mask = 0; mask < max; mask++) {
    const board: string[][] = Array.from({ length: n }, () =>
      Array(n).fill("O")
    );

    for (let bit = 0; bit < totalSquares; bit++) {
      if (mask & (1 << bit)) {
        const row = Math.floor(bit / n);
        const col = bit % n;
        board[row][col] = "#";
      }
    }

    if (checkSingleAttack(board)) {
      const solution = board.map((r) => r.join(""));
      solutions.push(solution);
    }
  }

  return solutions;
}
