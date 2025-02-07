// Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable 
// represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

// To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, 
// specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":
// Run code using: node pyramid.js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
  }

  let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
// This prints: 
// #
// ##
// ###
// ####
// #####
// ######
// #######


function padRow(rowNumber, rowCount) { // To create a row, need to know which row it is on and the overall number of rows
  return character.repeat(rowNumber);  // This will return the character multiplied by the row number. Note, cannot do character * rowNumber
}
