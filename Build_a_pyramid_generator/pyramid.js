// Use code developed in triangle.js

const character = "#";
const count = 8;
const rows = [];

// 1.
function padRow(rowNumber, rowCount) { // To create a row, need to know which row it is on and the overall number of rows. Without rowCount, it will carry on creating forever.
    return character.repeat(rowNumber);  // This will return the character multiplied by the row number. Note, cannot do character * rowNumber
  }
//   Pass i + 1 and count as the arguments to your padRow call. Like parameters, arguments are separated by a comma.

  for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count))
  }

//  2.
  function padRow(rowNumber, rowCount) {    // This adds a single space to the beginning and end of the repeats character string
    return " " + character.repeat(rowNumber) + " ";
  }

// 3.
// To create a three row pyramid, consider the image below. The blank spaces (represented by dots) follow a pattern: rowCount - rowNumber
// ··#··    The no of rows is 3 (rowCount) and the rowNumber is 1, 3 - 1 = 2 spaces.
// ·###·
// #####
// The code above is amended to take the number of spaces for each row into account
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ". repeat(rowCount - rowNumber);
  }

// 4.
// Consider PEMDAS: Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction. 
// This code will calculate the number of hashes/characters for each row, which is 2 * rowNumber - 1

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ". repeat(rowCount - rowNumber);
}
// Above code creates a pyramid

// 5.
// Replace i = i + 1 with the increment operator i ++, which increases the variable by 1.
for (let i = 1; i < count; i ++) { //Start loop at one to avoid i + 1 in function body, i + 1, count
  rows.push(padRow(i, count));  // Remember! i is the current row in the loop, count is the number of rows
}

// 6.
// The code above misses of the botton row, the 8th row. Your original loop went for i values from 0 to 7, because count is 8 and your condition requires i 
// to be less than count. Your loop is now running for i values from 1 to 7. Your loop needs to be updated to run when i is 8, too. Looking at your logic, this 
// means your loop should run when i is less than or equal to count
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

// 7.
// This code will implement the pyramid generator until is reaches 0, or done
// let continueLoop = false;
// let done = 0;

// while (continueLoop) {
//   done++; }
// //  To generate the pyramid again, push the result of calling padRow with done and count as the arguments to your rows array
// rows.push(padRow(done, count));

// 8.
//  Refactored code above to remove need for contineLoop variable
let done = 0;

while (done !== count) {  // change !== to <= as the !== can lead to an infinite loop
  done++;
  rows.push(padRow(done, count));
}

//  9.
// Refactor the above where done tracks the number of rows that have been generated. Arrays have a special length property that allows you to see how many values, or elements, are in the array
// Note that rows.length in the padRow call would give you an off-by-one error, because done is incremented before the call. 
// Update your condition to check if rows.length is less than count.
