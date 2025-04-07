// remove all non-alphanumeric characters (punctuation, spaces and symbols)
// change to same case (lower or upper case)

// Get user input. Note that below gets you the DOM element directly, need to get the value of the DOM
// Create below variables to represent user input, outputs and interactions
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const userResult = document.getElementById("result");

const cleanInput = (userText) => {
    // Remove punctuation, spaces and symbols and change to all lowercase
    return userText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

//  when user clicks on the#check-btn element without entering a value into the #text-input element, 
// an alert should appear with the text "Please input a value."
const checkEmptyInput = (userText) => {
    // trim removes whitespaces from both ends of the string so " " becomes "" need to check for nothing rather than empty space
    if (userText.trim() === "") {
        alert("Please input a value.");
        return true; // true means input IS empty
    }
        return false;
};
const isItAPalindrome = (userText) => {
    // Implement cleanedInput
    const cleanedString = cleanInput(userText);
    // Reverse the cleaned string
    const reversedString = cleanedString.split("").reverse().join("");
    // Compare both iterations if identical return string "$`textInput` is a palindrome"
    if (cleanedString === reversedString) {
        return `${userText} is a palindrome`
    } else {
        // If not identical return string "$`textInput` is not a palindrome"
        return `${userText} is not a palindrome`
    } 
};

// Process the program. When user clicks add button run functions above
checkButton.addEventListener("click", () => {
    const userText = textInput.value; // Get fresh input on click
    // check if string is empty 
    if (checkEmptyInput(userText)) return;
    // Implement the palindrome function
    const resultMessage = isItAPalindrome(userText);
    userResult.innerHTML = resultMessage; // Display result in the DOM
});