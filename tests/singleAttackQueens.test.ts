import {
  checkSingleAttack,
  solveSingleAttackQueens,
} from "../src/singleAttackQueens";

describe("checkSingleAttack()", () => {
  test("Devrait retourner true si chaque reine attaque exactement une autre et est attaquée par exactement une autre (exemple simple)", () => {
    const board: string[][] = [
      ["#", "O", "O", "O"],
      ["O", "O", "#", "O"],
      ["O", "O", "O", "O"],
      ["O", "#", "O", "O"],
    ];
    expect(checkSingleAttack(board)).toBe(true);
  });

  test("Devrait retourner false si au moins une reine n'est attaquée par personne", () => {
    const board: string[][] = [
      ["#", "O", "O", "O"],
      ["O", "O", "#", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
    ];
    expect(checkSingleAttack(board)).toBe(false);
  });
});

describe("solveSingleAttackQueens()", () => {
  test("Devrait retourner un tableau non vide pour un 4x4 (s’il existe des solutions)", () => {
    const solutions = solveSingleAttackQueens(4);
    expect(Array.isArray(solutions)).toBe(true);

    expect(solutions.length).toBeGreaterThan(0);

    solutions.forEach((sol) => {
      const board = sol.map((row) => row.split(""));
      expect(checkSingleAttack(board)).toBe(true);
    });
  });
});
