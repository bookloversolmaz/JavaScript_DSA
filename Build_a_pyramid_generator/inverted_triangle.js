// As the loop is in the opposite direction, the loop needs to run while i is greater than 0.
// As each iteration subtracts one from i, the iteration statement is i - 1
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));   // push the result of calling padRow with your i and count variables to your rows array
  }

  let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);