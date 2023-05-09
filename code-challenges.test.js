// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//PSEUDO CODING
// Name:fibby
// Input: number greater than 2 (const fibLength1 = 6, const fibLength2 = 10)
// Output: An array the length of the number input, containing the numbers of the Fibonacci sequence
// PROCESS: Create a function named Fibby with the input being a number. 
//First declare an array with the first two values of the Fibonacci sequence [1,1]. 
//Then use a for loop to iterate through the array. 
  // Set i = 2 since the next element we add will return at the 2nd index location. 
  // Use the 'i <input number' as the stopping point so the new array returns the same number of elements as what the input number is.
  // ie: i < 6 will stop at 5 index locations and 6 elements (arrays are zero indexed).
// Use the .push([]) method to add elements onto the end of the array and return a new length array. Push the current index + previous index. 
//[1, 1, ([2-1] + [2-2])]
//[1, 1, (value of the 1 index location of initial array + the value of the 0 index location of initial array)]
//[1, 1, [1], [0]]
//[1, 1, (1+1)]
//[1, 1, 2...]
// now the next index location we are going to iterate over (i++) is [3]
// Continue until the number of elements returned equals the input number. 
//[1, 1, 2, ([3-1] + [3-2])]
//[1, 1, 2, ([2] + [1])]
//[1, 1, 2, (2 + 1)]
//[1, 1, 2, 3]
// Chris, I hope you're still reading :)  

// a) Create a test with expect statements for each of the variables provided.

// describe("fibby", () => {
//   it("returns a Fibonacci sequence in an array the same length as the input number", () => {
//     expect (fibby(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
//     expect (fibby(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })
// ReferenceError: fibby is not defined


// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // b) Create the function that makes the test pass.


// const fibby = (number) => {
//   let initialArray = [1,1]
//   for (let i = 2; i < number; i++){
//     initialArray.push(initialArray[i-1] + initialArray [i-2])
//   }
//   return initialArray
// }


// console.log(fibby(fibLength1))
// //output: [ 1, 1, 2, 3, 5, 8 ]
// console.log(fibby(fibLength2))
//output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//  PASS  ./code-challenges.test.js
  // fibby
  // ✓ returns a Fibonacci sequence in an array the same length as the input number (4 ms)








// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// PSEUDO CODING
//Name: sortedArray
//input: object (const studyMinutesWeek1, const studyMinutesWeek2)
//output: An array of the values of the object sorted from least to greatest 
//PROCESS: Create a function named sortedArray with the input of object. 
  // Use the Object.values(object) static method which returns an array of a given objects own values (ie: the numbers)
  // Then use the .sort((a, b) => (a- b)) method to sort the array from least to greatest. We must pass in the compare function because the .sort() method alone sorts the elements as strings in alphabetical and ascending order. 
  // .sort((accumulator, currentValue => initialValue))
  //If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
  //example from studyMinutesWeek1: sort((90, 30) => (90 - 30))
  // This returns 60, a positive number. 
  // sort() compares two values, it sends the values to the compare function and sorts the values according to the returned (negative, zero, positive) value.

// a) Create a test with expect statements for each of the variables provided.

// describe ("sortedArray", () => {
//   it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
//     expect (sortedArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect (sortedArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

//ReferenceError: sortedArray is not defined



// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }

// // Expected output: [10, 15, 20, 45, 60, 65, 100]

// // b) Create the function that makes the test pass.

// const sortedArray = (object) => {
//   return Object.values(object).sort((a, b) => a - b 
//   )
// }


// console.log(sortedArray(studyMinutesWeek1))
// //output: output: [15, 15, 20, 30, 30, 60, 90]

// console.log(sortedArray(studyMinutesWeek2))
//output: [10, 15, 20, 45, 60, 65, 100]

// PASS  ./code-challenges.test.js
// sortedArray
// ✓ takes in an object and returns an array of the values sorted from least to greatest. (7 ms)










// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// PSEUDO CODING
//Name: accSum
//Input: array
//Output: An array of the accumulating sum. An empty array should return an empty array.
//Process: Create a function that takes in an array. Use the .map() method to iterate through the index of the array.
// Use the .slice() method to return selected elements from a given start, up to a given end in an array as a new array array.slice(start,end)
// Us the .reduce() method to return a single value: the function's accumulated result. In this case we pass an add function into the method to get the sum of the initial/current value + next element in the array
// (a,b) => a +b
// (accumulator, current value) => initialValue
//If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
//ie: 100, -17 => 100 +(-17)
// equals 83




// a) Create a test with expect statements for each of the variables provided.

// describe("accSum",() => {
//   it("Takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
//     expect (accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
//     expect (accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
//     expect (accSum(accountTransactions3)).toEqual([])
//   })
// })

//ReferenceError: accSum is not defined

// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []

// // b) Create the function that makes the test pass.

// const accSum = (array) => {
//   return array.map((number, index) => {
//     return array.slice(0, index + 1).reduce((a, b) => a +b)
//   })
// }

// console.log(accSum(accountTransactions1))
// //output: [100, 83, 60, 51]
// console.log(accSum(accountTransactions2))
// //output: [250, 161, 261, 165]
// console.log(accSum(accountTransactions3))
//output: []

// //PASS  ./code-challenges.test.js
// accSum
// ✓ Takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (10 ms)