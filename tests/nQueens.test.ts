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
});
