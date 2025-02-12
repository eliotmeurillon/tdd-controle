import { solveNQueens } from "../src/nQueens";

describe("solveNQueens()", () => {
  test("Devrait retourner [[#]] pour n=1 (1 seule solution)", () => {
    const solutions = solveNQueens(1);
    expect(solutions).toHaveLength(1);
    expect(solutions[0]).toEqual(["#"]);
  });
});
