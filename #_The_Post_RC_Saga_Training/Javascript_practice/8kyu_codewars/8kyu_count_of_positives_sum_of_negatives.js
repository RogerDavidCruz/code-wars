// 8 kyu - Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input){
  if(input == null || input.length === 0) return [];
  const countPositiveNums = input.filter((cv, idx) => cv > 0).length;
  const sumNegativeNums = input.filter((cv, idx) => cv < 0).reduce((acc, cv) => acc + cv);
  return [countPositiveNums, sumNegativeNums];
}

//prep

//p: array of numbers
//r: array of two elements, first element is the count of positive nums, and second element
//   is the sum of negative numbers.
//e: p: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] r: [10, -65]
//p: reduce method to sum elements with a ternary operator with the filter method that adds 
//   checks for negative numbers to add and else positive numbers are added. Also have a 
//   null check and an empty array check
