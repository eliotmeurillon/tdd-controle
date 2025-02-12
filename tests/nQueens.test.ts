import { solveNQueens, isSafe } from "../src/nQueens";

describe("solveNQueens()", () => {
  test("Devrait retourner [[#]] pour n=1 (1 seule solution)", () => {
    const solutions = solveNQueens(1);
    expect(solutions).toHaveLength(1);
    expect(solutions[0]).toEqual(["#"]);
  });
});

describe("isSafe()", () => {
  test("Devrait retourner true sur un plateau vide", () => {
    const board = [
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
    ];
    expect(isSafe(board, 0, 0, 4)).toBe(true);
  });

  test("Devrait retourner false si une reine est sur la diagonale descendante", () => {
    const board = [
      ["O", "O", "#", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
    ];
    expect(isSafe(board, 1, 1, 4)).toBe(false);
  });

  test("Devrait retourner false si une reine est sur la diagonale ascendante", () => {
    const board = [
      ["#", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
    ];

    expect(isSafe(board, 1, 1, 4)).toBe(false);
  });

  test("Devrait retourner true si la position est sûre (pas de conflit)", () => {
    const board = [
      ["#", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
    ];
    expect(isSafe(board, 1, 2, 4)).toBe(true);
  });
});
