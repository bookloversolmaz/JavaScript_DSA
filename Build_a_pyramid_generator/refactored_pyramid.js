const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) { // To create a row, need to know which row it is on and the overall number of rows. Without rowCount, it will carry on creating forever.
    return character.repeat(rowNumber);  // This will return the character multiplied by the row number. Note, cannot do character * rowNumber
  }
//   Pass i + 1 and count as the arguments to your padRow call. Like parameters, arguments are separated by a comma.

  for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count))
  }

  function padRow(rowNumber, rowCount) {    // This adds a single space to the beginning and end of the repeats character string
    return " " + character.repeat(rowNumber) + " ";
  }

// To create a three row pyramid, consider the image below. The blank spaces (represented by dots) follow a pattern: rowCount - rowNumber
// ··#··    The no of rows is 3 (rowCount) and the rowNumber is 1, 3 -1 = 2 spaces.
// ·###·
// #####
// The code above is amended to take the number of spaces for each row into account
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ". repeat(rowCount - rowNumber);
  }