// The .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() 
// which adds the value at the end of the array. .unshift() returns the new length of the array it was called on.
// Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element. 
// Example:
// const numbers = [1, 2, 3];
// const shifted = numbers.shift();
// console.log(shifted);
// const unshifted = numbers.unshift(5);
// console.log(unshifted);
// console.log(numbers);

// result:
// 1
// 3
// [ 5, 2, 3 ]