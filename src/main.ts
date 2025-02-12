import { solveNQueens } from "./nQueens";

function printSolutions(n: number) {
  console.log(`Solutions pour ${n} reines :`);
  const solutions = solveNQueens(n);

  if (solutions.length === 0) {
    console.log("Aucune solution trouvée!");
    return;
  }

  solutions.forEach((solution, index) => {
    console.log(`\nSolution ${index + 1}:`);
    solution.forEach((row) => {
      console.log(row);
    });
  });
  console.log(`\nNombre total de solutions : ${solutions.length}`);
}

const n = process.argv[2] ? parseInt(process.argv[2]) : 4;
printSolutions(n);
