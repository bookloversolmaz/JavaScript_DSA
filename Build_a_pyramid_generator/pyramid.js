// Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable 
// represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

// To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, 
// specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i));
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