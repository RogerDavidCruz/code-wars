// 8 kyu - Grasshopper - Array Mean
// https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript

var findAverage = function (nums) {
  return nums.reduce((acc, cv) => acc + cv)/nums.length;
}

//prep

//p: array of numbers
//r: one number
//e: p: [1, 3, 5, 7] r: 4
//p: use the reduce function and then the 
//   length of the array to defide the number
//   and return the final number as the mean
