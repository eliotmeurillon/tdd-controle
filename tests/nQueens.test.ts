import { solveNQueens, isSafe } from "../src/nQueens";

describe("solveNQueens()", () => {
  test("Devrait retourner [[#]] pour n=1 (1 seule solution)", () => {
    const solutions = solveNQueens(1);
    expect(solutions).toHaveLength(1);
    expect(solutions[0]).toEqual(["#"]);
  });

  test("Devrait retourner un tableau vide pour n=2 (pas de solution)", () => {
    const solutions = solveNQueens(2);
    expect(solutions).toHaveLength(0);
  });

  test("Devrait retourner un tableau vide pour n=3 (pas de solution)", () => {
    const solutions = solveNQueens(3);
    expect(solutions).toHaveLength(0);
  });

  test("Devrait trouver 2 solutions pour n=4", () => {
    const solutions = solveNQueens(4);
    expect(solutions).toHaveLength(2);

    const solutionSet = new Set(solutions.map((sol) => sol.join(",")));
    expect(solutionSet).toContain(["O#OO", "OOO#", "#OOO", "OO#O"].join(","));
    expect(solutionSet).toContain(["OO#O", "#OOO", "OOO#", "O#OO"].join(","));
  });

  test("Devrait trouver 92 solutions pour n=8", () => {
    const solutions = solveNQueens(8);
    expect(solutions).toHaveLength(92);
  });

  test("Devrait trouver au moins 3 solutions pour n=8", () => {
    const solutions = solveNQueens(8);
    expect(solutions.length).toBeGreaterThanOrEqual(3);
    solutions.forEach((solution) => {
      expect(solution).toHaveLength(8);
      solution.forEach((row) => {
        expect(row.split("#").length).toBe(2);
      });
    });
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
