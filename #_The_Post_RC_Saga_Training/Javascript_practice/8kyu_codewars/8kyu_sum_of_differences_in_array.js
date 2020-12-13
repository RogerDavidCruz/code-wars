// 8 kyu - Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

const sumOfDifferences = arr => arr.sort((a,b) => b - a).reduce((acc, cv, idx, ar) => idx + 1 < arr.length ? acc + (cv - ar[idx + 1]) : acc, 0);

//prep

//p: array of numbers
//r: number
//e: [1, 2, 10], 9
//p: sort method to organize numbers. Reduce method with a call back function that uses four parameters
//   with logci accessing the old video recordingds of their play and this increases the acc
//   and if the arr is empty return 0.
