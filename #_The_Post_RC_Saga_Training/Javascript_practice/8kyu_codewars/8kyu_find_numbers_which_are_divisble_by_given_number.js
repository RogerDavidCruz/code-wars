// 8 kyu - Find numbers which are divisible by given number
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0);

//prep

//p: array of numbers, and a number (the divisor)
//r: an array that contains all numbers divisible by the divisor(2nd param)
//e: parameter: [1, 2, 3, 4, 5, 6], 2) returns: [2, 4, 6]
//p: filter through the array and in the call back divide by two, if true, 
//   it should return a new array with the divisor numbers
