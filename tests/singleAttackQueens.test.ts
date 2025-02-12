import { checkSingleAttack } from "../src/singleAttackQueens";

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
});
