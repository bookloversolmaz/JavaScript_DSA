// remove all non-alphanumeric characters (punctuation, spaces and symbols)
// change to same case (lower or upper case)

// Get user input. Note that below gets you the DOM element directly, need to get the value of the DOM
const textInput = document.getElementById("text-input")

const cleanInput = (userText) => {
    // Remove punctuation, spaces and symbols
    const regex = /[^a-zA-Z0-9]/g;
    // Replace regex characters with nothing and change to all lowercase
    return userText.replace(regex, '').toLowerCase();
};

//  when user clicks on the#check-btn element without entering a value into the #text-input element, 
// an alert should appear with the text "Please input a value."
const checkEmptyInput = (userText) => {
   if (userText === "")
       alert("Please input a value.");
       return false;
};
const isItAPalindrome = () => {
    // Find the value of the DOM element that contains the user input
    const userText = textInput.value; //Get value of input field
    // Implement cleanedInput
    const cleanedString = cleanInput(userText);
    // Reverse the cleaned string
    const reversedString = cleanInput.split("").reverse().join("");
    // Compare both iterations if identical return string "$`textInput` is a palindrome"
    if (cleanedString === reversedString) {
        return "$`textInput` is a palindrome"
    } else {
        // If not identical return string "$`textInput` is not a palindrome"
       return "$`textInput` is not a palindrome"
    } 
};